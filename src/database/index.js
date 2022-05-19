import Sequelize from 'sequelize';
import databaseConfig from '../config/database'

import User from '../app/models/User'

const models = [User]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.conection = new Sequelize(databaseConfig)

    models.forEach(model => model.init(this.conection))
  }
}

export default new Database()