const db = require('../db');

class Subject {
  static async create({ name, description, courseId }) {
    const query = `
      INSERT INTO subjects (name, description, course_id)
      VALUES ($1, $2, $3)
      RETURNING id, name, description, course_id
    `;
    const values = [name, description, courseId];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM subjects WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM subjects';
    const result = await db.query(query);
    return result.rows;
  }
}

module.exports = Subject;