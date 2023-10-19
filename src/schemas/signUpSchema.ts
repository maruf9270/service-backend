import * as youp from "yup";
export const signUpSchema = youp.object().shape({
  name: youp.object().shape({
    firstName: youp.string().required("First Name is required"),
    middleName: youp.string().required("middleName is required"),
    lastName: youp.string().required("Last Name is required"),
  }),
  email: youp.string().email().required("Email is required"),
  password: youp.string().min(6).max(32).required("Password is required"),
  profileImage: youp.mixed().required("Profile Image is required"),
  phone: youp.string().required("Phone is required"),
  address: youp.string().required("Address is required"),
});
