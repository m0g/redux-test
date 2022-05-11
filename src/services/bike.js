import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bikeApi = createApi({
  reducerPath: "bikeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getBikeById: builder.query({
      query: (id) => `bikes/${id}`,
    }),
    getBikes: builder.query({
      query: () => `bikes`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBikeByIdQuery, useGetBikesQuery } = bikeApi;
