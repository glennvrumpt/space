import Component from "./component.js";

export default class SpriteComponent extends Component {
  constructor(files, width, height) {
    super();
    this.images = files;
    this.width = width;
    this.height = height;
  }
}
