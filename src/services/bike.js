import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bikeApi = createApi({
  reducerPath: "bikeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getBikeById: builder.query({
      query: (id) => `bikes/${id}`,
    }),
    getBikes: builder.query({
      query: () => `bikes`,
      providesTags: ["Bikes"],
    }),
    postBike: builder.mutation({
      query: (body) => ({
        url: `bikes`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Bikes"],
    }),
    patchBike: builder.mutation({
      query: (body) => ({
        url: `/bikes/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Bikes"],
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bikes"],
    }),
  }),
});

export const {
  useGetBikeByIdQuery,
  useGetBikesQuery,
  usePostBikeMutation,
  usePatchBikeMutation,
  useDeleteBikeMutation,
} = bikeApi;
