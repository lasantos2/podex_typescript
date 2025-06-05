import {describe, expect, test} from "vitest";

describe.each([
  {
    input: "",
    expected: ["hello", "world"],
  },
  // TODO: more test cases here
])("fetchLocations($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
    let actual = 0;
    
    console.log(actual);
    
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual).toBe(expected[i]);
    }
  });
});