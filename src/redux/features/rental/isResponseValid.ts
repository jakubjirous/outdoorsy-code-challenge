import { hasObjectProperty, isArray, isDefined, isObject, isString } from "../../../utils/typeGuards";
import { RentalResponse } from "./rentalApi";

/**
 * Type guards for RentalResponse validation
 */
export const isResponseValid = (response: unknown): response is RentalResponse => {
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
        hasObjectProperty(data.attributes, "name") &&
        hasObjectProperty(data.attributes, "primary_image_url") &&
        isString(data.attributes.name) &&
        isString(data.attributes.primary_image_url)
      );
    })
  );
};
