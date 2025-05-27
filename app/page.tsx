import Image from "next/image";
import Link from "next/link";
import Video from "next-video";
import styles from "./page.module.css";
import getStarted from "/videos/get-started.mp4";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logos}>
          <Image
            className={styles.icon}
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={72}
            height={72}
            priority
          />
          <Image
            className={styles.icon}
            src="/plus.svg"
            alt="Plus"
            width={20}
            height={20}
            priority
          />
          <Image
            className={styles.icon}
            src="/next-video.svg"
            alt="Next Video Logo"
            width={72}
            height={72}
            priority
          />
        </div>

        <Video className={styles.video} src={getStarted} />

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href={`https://vercel.com/new/clone?repository-url=https://github.com/muxinc/next-video-starter&products=[{"type":"integration","productSlug":"mux","integrationSlug":"mux","protocol":"video"}]`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <Link href="/upload" className={styles.secondary}>
            Upload Video
          </Link>
          <a
            href="https://next-video.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>

      <div className={styles.spacer} />

      <footer className={styles.footer}>
        <a href="https://next-video-demo.vercel.app" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Demo
        </a>
        <a href="https://next-video.dev" target="_blank" rel="noopener noreferrer">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to next-video.dev →
        </a>
      </footer>
    </div>
  );
}
