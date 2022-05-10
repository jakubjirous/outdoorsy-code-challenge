import { KeyboardKey } from "../../utils/keyboardKey";

describe("keyboardKey", () => {
  test.each([
    ["comma", KeyboardKey.COMMA, ","],
    ["backspace", KeyboardKey.BACKSPACE, "Backspace"],
    ["enter", KeyboardKey.ENTER, "Enter"],
  ])("for keyboard key '%s' should return '%s'", (keyName, keyConst, expected) => {
    expect(keyConst).toEqual(expected);
  });
});
