import { baseApi } from "../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    postService: build.mutation({
      query: (serviceData: any) => ({
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
    getService: build.query({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "GET",
        contentType: "application/json",
      }),
    }),
  }),
});

export const {
  usePostServiceMutation,
  useGetServicesQuery,
  useGetServiceQuery,
} = serviceApi;
