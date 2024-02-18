import EntityManager from "./entity-manager.js";
import PlayerEntity from "./entities/player-entity.js";
import BackgroundComponent from "./components/background-component.js";
import RenderingSystem from "./systems/rendering-system.js";
import AnimationSystem from "./systems/animation-system.js";
import BackgroundSystem from "./systems/background-system.js";
import PhysicsSystem from "./systems/physics-system.js";
import { loadImages } from "./utils/image-loader.js";

const initialize = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = 1024;
  const canvasHeight = 768;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.append(canvas);

  const entityManager = new EntityManager();

  const renderingSystem = new RenderingSystem();
  const animationSystem = new AnimationSystem();
  const physicsSystem = new PhysicsSystem();

  const playerImages = ["Ship01.png", "Ship02.png", "Ship03.png", "Ship04.png"];
  loadImages(playerImages).then((playerImages) => {
    const player = new PlayerEntity(ctx, playerImages);
    entityManager.addEntity(player);
  });

  const backgroundImages = ["Farback01.png", "Farback02.png", "Stars.png"];
  loadImages(backgroundImages).then((backgroundImages) => {
    const background = [
      new BackgroundSystem(
        new BackgroundComponent(
          [backgroundImages[0], backgroundImages[1]],
          0.6,
          0
        )
      ),
      new BackgroundSystem(
        new BackgroundComponent(
          [backgroundImages[2], backgroundImages[2]],
          1.2,
          0
        )
      ),
    ];

    mainLoop(
      entityManager,
      renderingSystem,
      animationSystem,
      physicsSystem,
      ctx,
      background
    );
  });
};

const mainLoop = (
  entityManager,
  renderingSystem,
  animationSystem,
  physicsSystem,
  ctx,
  background,
  lastTimestamp
) => {
  const timestamp = performance.now();
  const deltaTime = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  physicsSystem.update(entityManager.entities, deltaTime);
  animationSystem.update(entityManager.entities);
  renderingSystem.update(entityManager.entities, ctx, background);

  requestAnimationFrame(() =>
    mainLoop(
      entityManager,
      renderingSystem,
      animationSystem,
      physicsSystem,
      ctx,
      background,
      lastTimestamp
    )
  );
};

initialize();
