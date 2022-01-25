"use strict";

import imageScaling from "../middleware";

it("should get a resized image with the given dimensions", async () => {
  const image = await imageScaling("fjord", 400, 200);
  expect(image).toEqual("/images/resized/fjord_400_200.jpg");
});
