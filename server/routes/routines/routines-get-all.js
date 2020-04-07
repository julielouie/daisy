const db = require('../../database');

const routinesGet = (req, res, next) => {
  const petId = req.query.petId;
  const sql = `
                   SELECT "routineId", "routineName", description, "dateTime", "isCompleted"
                     FROM routines AS r
               INNER JOIN pets AS p
                       ON r."petId" = p."petId"
                    WHERE p."petId" = $1
              `;
  const params = [petId];
  db.query(sql, params)
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
