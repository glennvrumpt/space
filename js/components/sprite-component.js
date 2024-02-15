import Component from "./component.js";

export default class SpriteComponent extends Component {
  constructor(files, width, height) {
    super();
    this.images = files.map((file) => this.loadImage(file));
    this.width = width;
    this.height = height;
  }

  loadImage(file) {
    const image = new Image();
    image.src = "images/" + file;
    return image;
  }
}
