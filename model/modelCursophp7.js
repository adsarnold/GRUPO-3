const Sequelize = require ("sequelize");
const config = require ("../config/database");
const db = new Sequelize(config);

async function getCursophp7() {
    const result = await db.query("select * from courses;", { type: Sequelize.QueryTypes.SELECT });
    return result;
  }

  async function insertCurso(courses) {
    await db.query("insert into courses (tittle, extent, price, date, owner) values (:tittle, :extent, :price, :date, :owner)", {
      replacements: {
        tittle: courses.tittle,
        extent: courses.extent,
        price: courses.price,
        date: courses.date,
        owner: courses.owner
      }
    })
  }
  module.exports = {
      getCursophp7:getCursophp7
  }