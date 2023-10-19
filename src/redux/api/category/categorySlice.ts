import { baseApi } from "../baseApi";

const categorySlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postCategory: build.mutation({
      query: (categroyData) => ({
        url: "/category",
        method: "POST",
        data: categroyData,
        contentType: "application/json",
      }),
    }),
    getCategory: build.query({
      query: () => ({
        url: "/category",
        method: "get",
        contentType: "application/json",
      }),
    }),
  }),
});

export const { usePostCategoryMutation, useGetCategoryQuery } = categorySlice;
