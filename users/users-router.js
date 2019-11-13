const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkRole("admin"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


function checkRole(role) {
    return function (req, res, next) {
        if (role === req.decodedJwt.role) {
            next();
        } else {
            res.status(403).json({ message: "Can't touch this!" });
        }
    }
}

module.exports = router;