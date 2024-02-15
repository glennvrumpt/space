export default class Entity {
  constructor() {
    this.components = {};
  }

  addComponent(component) {
    this.components[component.constructor.name] = component;
  }

  removeComponent(componentName) {
    delete this.components[componentName];
  }

  getComponent(componentName) {
    return this.components[componentName];
  }
}
