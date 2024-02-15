import System from "./system.js";

export default class BackgroundSystem extends System {
  constructor(backgroundComponent) {
    super();
    this.backgroundComponent = backgroundComponent;
  }

  update() {
    this.backgroundComponent.images.forEach((image) => {
      image.x -= this.backgroundComponent.moveSpeed;

      if (image.x + image.width <= 0) {
        image.x += this.calculateTotalWidth();
      }
    });
  }

  calculateTotalWidth() {
    return this.backgroundComponent.images.reduce(
      (total, image) => total + image.width,
      0
    );
  }
}
