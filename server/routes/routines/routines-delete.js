const db = require('../../database');

const routinesDelete = (req, res, next) => {
  const routineId = parseInt(req.params.routineId);
  const routineIdSql = `
                        SELECT "routineId"
                          FROM routines
                         WHERE "routineId" = $1;
                       `;
  const sql = `
               DELETE FROM routines
                     WHERE "routineId" = $1
              `;
  const params = [routineId];
  db.query(routineIdSql, params)
    .then(routineIdResult => {
      if (!routineIdResult.rows.length) {
        res.status(200).send(`Routine with ID ${routineId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).send(`Routine with ID ${routineId} has been deleted`))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));

};

module.exports = routinesDelete;
