import Entity from "./entity.js";
import SpriteComponent from "../components/sprite-component.js";
import AnimationComponent from "../components/animation-component.js";
import PositionComponent from "../components/position-component.js";
import VelocityComponent from "../components/velocity-component.js";
import InputComponent from "../components/input-component.js";

export default class PlayerEntity extends Entity {
  constructor(ctx, images) {
    super();

    const scaledWidth = 64 * 1.5;
    const scaledHeight = 29 * 1.5;

    const spriteComponent = new SpriteComponent(
      images,
      scaledWidth,
      scaledHeight
    );
    const animationComponent = new AnimationComponent(spriteComponent, 4, 8);
    const positionComponent = new PositionComponent(
      100,
      (ctx.canvas.height - scaledHeight) / 2
    );
    const velocityComponent = new VelocityComponent();
    const inputComponent = new InputComponent();

    this.addComponent(spriteComponent);
    this.addComponent(animationComponent);
    this.addComponent(positionComponent);
    this.addComponent(velocityComponent);
    this.addComponent(inputComponent);
    this.addComponent({ Player: true });
  }
}
