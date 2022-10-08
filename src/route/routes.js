const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { authentication } = require("../middelwear/auth");
const path = require('path')

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

router.post("/register", userController.registration);
// user Login
router.post("/login", userController.loginUser);

router.get("/user",authentication,userController.getUser)

router.put("/user/:userId", authentication, userController.updateUser);
router.delete("/user/:userId", authentication, userController.deleteduser);

// ...

// routes will go here
// ...

module.exports = router;
