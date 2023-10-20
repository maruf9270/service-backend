import { baseApi } from "../baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postfaq: builder.mutation({
      query: (reviewData: any) => ({
        url: "/faq",
        method: "POST",
        data: reviewData,
        contentType: "application/json",
      }),
      invalidatesTags: ["faq"],
    }),
    getfaqs: builder.query({
      query: () => ({
        url: `/faq`,
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["faq"],
    }),
    postBlog: builder.mutation({
      query: (reviewData: any) => ({
        url: "/blogs",
        method: "POST",
        data: reviewData,
        contentType: "application/json",
      }),
      invalidatesTags: ["blog"],
    }),
    getblogs: builder.query({
      query: () => ({
        url: `/blogs`,
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useGetfaqsQuery,
  usePostfaqMutation,
  usePostBlogMutation,
  useGetblogsQuery,
} = faqApi;
