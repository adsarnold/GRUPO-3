const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getList() {
    const result = await db.query("select * from courses;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getListById(id) {
    const result = await db.query("select * from curses where id = :cursesId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        coursesId: id
      }
    });
  
    return result[0];
  }
  
  async function insertList(courses) {
    await db.query("insert into courses (tittle, extent, price, date) values (:tittle, :extent, :price, :date)", {
      replacements: {
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price,
        date: courses.date
      }
    })
  }
  
  
  async function updateList(courses) {
    await db.query("update courses set tittle = :tittle, extent = :extent, price = :price, date =:date where id = :id", {
      replacements: {
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price,
        date: courses.date
      }
    })
  }
  
  async function removeList(coursesID) {
    await db.query("delete from courses where id = :id", {
      replacements: {
        id: coursesID
      }
    })
  }
  
  module.exports = {
    getList: getList,
    insertList: insertList,
    updateList: updateList,
    removeList: removeList,
    getListById: getListById,
  };