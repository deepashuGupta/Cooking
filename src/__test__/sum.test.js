import { sum } from "../components/Sum";

test("should first", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
