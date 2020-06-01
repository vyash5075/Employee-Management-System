require('./models/db');
const express=require('express');
const path=require('path');
const _handlebars = require('handlebars');
const exphbs=require('express-handlebars'),{allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser=require('body-parser');

const employeeController=require('./controllers/employeeController');
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}));
 app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname+'/views/layouts/'
}));
app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(_handlebars)
}))
app.set('view engine','hbs');

app.use('/employee',employeeController);

app.listen(3000,()=>{
    console.log('express server started at port 3000');
});