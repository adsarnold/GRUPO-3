const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getUsers() {
    const result = await db.query("select * from users;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getUsersById(id) {
    const result = await db.query("select * from users where id = :usersId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        usersId: id
      }
    });
  
    return result[0];
  }
  
  async function insertUsers(users) {
    await db.query("insert into users (nome, senhas) values (:name, :password)", {
      replacements: {
        name: users.name,
        password: users.password
      }
    })
  }
  
  
  module.exports = {
    getUsers: getUsers,
    insertUsers: insertUsers,    
    getUsersById: getUsersById,
  };