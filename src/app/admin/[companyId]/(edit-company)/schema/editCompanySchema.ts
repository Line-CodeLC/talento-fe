import { z } from "zod";

 export const EditCompanySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
   email: z.string(),
   phoneNumber:z.number(),
   address:z.string(),
   hrAllocated:z.string(),
   salesPersonAllocated:z.string()
});