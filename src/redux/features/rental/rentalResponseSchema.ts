/**
 * JSON schema validation for RentalResponse
 */
export const rentalResponseSchema = {
  type: "object",
  required: ["data"],
  properties: {
    data: {
      type: "array",
      items: {
        type: "object",
        required: ["id", "attributes"],
        properties: {
          id: {
            type: "string",
          },
          attributes: {
            type: "object",
            required: ["name", "primary_image_url"],
            properties: {
              name: {
                type: "string",
              },
              primary_image_url: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};
