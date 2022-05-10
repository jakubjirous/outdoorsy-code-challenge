import { desktop, laptopLg, laptopMd, mobileLg, mobileMd, mobileSm, tablet } from "../../utils/responsive";

describe("responsive", () => {
  test.each([
    ["mobileSm", mobileSm, 320],
    ["mobileMd", mobileMd, 375],
    ["mobileLg", mobileLg, 425],
    ["tablet", tablet, 768],
    ["laptopMd", laptopMd, 1024],
    ["laptopLg", laptopLg, 1440],
    ["desktop", desktop, 2560],
  ])("for resolution '%s' should return '%s'", (deviceName, device, minWidth) => {
    expect(device).toEqual(minWidth);
  });
});
