const db = require('../../database');

const routinesGet = (req, res, next) => {
  const sql = `
                SELECT "routineId", "routineName", description, "dateTime", "isCompleted"
                  FROM routines AS r
            INNER JOIN pets AS p
                    ON r."petId" = p."petId"
              `;
  db.query(sql)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
};

module.exports = routinesGet;
