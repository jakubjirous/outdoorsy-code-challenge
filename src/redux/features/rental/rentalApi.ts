import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface Rental {
  id: number;
  name: string;
  imageUrl: string;
}

export interface RentalResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      primary_image_url: string;
    };
  }[];
}

/**
 * Define a service using a base URL and expected endpoints
 */
export const rentalApi = createApi({
  reducerPath: "rentalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getRental: builder.query<Rental[], string[]>({
      query: (keywords) => `rentals?filter[keywords]=${keywords.join(",")}`,
      transformResponse: (response: RentalResponse) => {
        return response.data.map((data) => {
          return {
            id: Number(data.id),
            name: data.attributes.name,
            imageUrl: data.attributes.primary_image_url,
          };
        });
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetRentalQuery } = rentalApi;
