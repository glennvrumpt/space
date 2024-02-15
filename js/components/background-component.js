import Component from "./component.js";

export default class BackgroundComponent extends Component {
  constructor(images, moveSpeed, yPosition) {
    super();
    this.images = images.map((image, index) => ({
      x: index * image.width,
      y: yPosition,
      width: image.width,
      height: image.height,
      image: image,
    }));
    this.moveSpeed = moveSpeed;
  }
}
