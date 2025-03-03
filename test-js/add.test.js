// const { default: test } = require("node:test");
const addNum = require("./add");
test("Addition 2 nombre", () => {
  expect(addNum(2, 2)).toBe(4);
  expect(addNum(2, -4)).toBe(-2);
});
