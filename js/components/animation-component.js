import Component from "./component.js";

export default class AnimationComponent extends Component {
  constructor(spriteComponent, numberOfImages, timerCount) {
    super();
    this.images = spriteComponent.images.slice(0, numberOfImages);
    this.timerCount = timerCount;
    this.timerCountDefault = this.timerCount;
    this.numberOfImages = numberOfImages;
    this.imageIndex = 0;
  }
}
