"use client";

import { redirectToPlayPage } from "./server";

// Learn More: https://github.com/muxinc/mux-node-sdk
import type Mux from "@mux/mux-node";
// Learn More: https://www.mux.com/docs/guides/mux-uploader
import MuxUploader from "@mux/mux-uploader-react";

export interface UploaderProps {
  className?: string;
  upload: Mux.Video.Upload;
}

export function Uploader({ className, upload }: UploaderProps) {
  return (
    <MuxUploader
      className={className}
      endpoint={upload.url}
      onSuccess={() => redirectToPlayPage(upload.id)}
    />
  );
}
