const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();


function MyMongoDB() {
	const myDB = {};
	const mongourl = process.env.MONGO_URL;

	myDB.getCourses = async function() {
		const DB_NAME = "project3";
		const DB_COLLECTION = "courses";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

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
		const DB_NAME = "project3";
		const DB_COLLECTION = "paths";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

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
		const DB_NAME = "project3";
		const DB_COLLECTION = "paths";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			const paths = await data.find().toArray();
			client.close();
			const pathsArray = [];
			if (paths) {
				//console.log("this is the path: ", paths);
				paths.forEach((path) => {
					pathsArray.push(path.recommendation);
					/* [{courses:[{name:5001}, {name:5002}, ...]},
                        {courses:[{name:5001}, {name:5002}, ...]}] */
				});
				//const recs = path.recommendation.toArray();
				//console.log("this is the rec: ", pathsArray);
				return pathsArray;
				/* {semesterI: {c1: "cs5001, c2: "cs5002},
                   {semesterII: {c1: "cs5001, c2: "cs5002}*/
			}
		} catch(e) {
			console.log(e);
		}
	};


	myDB.getUserPlans = async function() {
		const DB_NAME = "project3";
		const DB_COLLECTION = "users";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

		try{
			const data = client.db(DB_NAME).collection(DB_COLLECTION);
			// TODO: sshould find one user
			const user = await data.findOne({email: "kechen@wustl.edu"});
			console.log(user);
			client.close();
			
			const currentUserPlan = user.plan;
			return currentUserPlan;

		} catch(e) {
			console.log(e);
		}
	};
	


	myDB.createPlan = async function(plan) {
		const DB_NAME = "project3";
		const DB_COLLECTION = "users";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";
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
			await userCol.updateOne({email: "kechen@wustl.edu"}, {$push: {plan: plan}});
			return true;
		} catch(e) {
			console.log(e);
			return false;
		}
	};

	myDB.deletePlan = async function(index) {
		const DB_NAME = "project3";
		const DB_COLLECTION = "users";
		const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

		// a user's plan should be an arry of objects where each object is a plan
		// create plan: selects for each sem, then collect values and save to user's plan
	
		try {
			const userCol = client.db(DB_NAME).collection(DB_COLLECTION);
			await userCol.updateOne({email: "kechen@wustl.edu"}, {$pull: {plan: {courses: {pos: index.index}}}});
			return true;
		} catch(e) {
			console.log(e);
			return false;
		}
	};

	return myDB;

}

module.exports = MyMongoDB();
