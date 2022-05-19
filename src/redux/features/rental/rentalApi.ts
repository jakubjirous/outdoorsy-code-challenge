import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { isResponseValid } from "./isResponseValid";

export interface Query {
  keywords: string[];
  pageOffset?: number;
}

export interface Rental {
  id: number;
  name: string;
  imageUrl: string;
}

export interface RentalResponse {
  data: RentalResponseData[];
}

export interface RentalResponseData {
  id: string;
  attributes: RentalResponseAttributes;
}

export interface RentalResponseAttributes {
  name: string;
  primary_image_url: string;
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
    getRental: builder.query<Rental[], Query>({
      query: (query) => `rentals?filter[keywords]=${query.keywords.join(",")}&page[offset]=${query?.pageOffset}`,

      /**
       * There are several ways to validate an API response:
       *
       * 1) Manual testing - isResponseValid()
       * 2) JSON schema validator - isJsonValidBySchema()
       * 3) TypeScript runtime - RuntimeRentalResponse.decode()
       */
      transformResponse: (response: unknown) => {
        // 1) Manual testing
        if (isResponseValid(response)) {
          return response.data.map((data) => {
            return {
              id: Number(data.id),
              name: data.attributes.name,
              imageUrl: data.attributes.primary_image_url,
            };
          });
        } else {
          throw new Error("Server response is not equal to RentalResponse");
        }

        /*
        // 2) JSON schema validator
        if (isJsonValidBySchema(response, rentalResponseSchema)) {
          return (response as RentalResponse).data.map((data) => {
            return {
              id: Number(data.id),
              name: data.attributes.name,
              imageUrl: data.attributes.primary_image_url,
            };
          });
        } else {
          throw new Error("Server response is not equal to RentalResponse");
        }
        */

        /*
        // 3)
        // Decode i.e. validate the API response
        const result = RuntimeRentalResponse.decode(response);
        if (isRight(result)) {
          return (response as RentalResponse).data.map((data) => {
            return {
              id: Number(data.id),
              name: data.attributes.name,
              imageUrl: data.attributes.primary_image_url,
            };
          });
        } else {
          // tslint:disable-next-line:no-console
          console.warn(PathReporter.report(result));

          throw new Error("Server response is not equal to RentalResponse");
        }
      */
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetRentalQuery } = rentalApi;
