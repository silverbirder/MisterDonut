import assert from "assert";

import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../src";

interface MyWorld {
  whatIHeard: string;
}

When("挨拶者が hello と言う", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then(
  "私は {string} と聞こえる",
  function (this: MyWorld, expectedResponse: string) {
    assert.equal(this.whatIHeard, expectedResponse);
  }
);