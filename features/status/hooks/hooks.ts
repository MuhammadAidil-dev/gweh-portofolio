"use client";

import { useEffect, useState } from "react";
import { ApiError } from "../../../lib/api-error";
import { getHealth } from "../service/api";
import type { Health } from "../schema/schema";

export function useHealth() {
  const [data, setData] = useState<Health | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    getHealth()
      .then((health) => {
        if (alive) setData(health);
      })
      .catch((err: unknown) => {
        if (alive) setError(err instanceof ApiError ? err.message : "Gagal memuat status API");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return { data, loading, error };
}
