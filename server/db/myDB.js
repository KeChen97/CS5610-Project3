//Ke Chen, Jerry
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();


function MyMongoDB() {
    const myDB = {};
    const mongourl = process.env.MONGO_URL;
    const client = new MongoClient(mongourl);

    //K
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

    //J

    myDB.getCourses = async function() {
		const DB_NAME = "cs5610p3";
		const DB_COLLECTION = "courses";
		const client = new MongoClient(URL);

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			const arrOfCourses = await data.find().toArray();
			client.close();
			return arrOfCourses;
		} catch(e) {
			console.log(e);
		}
	};


	myDB.getPaths = async function() {
		const DB_NAME = "cs5610p3";
		const DB_COLLECTION = "paths";
		const client = new MongoClient(URL);

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			const paths = await data.find().toArray();
			client.close();
			if (paths) {
				// console.log("found paths: ", paths);
				return paths;
			} else {
				return "no paths found";
			}
		} catch(e) {
			console.log(e);
		}
	};

	myDB.getPathRecs = async function() {
		const DB_NAME = "cs5610p3";
		const DB_COLLECTION = "paths";
		const client = new MongoClient(URL);

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			const paths = await data.find().toArray();
			client.close();
			const pathsArray = [];
			if (paths) {
				console.log("this is the path: ", paths);
				paths.forEach((path) => {
					pathsArray.push(path.recommendation);
					/* [{courses:[{name:5001}, {name:5002}, ...]},
                        {courses:[{name:5001}, {name:5002}, ...]}] */
				});
				//const recs = path.recommendation.toArray();
				console.log("this is the rec: ", pathsArray);
				return pathsArray;
				/* {semesterI: {c1: "cs5001, c2: "cs5002},
                   {semesterII: {c1: "cs5001, c2: "cs5002}*/
			}
		} catch(e) {
			console.log(e);
		}
	};


	myDB.getUserPlans = async function() {
		const DB_NAME = "cs5610p3";
		const DB_COLLECTION = "users";
		const client = new MongoClient(URL);

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			// TODO: sshould find one user
			const users = await data.find().toArray();
			client.close();
			
			const currentUserPlan = users[2].plan;
			return currentUserPlan;

		} catch(e) {
			console.log(e);
		}
	};
	

	myDB.createPlan = async function(plan) {
		const DB_NAME = "cs5610p3";
		const DB_COLLECTION = "users";
		const client = new MongoClient(URL);
		let count = 0;
		// a user's plan should be an arry of objects where each object is a plan
		// create plan: selects for each sem, then collect values and save to user's plan
	
		try {
			plan.courses.forEach((plan) => {
				if (plan.code === "none") {
					// console.log(plan.code);
					count = count + 1; 
				}
			});
			if (count > 0) {
				return false;
			}
			const userCol = client.db(DB_NAME).collection(DB_COLLECTION);
			await userCol.updateOne({name: "user4"}, {$push: {plan: plan}});
			return true;
		} catch(e) {
			console.log(e);
			return false;
		}
	};

    return myDB;
}

module.exports = MyMongoDB();