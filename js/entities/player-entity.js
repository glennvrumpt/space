import Entity from "./entity.js";
import SpriteComponent from "../components/sprite-component.js";
import AnimationComponent from "../components/animation-component.js";
import PositionComponent from "../components/position-component.js";
import { loadImages } from "../utils/image-loader.js";

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

    this.addComponent(animationComponent);
    this.addComponent(spriteComponent);
    this.addComponent(positionComponent);
    this.addComponent({ Player: true });
  }
}
