const fusionArray = require("./fusionArray");
test("Fusion de  2 tableau", () => {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  expect(fusionArray(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
});
