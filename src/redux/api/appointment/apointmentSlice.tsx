import { baseApi } from "../baseApi";

const appoint = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSlots: build.query({
      query: (data: any) => ({
        url: "/bookings/slots",
        method: "post",
        body: data,
        data: data,
        contentType: "application/json",
      }),
    }),
    book: build.mutation({
      query: (data: any) => ({
        url: "/bookings",
        method: "post",
        body: data,
        data: data,
        contentType: "application/json",
      }),
      invalidatesTags: ["appointment"],
    }),
    getBook: build.query({
      query: () => ({
        url: "/bookings",
        method: "get",
        contentType: "application/json",
      }),
      providesTags: ["appointment"],
    }),
    patchBook: build.mutation({
      query: (data: { id: string; status: string }) => ({
        url: `/bookings/${data.id}`,
        method: "patch",
        body: data,
        data: data,
        contentType: "application/json",
      }),
      invalidatesTags: ["appointment"],
    }),
  }),
});

export const {
  useGetSlotsQuery,
  useBookMutation,
  useGetBookQuery,
  usePatchBookMutation,
} = appoint;
