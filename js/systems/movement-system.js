import System from "./system.js";

export default class MovementSystem extends System {
  update(entities, deltaTime) {
    entities.forEach((entity) => {
      const inputComponent = entity.getComponent("InputComponent");
      const positionComponent = entity.getComponent("PositionComponent");
      const velocityComponent = entity.getComponent("VelocityComponent");
      const inputManager = inputComponent.inputManager;

      velocityComponent.x = 0;
      velocityComponent.y = 0;

      if (inputManager.keys["w"]) {
        velocityComponent.y = -300 * deltaTime;
      }

      if (inputManager.keys["s"]) {
        velocityComponent.y = 300 * deltaTime;
      }

      if (inputManager.keys["a"]) {
        velocityComponent.x = -300 * deltaTime;
      }

      if (inputManager.keys["d"]) {
        velocityComponent.x = 300 * deltaTime;
      }

      positionComponent.x += velocityComponent.x;
      positionComponent.y += velocityComponent.y;
    });
  }
}
