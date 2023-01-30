const {insertManyToDb, findAllFromDb,findQ2FromDb, findQ3FromDb, findQ4FromDb, findQ5FromDb,deleteQ6FromDb} =require("../database/connection");

const saveStudentData = async function(req,res){
    const studentData = req.body;
    try {
        if(studentData && studentData.length > 0){
            const responseMany = await insertManyToDb(studentData)
            console.log(responseMany)
            return res.status(200).send(responseMany);
        }
        // const response = await insertToDb(studentData)
        // return res.status(200).send(response);
        // console.log(response);
        // res.status(200).send({success:response.acknowledged});
        // (for changing the message seen in postman or backend)
    } catch (error) {
        console.log("error occured while saving");
        return res.status(500).send({message:"something went wrong"});
    }
};

const getStudentData = async function(req,res){
    try {
        const employee = await findAllFromDb();
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ2Data = async function(req,res){
    const query = {salary:{$gt:"30000"}};
    // console.log("query :",query)
    try {
        const employee = await findQ2FromDb(query);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ3Data = async function(req,res){
    const query = {overallExp:{$gt:"2"}};
    // console.log("query :",query)
    try {
        const employee = await findQ3FromDb(query);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const getQ4Data = async function(req,res){
    const query = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
    // console.log("query :",query)
    try {
        const employee = await findQ4FromDb(query);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const updateStudentData = async function(req,res){
    const filter={salary:{$gt:req.body.filter}};
    const update=req.body.update;
    // {salary:{$gt:70000}},{$set:{salary:65000}}
    const changeData={
        $set:{salary:update}
    }
    try {
        const employee = await findQ5FromDb(filter,changeData);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};

const deleteStudentData = async function(req,res){
    const query=req.query;
    try {
        const employee = await deleteQ6FromDb(query);
        return res.status(200).send({employee :employee});
    } catch (error) {
        console.log("error occured while fetching Q3",error);
        return res.status(500).send({message:"something went wrong"});
    }
};


module.exports={saveStudentData,getStudentData,updateStudentData,deleteStudentData,getQ2Data,getQ3Data,getQ4Data}