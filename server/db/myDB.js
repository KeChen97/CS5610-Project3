//Ke Chen
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();


function MyMongoDB() {
    const myDB = {};
    const mongourl = process.env.MONGO_URL;
    const client = new MongoClient(mongourl);

    myDB.authenticate = async function (user) {
        const DB_NAME = "project3";
        const COL_NAME = "users";
        const usersColl = client.db(DB_NAME).collection(COL_NAME);
        try {
            const res = await usersColl.findOne({ email: user.email});
            if(res) {
                if (res.password == user.password) {
                    return res;
                  } else {
                    return false;
                  }
            } else {
                console.log("No user exist");
                return null;
            }
        } catch(e) {
            console.log(e);
        }   
    }

    myDB.register = async function (user)  {
        const DB_NAME = "project3";
        const COL_NAME = "users";
        const usersColl = client.db(DB_NAME).collection(COL_NAME);
        try{
            const userInfo = await usersColl.findOne({ email: user.email});
            if(userInfo) {
                console.log("Register failed. User exists");
                return false;
            } else {
                console.log("Register successful.");
                const res = await usersColl.insertOne(user);
                return true;
            }
            
        } catch(e) {
            console.log(e);
        }   
    }

    myDB.getCourses = async function (query = {}) {
        const DB_NAME = "project3";
        const COL_NAME = "courses";
        const coursesColl = client.db(DB_NAME).collection(COL_NAME);
        try {
            return await coursesColl.find(query).toArray();
        } catch (e) {
            console.log(e);
        }
    }

    return myDB;
}

module.exports = MyMongoDB();