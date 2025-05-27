import { createUpload } from "./server";
import { Uploader } from "./uploader";
import styles from "./page.module.css";

// Disable caching to create a new upload each time.
export const dynamic = "force-dynamic";

export default async function Page() {
  const upload = await createUpload();
  return (
    <main className={styles.main}>
      <Uploader className={styles.uploader} upload={upload} />
    </main>
  );
}
