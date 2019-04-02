const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
//Db config
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const passport = require("passport")

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Yeh kr k dekho Conneted"))
  .catch(err => console.log("yehi ta sth hmra :("));

app.use(passport.initialize())

require('./config/passport')(passport)

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server Running on port ${port}`));
