const { createDollarString } = require("./utility");

test("expect 10 to render as $10.00", () => {
  expect(createDollarString(10)).toBe("$10.00");
});
