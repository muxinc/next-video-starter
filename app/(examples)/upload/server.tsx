"use server";

import Mux from "@mux/mux-node";
import { redirect } from "next/navigation";

// Reads MUX_TOKEN_ID and MUX_TOKEN_SECRET environment variables.
// Learn More: https://github.com/muxinc/mux-node-sdk
const mux = new Mux();

export async function createUpload() {
  const upload = await mux.video.uploads.create({
    new_asset_settings: {
      playback_policy: ["public"],
      encoding_tier: "baseline",
    },
    cors_origin: "*",
  });

  return upload;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function redirectToPlayPage(uploadId: string) {
  let attempts = 0;

  while (attempts <= 10) {
    const upload = await mux.video.uploads.retrieve(uploadId);
    if (upload.asset_id) {
      redirect(`/play/${upload.asset_id}`);
    } else {
      // Polling API to wait for the asset to be created.
      // Alternatively, you could use webhooks: https://docs.mux.com/guides/listen-for-webhooks
      await wait(2000);
      attempts++;
    }
  }

  throw new Error(`No asset_id found for upload "${uploadId}" after ${attempts} attempts.`);
}
