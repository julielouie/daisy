const db = require('../../database');

const routinesUpdate = (req, res, next) => {
  const {
    routineId, routineName, description, dateTime, isCompleted, isRepeatable
  } = req.body;
  const routineIdSql = `
                        SELECT "routineId"
                          FROM routines
                        WHERE "routineId" = $1;
                       `;
  const sql = `
               UPDATE routines
                  SET "routineName" = $1,
                      description = $2,
                      "dateTime" = $3,
                      "isCompleted" = $4,
                      "isRepeatable" = $5
                WHERE "routineId" = $6
              `;
  const routineIdParams = [routineId];
  const params = [routineName, description, dateTime, isCompleted, isRepeatable, routineId];
  db.query(routineIdSql, routineIdParams)
    .then(routineIdResult => {
      if (!routineIdResult.rows.length) {
        res.status(404).send(`Routine with ID ${routineId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).json(result.rows))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));

};

module.exports = routinesUpdate;
