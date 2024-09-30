const db = require('../db');

class ClassSession {
  static async create({ subjectId, startTime, endTime, zoomLink }) {
    const query = `
      INSERT INTO class_sessions (subject_id, start_time, end_time, zoom_link)
      VALUES ($1, $2, $3, $4)
      RETURNING id, subject_id, start_time, end_time, zoom_link
    `;
    const values = [subjectId, startTime, endTime, zoomLink];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async findBySubjectId(subjectId) {
    const query = 'SELECT * FROM class_sessions WHERE subject_id = $1';
    const result = await db.query(query, [subjectId]);
    return result.rows;
  }
}

module.exports = ClassSession;