import { z } from "zod";

export const EditCompanySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),

  email: z.string().email({ message: "Invalid email address." }),

  phoneNumber: z.string()
    .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }), // String with 10-digit validation

  address: z.string().min(1, { message: "Address is required." }),

  hrAllocated: z.string().min(1, { message: "HR allocation is required." }),

  salesPersonAllocated: z.string().min(1, { message: "Salesperson allocation is required." }),
});
