import * as t from "io-ts";

/**
 * TypeScript runtime type system for IO decoding/encoding
 */
export const RuntimeRentalResponse = t.type({
  data: t.readonlyArray(
    t.type({
      id: t.string,
      attributes: t.type({
        name: t.string,
        primary_image_url: t.string,
      }),
    })
  ),
});
