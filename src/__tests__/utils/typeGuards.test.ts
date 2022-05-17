import { hasObjectProperty, isArray, isBoolean, isDefined, isNumber, isObject, isString } from "../../utils/typeGuards";

describe("typeGuards", () => {
  describe("isDefined", () => {
    test.each([[undefined], [null]])("should not return isDefined for '%s'", (value) => {
      expect(isDefined(value)).toBeFalsy();
    });

    test.each([[0], ["0"], [true], [false], [{}], [["0", "1"]], [[0, 1]]])(
      "should return isDefined for '%s'",
      (value) => {
        expect(isDefined(value)).toBeTruthy();
      }
    );
  });

  describe("isString", () => {
    test.each([[0], [true], [false], [{}], [["0", "1"]], [[0, 1]]])("should not return isString for '%s'", (value) => {
      expect(isString(value)).toBeFalsy();
    });

    test("should return isString for 'string'", () => {
      expect(isString("0")).toBeTruthy();
    });
  });

  describe("isNumber", () => {
    test.each([["0"], [true], [false], [{}], [["0", "1"]], [[0, 1]]])(
      "should not return isNumber for '%s'",
      (value) => {
        expect(isNumber(value)).toBeFalsy();
      }
    );

    test("should return isNumber for 'string'", () => {
      expect(isNumber(0)).toBeTruthy();
    });
  });

  describe("isBoolean", () => {
    test.each([
      ["string"],
      ["number"],
      ["false"],
      ["true"],
      [0],
      [1],
      [null],
      [undefined],
      [{}],
      [["0", "1"]],
      [[0, 1]],
      [["0", 1]],
    ])("should not return isBoolean for '%s'", (value) => {
      expect(isBoolean(value)).toBeFalsy();
    });

    test("should not return isBoolean for 'true'", () => {
      expect(isBoolean(true)).toBeTruthy();
    });

    test("should return isBoolean for 'false'", () => {
      expect(isBoolean(false)).toBeTruthy();
    });
  });

  describe("isObject", () => {
    test.each([["string"], ["number"], ["false"], ["true"], [0], [1], [undefined], ["object"]])(
      "should not return isObject for '%s'",
      (value) => {
        expect(isObject(value)).toBeFalsy();
      }
    );

    test.each([[null], [["0", "1"]], [[0, 1]], [["0", 1]], { a: "a" }])("should return isObject for '%s'", (value) => {
      expect(isObject(value)).toBeTruthy();
    });
  });

  describe("hasObjectProperty", () => {
    test("should not return hasObjectProperty name in object car", () => {
      const car = {
        brand: "Brand",
      };
      expect(hasObjectProperty(car, "name")).toBeFalsy();
    });

    test("should return hasObjectProperty name in object person", () => {
      const person = {
        name: "Name",
      };
      expect(hasObjectProperty(person, "name")).toBeTruthy();
    });
  });

  describe("isArray", () => {
    test.each([["string"], ["number"], ["false"], ["true"], [0], [1], [null], [undefined], [{}]])(
      "should not return isArray for '%s'",
      (value) => {
        expect(isArray(value)).toBeFalsy();
      }
    );

    test.each([[["0", "1"]], [[0, 1]], [[true, false]], [[null, null]], [[{}, {}]]])(
      "should return isArray for '%s'",
      (value) => {
        expect(isArray(value)).toBeTruthy();
      }
    );
  });
});
