import Sequelize from 'sequelize';
import databaseConfig from '../config/database'

import User from '../app/models/User'
import Task from '../app/models/Task';

const models = [User, Task]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.conection = new Sequelize(databaseConfig)

    models.map(model => model.init(this.conection)).map(model => model.associate && model.associate(this.conection.models))
  }
}

export default new Database()