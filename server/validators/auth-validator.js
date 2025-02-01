const { z } = require("zod");

// Create a Zod schema for better validation
const signupSchema = z.object({
  // Username validation
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name must not be more than 20 characters." })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Name can only contain letters and numbers." }),

  // Phone validation (exact 10 digits)
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .length(10, { message: "Phone must be exactly 10 digits." })
    .regex(/^\d{10}$/, { message: "Phone must contain only digits." }),

  // Address validation
  address: z
    .string({ required_error: "Address is Required" })
    .trim()
    .min(3, { message: "Address must be at least 3 characters." })
    .max(30, { message: "Address must not be more than 30 characters." })
    .regex(/^[a-zA-Z0-9\s,.'-]*$/, { message: "Address can only contain letters, numbers, and certain punctuation." }),

  // Email validation
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters." })
    .max(30, { message: "Email must not be more than 30 characters." }),

  // Password validation (with extra security checks)
  password: z
    .string({ required_error: "Password is Required" })
    .min(3, { message: "Password must be at least 3 characters." })
    .max(20, { message: "Password must not be more than 20 characters." })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character." }),
});

module.exports = signupSchema;
