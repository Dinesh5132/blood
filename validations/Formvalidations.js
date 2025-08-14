import z from "zod";

export const formSchema = z.object({
  name: z.string().optional(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(5, "Message must be at least 5 characters"),
});
export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    required_error: "Blood group is required",
  }),
});
export const bloodRequestSchema = z.object({
  patientFirstName: z.string().min(1, "Patient first name is required"),
  patientLastName: z.string().optional(),
  attendeeFirstName: z.string().optional(),
  attendeeLastName: z.string().optional(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  requestType: z.enum(["Blood", "Plasma", "Platelets"]),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    errorMap: () => ({ message: "Please select a valid blood group" }),
  }),
  quantity: z.string().optional(),
  dateOfRequirement: z.string().min(1, "Date of requirement is required"),
  hospitalName: z.string().optional(),
  address: z.string().optional(),
  isCritical: z.boolean(),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the terms before submitting",
    }),
  }),
});

export const volunteerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(1, "Address is required"),
  interest: z.string().min(1, "Please select an area of interest"),
  availability: z.string().min(1, "Please select availability"),
  idProof: z.string().optional(),
  idProofFile: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; // optional
        const file = files[0];
        const allowedTypes = [
          "application/pdf",
          "image/jpeg",
          "image/jpg",
          "image/png",
        ];
        return allowedTypes.includes(file.type);
      },
      {
        message: "Only PDF, JPG, or PNG files are allowed",
      }
    ),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export const bloodBankSchema = z.object({
  bloodBankName: z.string().min(1, "Blood bank name is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  registrationId: z.string().min(1, "Registration ID is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  openingTime: z.string().min(1, "Opening time is required"),
  closingTime: z.string().min(1, "Closing time is required"),

  components: z.string().min(1, "Select at least one blood component"),
  contactName: z.string().min(1, "Contact person name is required"),
  contactPhone: z.string().regex(/^\d{10}$/, "Enter a valid phone number"),

  documentType: z.string().min(1, "Please select a document type"),

  documentFile: z
    .any()
    .refine((files) => files && files.length > 0, "Please upload a document")
    .refine(
      (files) =>
        files &&
        ["application/pdf", "image/jpeg", "image/png"].includes(files[0]?.type),
      "Only PDF, JPG, or PNG files are allowed"
    ),

  terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

export const phoneSchema = z.object({
  countryCode: z.string().nonempty(),
  phoneNumber: z
    .string()
    .nonempty("Mobile number is required")
    // allow only digits and exactly 10
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
});

export const donorSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Please select gender"),
  address: z.string().min(1, "Address is required"),
  bloodGroup: z.string().min(1, "Please select a blood group"),
  notSure: z.boolean().optional(),
  available: z.boolean().optional(),
});

export const bloodRequest = z.object({
  patientFirstName: z.string().min(1, "Patient first name is required"),
  patientLastName: z.string().optional(),
  attendeeFirstName: z.string().optional(),
  attendeeLastName: z.string().optional(),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    errorMap: () => ({ message: "Please select a valid blood group" }),
  }),
  requestType: z.enum(["Blood", "Plasma", "Platelets"]),
  quantity: z
    .string()
    .optional()
    .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) > 0), {
      message: "Quantity must be a positive number",
    }),
  dateOfRequirement: z.string().min(1, "Date of requirement is required"),
  address: z.string().optional(),
  hospitalName: z.string().optional(),
  isCritical: z.boolean().optional(),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to terms" }),
  }),
});
