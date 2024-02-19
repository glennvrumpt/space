import Component from "./component.js";
import InputManager from "../utils/input-manager.js";

export default class InputComponent extends Component {
  constructor() {
    super();
    this.inputManager = new InputManager();
  }
}
