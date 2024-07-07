import capitalise from "./capitalise";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";
import analyseArray from "./analyseArray";

test("capitalise", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.divide(2, 2)).toBe(1);
});

test("caesar cipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyse array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
