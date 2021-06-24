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