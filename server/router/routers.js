//Ke Chen
const { json } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const myDB = require("./../db/MyDB.js");

router.use(express.json());
router.use(express.urlencoded({ extended: true})); 

router.post('/login', async (req, res) => {
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

router.get('/getUser', (req, res) => {
  res.json({ user : req.session.user });
})

router.post("/register", async (req, res) => {
  console.log("Register data to be added to DB",req.body);
  const user = req.body;
  try {
    const userInfo = await myDB.register(req.body);
    if(userInfo) {
      res.json({ success: true, msg: "Successful register." });
    } else {
      res.json({ success: false, msg: "User existed. Try another Email." });
    }
    
  } catch (e) {
    console.log(e);
  }
})

router.get('/getCourses', async (req, res) => {
  try {
    const courses = await myDB.getCourses();
    res.json(courses);
  } catch (e) {
    console.log(e);
  }
})


module.exports = router;