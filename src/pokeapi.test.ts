import { PokeAPI } from "./pokeapi.js";
import {describe, expect, test} from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test poke api :", async ({ key, val, interval }) => {
// add some pokeapi tests here
});
