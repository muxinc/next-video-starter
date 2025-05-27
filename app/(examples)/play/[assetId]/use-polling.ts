import { useEffect, useState } from "react";

export interface PollingResult<T> {
  result: T | null;
  isPolling: boolean;
  stop(): void;
}

// Recommend using webhooks over this approach: https://docs.mux.com/guides/listen-for-webhooks

// Alternatively, you can replace this hook with SWR or TanStack Query.
// https://swr.vercel.app
// https://tanstack.com/query/latest

export function usePolling<T>(
  callback: () => Promise<T>,
  interval: number,
  dependencies: unknown[]
): PollingResult<T> {
  const [result, setResult] = useState<T | null>(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;

    let stop = false,
      id: number;

    (async function poll() {
      if (stop) return;
      try {
        setResult(await callback());
      } finally {
        id = window.setTimeout(poll, interval);
      }
    })();

    return () => {
      stop = true;
      if (id) clearTimeout(id);
    };
  }, [interval, stopped, callback, ...dependencies]);

  return {
    result,
    isPolling: !stopped,
    stop() {
      setStopped(true);
    },
  };
}
