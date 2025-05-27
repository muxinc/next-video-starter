"use client";

import { AlertIcon, LoaderIcon } from "./icons";
import { getPlaybackIdFromAssetId } from "./utils";
import styles from "./player.module.css";

// Learn More: https://www.mux.com/docs/guides/player-core-functionality
import MuxPlayer from "@mux/mux-player-react";
import { usePolling } from "./use-polling";
import { getAssetById } from "./server";
import { useEffect } from "react";

export interface PlayerProps {
  assetId: string;
}

export function Player({ assetId }: PlayerProps) {
  const { result: asset, stop } = usePolling(() => getAssetById(assetId), 1500, []),
    playbackId = asset ? getPlaybackIdFromAssetId(asset) : null;

  useEffect(() => {
    // Stop polling once the asset is ready
    if (asset?.status === "ready" || asset?.status === "errored") stop();
  }, [asset]);

  if (asset?.status === "errored") {
    return <PlayerErrorState />;
  }

  if (asset?.status === "ready" && playbackId) {
    return (
      <div className={styles.container}>
        <MuxPlayer
          className={styles.player}
          playbackId={playbackId.id}
          metadata={{ player_name: "next-video-starter" }}
        />
      </div>
    );
  }

  return <PlayerLoadingState />;
}

function PlayerErrorState() {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <AlertIcon /> Error loading video.
      </div>
    </div>
  );
}

function PlayerLoadingState() {
  return (
    <div className={styles.container}>
      <LoaderIcon width="15%" height="15%" />
    </div>
  );
}
