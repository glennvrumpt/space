import System from "./system.js";

export default class PhysicsSystem extends System {
  update(entities, deltaTime) {
    entities.forEach((entity) => {
      const inputComponent = entity.getComponent("InputComponent");
      const positionComponent = entity.getComponent("PositionComponent");
      const velocityComponent = entity.getComponent("VelocityComponent");

      velocityComponent.x = 0;
      velocityComponent.y = 0;

      if (inputComponent.keys["w"]) {
        velocityComponent.y = -300 * deltaTime;
      }

      if (inputComponent.keys["s"]) {
        velocityComponent.y = 300 * deltaTime;
      }

      if (inputComponent.keys["d"]) {
        velocityComponent.x = 300 * deltaTime;
      }

      if (inputComponent.keys["a"]) {
        velocityComponent.x = -300 * deltaTime;
      }

      positionComponent.x += velocityComponent.x;
      positionComponent.y += velocityComponent.y;
    });
  }
}
