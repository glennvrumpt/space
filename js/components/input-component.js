import Component from "./component.js";

export default class InputComponent extends Component {
  constructor() {
    super();
    this.keys = {};
    this.initListeners();
  }

  initListeners() {
    document.addEventListener("keydown", (event) => {
      this.keys[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
      this.keys[event.key] = false;
    });
  }
}
