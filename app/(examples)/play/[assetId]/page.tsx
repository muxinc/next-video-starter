import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { Player } from "./player";
import { getPlaybackIdFromAssetId } from "./utils";
import { getAssetById } from "./server";

interface PageParams {
  assetId: string;
}

export async function generateMetadata(props: { params: Promise<PageParams> }): Promise<Metadata> {
  const title = "Watch Video",
    description = "Watch this video created with Mux + Next.js",
    { assetId } = await props.params,
    asset = await getAssetById(assetId),
    playbackId = getPlaybackIdFromAssetId(asset);

  return {
    title,
    description,
    openGraph: playbackId
      ? {
          title,
          images: [
            {
              url: `https://image.mux.com/${playbackId}/thumbnail.png?width=1200&height=630&fit_mode=pad`,
              width: 1200,
              height: 630,
            },
          ],
        }
      : undefined,
    twitter: playbackId
      ? {
          title,
          card: "summary_large_image",
          images: [
            {
              url: `https://image.mux.com/${playbackId}/thumbnail.png?width=1200&height=600&fit_mode=pad`,
              width: 1200,
              height: 600,
            },
          ],
        }
      : undefined,
  };
}

export default async function Page(props: { params: Promise<PageParams> }) {
  const { assetId } = await props.params;

  return (
    <main className={styles.main}>
      <Player assetId={assetId} />
      <Link className={styles.link} href="/">
        Go Home
      </Link>
    </main>
  );
}
