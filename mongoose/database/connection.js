// const {MongoClient}=require("mongodb");

// const url="mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// const insertManyToDb = async (data) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.insertMany(data);
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const findAllFromDb = async () => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.find({}).toArray();
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const findQ2FromDb = async (query) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.find(query).toArray();
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const findQ3FromDb = async (query) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.find(query).toArray();
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const findQ4FromDb = async (query) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.find(query).toArray();
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const findQ5FromDb = async (filter,changeData) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.updateMany(filter,changeData);
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const deleteQ6FromDb = async (query) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.deleteMany(query);
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// const deleteQ61FromDb = async (query) => {
//     try {
//         await client.connect();
//         console.log("connection succesfull to db")
//         const database = client.db("Human_Resource");
//         const collection = database.collection("employee");
//         const dbResponse = await collection.deleteMany(query);
//         // console.log("db response",dbResponse)
//         await client.close();
//         return dbResponse;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports={insertManyToDb, findAllFromDb, findQ2FromDb, findQ3FromDb, findQ4FromDb, findQ5FromDb,deleteQ6FromDb,deleteQ61FromDb};