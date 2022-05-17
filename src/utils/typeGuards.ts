/**
 * TypeScript type guards helper functions for correct runtime synchronization between API calls and local interfaces
 */
function isDefined<V>(value: V | undefined | null): value is V {
  return value !== null && value !== undefined;
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isObject(value: unknown): value is object {
  return typeof value === "object";
}

function hasObjectProperty<V>(value: V, property: string): boolean {
  return property in value;
}

function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export { isDefined, isString, isNumber, isBoolean, isObject, hasObjectProperty, isArray };
