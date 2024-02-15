import System from "./system.js";

export default class AnimationSystem extends System {
  update(entities) {
    entities.forEach((entity) => {
      const animationComponent = entity.getComponent("AnimationComponent");

      animationComponent.timerCount--;

      if (animationComponent.timerCount === 0) {
        animationComponent.timerCount = animationComponent.timerCountDefault;
        animationComponent.imageIndex =
          (animationComponent.imageIndex + 1) %
          animationComponent.numberOfImages;
      }
    });
  }
}
