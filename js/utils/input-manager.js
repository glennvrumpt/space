export default class InputManager {
  constructor() {
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
