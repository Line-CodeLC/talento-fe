import { z } from "zod";

 export const addCompanySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
   email: z.string(),
   phoneNumber:z.number(),
   address:z.string(),
   service:z.string(),
   payRate:z.number(),
   billRate:z.number(),
   commission:z.number(),
   agreement:z.string()
});