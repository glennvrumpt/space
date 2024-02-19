import System from "./system.js";

export default class CollisionSystem extends System {
  update(entities, canvas) {
    entities.forEach((entity) => {
      const positionComponent = entity.getComponent("PositionComponent");
      const spriteComponent = entity.getComponent("SpriteComponent");

      if (positionComponent && spriteComponent) {
        if (positionComponent.x < 0) {
          positionComponent.x = 0;
        }

        if (positionComponent.y < 0) {
          positionComponent.y = 0;
        }

        if (positionComponent.x + spriteComponent.width > canvas.width) {
          positionComponent.x = canvas.width - spriteComponent.width;
        }

        if (positionComponent.y + spriteComponent.height > canvas.height) {
          positionComponent.y = canvas.height - spriteComponent.height;
        }
      }
    });
  }
}
