"use server";

import { mux } from "@/lib/mux";
import { redirect } from "next/navigation";

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
