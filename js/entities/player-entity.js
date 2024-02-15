import Entity from "./entity.js";
import SpriteComponent from "../components/sprite-component.js";
import AnimationComponent from "../components/animation-component.js";
import PositionComponent from "../components/position-component.js";

export default class PlayerEntity extends Entity {
  constructor(ctx) {
    super();

    const imageFiles = ["Ship01.png", "Ship02.png", "Ship03.png", "Ship04.png"];

    const spriteComponent = new SpriteComponent(imageFiles, 64 * 1.5, 29 * 1.5);
    const animationComponent = new AnimationComponent(spriteComponent, 4, 8);
    const positionComponent = new PositionComponent(
      100,
      (ctx.canvas.height - spriteComponent.height) / 2
    );

    this.addComponent(animationComponent);
    this.addComponent(spriteComponent);
    this.addComponent(positionComponent);
    this.addComponent({ Player: true });
  }
}
