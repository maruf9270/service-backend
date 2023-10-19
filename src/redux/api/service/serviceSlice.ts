import { baseApi } from "../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postService: build.mutation({
      query: (serviceData) => ({
        url: "/services",
        method: "POST",
        data: serviceData,
        contentType: "application/json",
      }),
    }),
    getServices: build.query({
      query: () => ({
        url: "/services",
        method: "GET",
        contentType: "application/json",
      }),
    }),
  }),
});

export const { usePostServiceMutation, useGetServicesQuery } = serviceApi;
