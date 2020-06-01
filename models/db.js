const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
//mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
if(!err){
    console.log('mongodb connection succeeded');
}
else{
    console.log('Error in db connection'+err)
}
});

require('./employee.model')
