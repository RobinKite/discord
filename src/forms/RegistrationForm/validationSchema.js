import { object, string, number } from "yup";

const validationSchema = object({
  email: string().trim().min(3).required("Email is required"),
  username: string().trim().min(2).required("Username is required"),
  password: string().trim().min(4).max(10).required("Password is required"),
  name: string().trim().min(2),
  day: number().required("Day is required"),
  month: number().required("Month is required"),
  year: number().required("Year is required"),
});

export default validationSchema;
