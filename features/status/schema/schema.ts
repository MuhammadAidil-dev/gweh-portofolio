import { z } from "zod";

export const healthSchema = z.object({
  uptime: z.number(),
});

export type Health = z.infer<typeof healthSchema>;
