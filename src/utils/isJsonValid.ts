import Ajv, { AnySchema } from "ajv";

/**
 * JSON schema validator by specific schema using avj
 * @param json - typically API response
 * @param schema - avj schema
 */
function isJsonValidBySchema(json: unknown, schema: AnySchema): boolean {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const result = validate(json);

  // error logging to console
  // in the future it is possible to connect to the logger
  if (!result) {
    // tslint:disable-next-line:no-console
    console.error(validate.errors);
  }

  return Boolean(result);
}

export default isJsonValidBySchema;
