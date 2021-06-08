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
    await db.query("insert into users (name, adress, cpf, date) values (:name, :adress, :cpf, :date)", {
      replacements: {
        name: users.name,
        adress: users.adress,
        cpf: users.cpf,
        date: users.date
      }
    })
  }
  
  
  async function updateUsers(users) {
    await db.query("update users set name = :name, adress = :adress, cpf = :cpf, date =:date where id = :id", {
      replacements: {
        name: courses.name,
        adress: courses.adress,
        cpf: courses.cpf,
        date: courses.date
      }
    })
  }
  
  async function removeUsers(usersID) {
    await db.query("delete from users where id = :id", {
      replacements: {
        id: usersID
      }
    })
  }
  
  module.exports = {
    getUsers: getUsers,
    insertUsers: insertUsers,
    updateUsers: updateUsers,
    removeUsers: removeUsers,
    getUsersById: getUsersById,
  };