import build from "next/dist/build";
import { baseApi } from "../baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (reviewData: any) => ({
        url: "/reviews",
        method: "POST",
        data: reviewData,
        contentType: "application/json",
      }),
      invalidatesTags: ["review"],
    }),
    getReviews: builder.query({
      query: (serviceId: string) => ({
        url: `/reviews/${serviceId}`,
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["review"],
    }),
    getallreview: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
        contentType: "application/json",
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  usePostReviewMutation,
  useGetallreviewQuery,
} = reviewApi;
