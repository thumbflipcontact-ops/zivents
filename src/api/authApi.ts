import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestOtp: builder.mutation<void, string>({
      query: (email) => ({
        url: '/auth/request-otp',
        method: 'POST',
        body: { email },
      }),
    }),
    verifyOtp: builder.mutation<{ token: string }, any>({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRequestOtpMutation, useVerifyOtpMutation } = authApi;