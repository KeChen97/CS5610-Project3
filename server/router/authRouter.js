//Ke Chen
const express = require('express');
const passport = require("passport");
const LocalStrategy = require('passport-local');
const myDB = require("./../db/MyDB.js");
const router = express.Router();

// router.use(express.json());
// router.use(express.urlencoded({ extended: true})); 

// const strategy = new LocalStrategy(function verify(username, password, cb) {
//     const user = {
//         username: "mchenkem@hotmail.com",
//         password:123456
//     }
//     return cb(null, user);
// })

// passport.use(strategy);

router.post('/login/password', async (req, res) => {
    console.log("login data",req.body);
    const user = req.body;
    try{
      const userInfo = await myDB.authenticate(user);
      if(userInfo) {
        req.session.user = userInfo;
        res.json({ success: true, msg: "Successful login", user: userInfo });
      } else {
        if (userInfo == null) {
          res.json({ success: false, msg: "No user exist, please sign up." });
        } else {
          res.json({ success: false, msg: "Invalid username or password." });
        }
      }     
    }catch (e) {
      console.log(e);
    }
})

router.get('/testAPI', (req, res) => {
    console.log("testing")
    // res.redirect("profile");
    res.json({ success: false, msg: "Invalid username or password123." });
})


module.exports = router;