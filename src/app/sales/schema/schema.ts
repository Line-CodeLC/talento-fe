import { z } from "zod";

export const addCompanySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).min(1, { message: "Name is required." }),
  
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),

  phoneNumber: z.number().min(10, { message: "Phone number must be at least 10 digits." }).max(10, { message: "Phone number cannot exceed 10 digits." }).refine(val => !isNaN(Number(val)), { message: "Phone number must be a valid number." }),

  address: z.string().min(1, { message: "Address is required." }),

  service: z.string().min(1, { message: "Service is required." }),

  payRate: z.number({
    invalid_type_error: "Pay rate must be a valid number."
  }).min(0, { message: "Pay rate is required." }),

  billRate: z.number({
    invalid_type_error: "Bill rate must be a valid number."
  }).min(0, { message: "Bill rate is required." }),

  commission: z.number({
    invalid_type_error: "Commission must be a valid number."
  }).min(0, { message: "Commission is required." }),

  agreement: z.string().min(1, { message: "Agreement is required." }),
});
