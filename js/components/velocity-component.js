import Component from "./component.js";

export default class VelocityComponent extends Component {
  constructor(x, y) {
    super();
    this.x = x || 0;
    this.y = y || 0;
  }
}
