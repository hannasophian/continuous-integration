// console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
// console.log(findShortestString(["why", "hello", "to", "you"]), "to");
// console.log(findShortestString(["brave", "dance"]), "brave");

const findShortestString = require("./find-shortest-string");

test("findShortestString returns the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the first string if the shortest strings are the same length", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
});
