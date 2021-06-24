const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getCurso() {
    const result = await db.query("select * from courses;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }
  async function getCursoById(id) {
    const result = await db.query("select * from courses where id = :coursesId", {
      type: Sequelize.QueryTypes.SELECT,
      replacements: {
        coursesId: id
      }
    });
  
    return result[0];
  }
  
  async function insertCurso(courses) {
<<<<<<< HEAD
    await db.query("insert into courses (tittle, extent, price, date, owner) values (:tittle, :extent, :price, :date, :owner)", {
      replacements: {
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price,
        date: courses.date,
        owner: courses.owner
=======
    await db.query("insert into courses (tittle, extent, price) values (:tittle, :extent, :price)", {
      replacements: {
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price
>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3
      }
    })
  }
  
  
  async function updateCurso(courses) {
<<<<<<< HEAD
    await db.query("update courses set tittle = :tittle, extent = :extent, price = :price, owner = :owner where id = :id", {
=======
    await db.query("update courses set tittle = :tittle, extent = :extent, price = :price where id = :id)", {
>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3
      replacements: {
        id: courses.id,
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price,
        owner: courses.owner
      }
    })
  }
  
  async function removeCurso(coursesID) {
    await db.query("delete from courses where id = :id", {
      replacements: {
        id: coursesID
      }
    })
  }
  
  module.exports = {
    getCurso: getCurso,
    insertCurso: insertCurso,
    updateCurso: updateCurso,
    removeCurso: removeCurso,
    getCursoById: getCursoById,
  };