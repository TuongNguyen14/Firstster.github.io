var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController");

router.post("/", function (req, res, next) {
  try {
    UserController.CreateUser(req.body, function (data) {
      if (data != "") res.json({ error: data });
      else res.json({ success: "Success" });
    });
  } catch (Error) {
    res.json({ error: Error });
  }
});

router.get("/", function (req, res, next) {
  var User = req.session.User;
  if (User.type === 0) {
    try {
      UserController.GetUsers(null, function (data) {
        res.json(data);
      });
    } catch (err) {
      res.status(500);
    }
  } else res.status(401).send();
});

module.exports = router;
