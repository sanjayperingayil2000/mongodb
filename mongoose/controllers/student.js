const {insertManyToDb, findAllFromDb,findQ2FromDb, findQ3FromDb, findQ4FromDb, findQ5FromDb,deleteQ6FromDb,deleteQ61FromDb} =require("../database/connection");
const {Student} = require("../models/student")

// const saveStudentData = async function(req,res){
//     const studentData = req.body;
//     try {
//         if(studentData && studentData.length > 0){
//             const responseMany = await insertManyToDb(studentData)
//             console.log(responseMany)
//             return res.status(200).send(responseMany);
//         }
//         // const response = await insertToDb(studentData)
//         // return res.status(200).send(response);
//         // // console.log(response);
//         // // res.status(200).send({success:response.acknowledged});
//         // // (for changing the message seen in postman or backend)
//     } catch (error) {
//         console.log("error occured while saving");
//         return res.status(500).send({message:"something went wrong"});
//     }
// };


const saveStudentData = async function(req,res){
    const studentData = req.body;
    try {
        const studentObj = new Student({
            firstName: studentData.firstName,
            laststName: studentData.laststName,
            salary: studentData.salary,
            department: studentData.department,
            lastCompany:studentData.lastCompany,
            lastSalary:studentData.lastSalary,
            overallExp: studentData.overallExp,
            contactInfo: studentData.contactInfo,
            yearGrad:studentData.yearGrad,
            gradStream: studentData.gradStream
        })
        const response= await studentObj.save();
        console.log("insert data",response)
        return res.status(200).send(response);
    } catch (error) {
        console.log("error occured while saving");
        return res.status(500).send({message:"something went wrong"});
    }
};

const saveManyStudentData = async function(req,res){
    const studentData = req.body;
    try {
        // let ss=[]
        const studentObj = new Student(
            studentData.map((val)=>{
                return({
                    firstName: val.firstName,
                    laststName: val.laststName,
                    salary: val.salary,
                    department: val.department,
                    lastCompany:val.lastCompany,
                    lastSalary:val.lastSalary,
                    overallExp: val.overallExp,
                    contactInfo: val.contactInfo,
                    yearGrad:val.yearGrad,
                    gradStream: val.gradStream
                })
            })
        )
        const responseMany= await studentObj.save().toArray();
        console.log("insert data",responseMany);
        return res.status(200).send(responseMany);
    } catch (error) {
        console.log("error occured while saving");
        return res.status(500).send(error);
    }
};

const getStudentData = async function(req,res){
    // const studentFirstName=req.query.firstName;
    try {
        const queryResponse = await Student.find();
        return res.status(200).send({employee :queryResponse});
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ2Data = async function(req,res){
    const query = {salary:{$gt:"30000"}};
    try {
        const queryResponse = await Student.find(query);
        return res.status(200).send(queryResponse);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ3Data = async function(req,res){
    const query = {overallExp:{$gt:"2"}};
    try {
        const queryResponse = await Student.find(query);
        return res.status(200).send(queryResponse);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ4Data = async function(req,res){
    const query = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
    try {
        const queryResponse = await Student.find(query);
        return res.status(200).send(queryResponse);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const updateStudentData = async function(req,res){
    const filter={firstName:req.body.filter};
    const update=req.body.update;
    // {salary:{$gt:70000}},{$set:{salary:65000}}
    const changeData={
        $set:{firstName:update}
    }
    try {
        const employee = await Student.updateMany(filter,changeData);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const deleteQ6Data = async function(req,res){
    const query={lastCompany:"Y"};
    try {
        const queryResponse = await Student.deleteMany(query);
        return res.status(200).send(queryResponse);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const deleteStudentData = async function(req,res){
    const query=req.query;
    try {
        const queryResponse = await Student.deleteMany(query);
        return res.status(200).send(queryResponse);
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

// const getQ2Data = async function(req,res){
//     const query = {salary:{$gt:"30000"}};
//     // console.log("query :",query)
//     try {
//         const employee = await findQ2FromDb(query);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };

// const getQ3Data = async function(req,res){
// 
//     // console.log("query :",query)
//     try {
//         const employee = await findQ3FromDb(query);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };

// const getQ4Data = async function(req,res){
//     const query = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
//     // console.log("query :",query)
//     try {
//         const employee = await findQ4FromDb(query);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };

// const updateStudentData = async function(req,res){
//     const filter={salary:{$gt:req.body.filter}};
//     const update=req.body.update;
//     // {salary:{$gt:70000}},{$set:{salary:65000}}
//     const changeData={
//         $set:{salary:update}
//     }
//     try {
//         const employee = await findQ5FromDb(filter,changeData);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };

// const deleteStudentData = async function(req,res){
//     const query=req.query;
//     try {
//         const employee = await deleteQ6FromDb(query);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };

// const deleteQ6Data = async function(req,res){
//     const query =req.query
//     // const query={lastCompany:"Y"};
//     try {
//         const employee = await deleteQ61FromDb(query);
//         return res.status(200).send({employee :employee});
//     } catch (error) {
//         console.log("error occured while fetching Q3",error);
//         return res.status(500).send({message:"something went wrong"});
//     }
// };


module.exports={saveStudentData,getStudentData,updateStudentData,deleteStudentData,getQ2Data,getQ3Data,getQ4Data,deleteQ6Data,saveManyStudentData}
