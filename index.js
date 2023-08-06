const express = require('express')
const dotenv =require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT||3000
const db=process.env.CONNECTION_STRING

const path = require('path')
const mongoose = require('mongoose')
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: `${db}`,
  collection: 'mySessions'
});
app.use(express.static(path.join(__dirname, 'views')))

app.set("view engine",'ejs')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store,
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
mongoose.connect(`${db}`,{useNewUrlParser: true, useUnifiedTopology: true}
).
then(()=>{
  console.log("DB");
})

app.use(require('./routes/index.routes'))
app.use(require('./routes/register.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/messages.routes'))
app.use(require('./routes/user.routes'))
app.use(require('./routes/logout.routes'))

app.listen(port, () => console.log(`Server is running....`))
