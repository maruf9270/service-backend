import * as youp from "yup";

// export const adminSchema = youp.object().shape({
//   password: youp.string().min(6).max(32).required("Password is required"),
//   admin: youp.object().shape({
//     name: youp.object().shape({
//       firstName: youp.string().required("First Name is required"),
//       lastName: youp.string().required("Last Name is required"),
//       middleName: youp.string().required("middleName is required"),
//     }),
//   }),
//   email: youp.string().email().required("Email is required"),
//   designation: youp.string().required("Designation is required"),
//   dateOfBirth: youp.string().required("DOB is required"),
// });

export const LoginSchema = youp.object().shape({
  password: youp.string().min(6).max(32).required("Password is required"),
  email: youp.string().email().required("Email is required"),
});
