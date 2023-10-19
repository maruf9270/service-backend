import { baseApi } from "../baseApi";

const authApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/register`,
        method: "POST",
        data: loginData,
        contentType: "application/json",
      }),
      invalidatesTags: ["user"],
    }),
    login: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        data: loginData,
        contentType: "application/json",
      }),
      invalidatesTags: ["profile"],
    }),
    getProfile: build.query({
      query: () => ({
        url: `/auth/profile`,
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["profile"],
    }),
    getAll: build.query({
      query: () => ({
        url: "/auth/",
        method: "GET",
        contentType: "application/json",
      }),
      providesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/auth/${id}`,
        method: "DELETE",
        contentType: "application/json",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useLoginMutation,
  useGetProfileQuery,
  useGetAllQuery,
  useDeleteUserMutation,
} = authApi;
