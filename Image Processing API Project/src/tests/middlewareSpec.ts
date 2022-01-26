"use strict";

import imageScaling from "../middleware";

it("should get a resized image with the given dimensions", async () => {
  const image = await imageScaling("fjord", 500, 200);

  if (image) {
    expect(image).toEqual("/images/resized/fjord_500_200.jpg");
  }
});
