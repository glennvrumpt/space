export default class EntityManager {
  constructor() {
    this.entities = [];
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  updateEntities() {
    this.entities.forEach((entity) => entity.update());
  }
}
