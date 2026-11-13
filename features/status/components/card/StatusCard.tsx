"use client";

import { Toast } from "../../../../components/ui/toast";
import { useHealth } from "../../hooks/hooks";

export function StatusCard() {
  const { data, loading, error } = useHealth();

  if (loading) return <p className="text-sm text-zinc-500">Memeriksa API…</p>;

  return (
    <div className="space-y-3">
      <Toast message={error} />
      {data && (
        <p className="rounded border bg-white px-4 py-2 text-sm">
          API online · uptime {Math.round(data.uptime)}s
        </p>
      )}
    </div>
  );
}
