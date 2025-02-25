import { baseApi } from "../../baseApi/baseApi";
const transactionApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/transaction/send-money",
        method: "POST",
        body: payload,
      }),
    }),
    logout: builder.mutation({
      query: (email) => ({
        url: "/auth/logout",
        method: "POST",
        body: email,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/user/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSendMoneyMutation } = transactionApis;
