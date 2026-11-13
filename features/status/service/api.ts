import { apiPublic } from "../../../lib/fetcher";
import type { Health } from "../schema/schema";

// Endpoint publik (tanpa token): GET /health di backend template.
export function getHealth(): Promise<Health> {
  return apiPublic<Health>("/health");
}
