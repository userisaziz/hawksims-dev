import { z } from "zod";

export const contactFormSchema = (validQueryTypes) => {
  return z.object({
    contactFullName: z.string().min(5, "Full name is required"),
    contactEmail: z.string().email("Invalid email address"),
    contactPhoneNumber: z.string().min(10, "Invalid Phone Number"),
    contactQueryType: z.string().refine(
      (value) => {
        return validQueryTypes?.includes(value);
      },
      {
        message: "One query type must be selected",
      }
    ),
    contactMessage: z
      .string()
      .min(10, "Message must be at least 10 characters long"),
  })
};
