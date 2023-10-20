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
      providesTags: ["service"],
    }),
    getService: build.query({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["service"],
    }),
    getServiceBycat: build.query({
      query: (id: string) => ({
        url: `/services/?category=${id}`,
        method: "GET",
        contentType: "application/json",
      }),
    }),
    patchService: build.mutation({
      query: (params: { id: string; data: any }) => ({
        url: `/services/${params.id}`,
        method: "patch",
        data: params.data,
        contentType: "application/json",
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: build.mutation({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "DELETE",
        contentType: "application/json",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  usePostServiceMutation,
  useGetServicesQuery,
  useGetServiceQuery,
  useGetServiceBycatQuery,
  usePatchServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
