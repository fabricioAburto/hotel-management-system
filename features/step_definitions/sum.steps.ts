import assert from "assert";
import { When, Then } from "@cucumber/cucumber";

function sum(a: number, b: number): number {
  return a + b;
}

When("A number {int} and {int}", function (a: number, b: number) {
  this.result = sum(a, b);
});

Then("{int} is returned", function (result: number) {
  assert.equal(this.result, result);
});
