import type Mux from "@mux/mux-node";

export function getPlaybackIdFromAssetId(asset: Mux.Video.Asset): Mux.PlaybackID | null {
  const playbackIds = asset.playback_ids;

  if (Array.isArray(playbackIds)) {
    return playbackIds.find((id) => id.policy === "public") ?? null;
  }

  return null;
}
