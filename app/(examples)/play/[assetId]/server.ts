"use server";

import { mux } from "@/lib/mux";

export async function getAssetById(assetId: string) {
  return mux.video.assets.retrieve(assetId);
}
