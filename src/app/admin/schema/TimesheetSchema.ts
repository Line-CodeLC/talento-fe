import { z } from "zod";

export const TimesheetSchema = z.object({
  Date: z.date(),

  workingHours: z.number(),

});
