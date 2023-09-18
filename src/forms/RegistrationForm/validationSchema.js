import { object, string } from "yup";

const validationSchema = object({
  email: string().trim().min(3).required("email is required"),
  username: string().trim().min(2).required("username is required"),
  password: string().trim().min(4).max(10).required("password is required"),
  firstName: string().trim().min(2).required("firstName is required"),
  lastName: string().trim().min(2).required("lastName is required"),
});

export default validationSchema;
