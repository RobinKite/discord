import { object, string } from "yup";

const validationSchema = object({
  email: string().trim().min(3).required("email is required"),
  password: string().trim().min(8).max(30).required("password is required"),
});

export default validationSchema;
