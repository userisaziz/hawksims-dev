import { z } from "zod";
const allowedFileTypes = /\.(pdf|docx|doc)$/i;

export const PersonalInformationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  pincode: z.string().min(5, "Pin/Postal Code is required"),
});

export const PositionInformationSchema = z.object({
  desiredSalary: z
    .string()
    .min(1, "Desired Salary is required")
    .transform((val) => Number(val)),

  currency: z.string().min(1, "Currency is required"),
  joinFrom: z.date({ message: "Joining Date is required" }).nullable(),
});

export const EducationBackgroundSchema = z.object({
  highestEducation: z.string().min(1, "Highest level of education is required"),
  schoolUniversityName: z
    .string()
    .min(5, "School/University name must be at least 5 characters long"),
  graduationYear: z
    .string()
    .min(1, "Graduation year is required")
    .transform((val) => Number(val)),
});

export const WorkExperienceSchema = z.object({
  recentEmployer: z.string().min(1, "Most recent employer is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  empStartDate: z
    .date({ message: "Employment Start Date is required" })
    .nullable(),
  empEndDate: z.date({ message: "Employment End Date is required" }).nullable(),
  currentlyEmployed: z.boolean().optional(),
  responsibilities: z
    .string()
    .min(1, "Responsibilities are required")
    .max(250, "Responsibilities must be at most 250 characters long"),
  joinFrom: z.date({ message: "Can Join From date is required" }).nullable(),
});

export const RelevantSkillSetSchema = z.object({
  relevantSkills: z
    .string()
    .min(1, "Relevant skill set is required")
    .regex(
      /^[^,]+(,[^,]+)*$/,
      "Skills must be separated by commas without extra spaces"
    ),
});
export const ReferencesSchema = z.object({
  fullName: z.string().optional(),
  referenceNumber: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Invalid phone number format")
    .optional(), // Make it optional after applying regex
  relation: z.string().optional(),
});
export const AttachmentsSchema = z.object({
  CV: z
    .instanceof(File, { message: "Please upload your CV" })
    .refine((file) => allowedFileTypes.test(file.name), {
      message: "CV must be a PDF or DOCX file",
    }),
  coverLetter: z
    .instanceof(File, { message: "Please upload your cover letter" })
    .nullable()
    .optional() // Allow it to be undefined or null
    .refine((file) => !file || allowedFileTypes.test(file.name), {
      message: "Cover Letter must be a PDF or DOCX file",
    }),
});

export const AdditionalInformationSchema = z.object({
  interest: z.string().min(10, "Interest field is required"),
  authorizedToWork: z.enum(["yes", "no"], "Authorization to work is required"),
  felonyConviction: z.enum(["yes", "no"], "Felony conviction status is required"),
});

export const TermsAndConditionsSchema = z.object({
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
});

export const AlertSchema = z.object({
  futureAlert: z.boolean().default(false),
});

export const downloadFormSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  industry: z.string().min(1, "Industry is required"),
  organisation: z.string().min(1, "Organisation name is required"),
});

export const applicationFormSchema = z.object({
  positionInformation: PositionInformationSchema,
  educationBackground: EducationBackgroundSchema,
  workExperience: WorkExperienceSchema,
  skills: RelevantSkillSetSchema,
  references: ReferencesSchema,
  additionalInformation: AdditionalInformationSchema,
  personalInformation: PersonalInformationSchema,
  // downloadForm: downloadFormSchema,
  attachments: AttachmentsSchema,
  termsAccepted: TermsAndConditionsSchema,
  alert: AlertSchema
});
