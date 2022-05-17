import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { hasObjectProperty, isArray, isDefined, isObject, isString } from "../../../utils/typeGuards";

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
      transformResponse: (response: RentalResponse) => {
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
      },
    }),
  }),
});

/**
 * Type guards for response validation
 */
const isResponseValid = (response: unknown): response is RentalResponse => {
  return (
    isDefined(response) &&
    hasObjectProperty(response, "data") &&
    isDefined((response as RentalResponse).data) &&
    isArray((response as RentalResponse).data) &&
    (response as RentalResponse).data.every((data) => {
      return (
        isDefined(data) &&
        hasObjectProperty(data, "id") &&
        hasObjectProperty(data, "attributes") &&
        isDefined(data.id) &&
        isString(data.id) &&
        isDefined(data.attributes) &&
        isObject(data.attributes) &&
        hasObjectProperty(data.attributes, "name1") &&
        hasObjectProperty(data.attributes, "primary_image_url") &&
        isString(data.attributes.name) &&
        isString(data.attributes.primary_image_url)
      );
    })
  );
};

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetRentalQuery } = rentalApi;
