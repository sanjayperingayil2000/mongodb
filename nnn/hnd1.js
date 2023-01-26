1.Query the collection ""employee"" and list all the documents

db.employee1.find()


2.Query the collection ""employee"" and list the employees who are having salary more than 30000

db.employee1.find({salary:{$gt:30000}})

3.Query the collection ""employee"" and list the employees who are having experience more than 2 years.

db.employee1.find({overallExp:{$gt:2}})

4.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

db.employee1.find({yearGrad:{$gt2015},overallExp:{$gt:1}})

5.Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

db.employee1.updateMany({salary:{$gt:70000}},{$set:{salary:65000}})

6.Delete all the documents from ""employee"" where last company is Y"

db.employee1.deleteMany({lastCompany:"Y"})