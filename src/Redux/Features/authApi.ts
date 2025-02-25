import { baseApi } from "../baseApi/baseApi";

const authApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: ({ email }) => ({
        url: "/auth/logout",
        method: "POST",
        body: email,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApis;
