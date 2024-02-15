import System from "./system.js";

export default class RenderingSystem extends System {
  clearCanvas(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  drawBackground(component, ctx) {
    component.backgroundComponent.images.forEach((image) => {
      ctx.drawImage(image.image, image.x, image.y);
    });
  }

  update(entities, ctx, background) {
    this.clearCanvas(ctx);

    background.forEach((component) => {
      this.drawBackground(component, ctx);
      component.update();
    });

    entities.forEach((entity) => {
      const spriteComponent = entity.getComponent("SpriteComponent");
      const positionComponent = entity.getComponent("PositionComponent");
      const animationComponent = entity.getComponent("AnimationComponent");

      if (spriteComponent && positionComponent) {
        ctx.drawImage(
          animationComponent.images[animationComponent.imageIndex],
          positionComponent.x,
          positionComponent.y,
          spriteComponent.width,
          spriteComponent.height
        );
      }
    });
  }
}
