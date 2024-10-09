import { z } from "zod";

export const changeHrSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
});
export const requestDocSchema = z.object({
  document: z.string().min(2, { message: "Name must be at least 2 characters." }),
  documentType: z.string().min(2, { message: "Name must be at least 2 characters." }),
});
