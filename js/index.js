import PlayerEntity from "./entities/player-entity.js";
import BackgroundComponent from "./components/background-component.js";
import RenderingSystem from "./systems/rendering-system.js";
import AnimationSystem from "./systems/animation-system.js";
import BackgroundSystem from "./systems/background-system.js";

const loadImages = (images) => {
  return new Promise((resolve) => {
    let loadedImages = 0;

    images.forEach((image) => {
      image.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          resolve();
        }
      };
    });
  });
};

const initialize = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = 1024;
  const canvasHeight = 768;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.append(canvas);

  const entities = [];

  const player = new PlayerEntity(ctx);

  entities.push(player);

  const renderingSystem = new RenderingSystem();
  const animationSystem = new AnimationSystem();

  const image1 = new Image();
  const image2 = new Image();
  const image3 = new Image();

  image1.src = "images/Farback01.png";
  image2.src = "images/Farback02.png";
  image3.src = "images/Stars.png";

  loadImages([image1, image2, image3]).then(() => {
    const background = [
      new BackgroundSystem(new BackgroundComponent([image1, image2], 0.6, 0)),
      new BackgroundSystem(new BackgroundComponent([image3, image3], 1.2, 0)),
    ];
    mainLoop(entities, animationSystem, renderingSystem, ctx, background);
  });
};

const mainLoop = (
  entities,
  animationSystem,
  renderingSystem,
  ctx,
  background
) => {
  animationSystem.update(entities);
  renderingSystem.update(entities, ctx, background);
  requestAnimationFrame(() =>
    mainLoop(entities, animationSystem, renderingSystem, ctx, background)
  );
};

initialize();
