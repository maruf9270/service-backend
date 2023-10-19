import { axiosBaseQuery } from "@/helper/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://tutoring-service-backend.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "user", "profile", "review"],
});
