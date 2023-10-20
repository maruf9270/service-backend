import * as youp from "yup";
export const signUpSchema = youp.object().shape({
  name: youp.object().shape({
    firstName: youp.string().required("First Name is required"),
    middleName: youp.string().required("middleName is required"),
    lastName: youp.string().required("Last Name is required"),
  }),
  email: youp.string().email().required("Email is required"),
  phone: youp.string().required("Phone is required"),
  address: youp.string().required("Address is required"),
});
