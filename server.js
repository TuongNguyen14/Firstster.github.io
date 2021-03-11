require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
var session = require("express-session");

var model = require("./models/ResponseModel");

var userRouter = require("./routes/user");
var taskRouter = require("./routes/task");
var projectRouter = require("./routes/project");
var MongoDBStore = require("connect-mongodb-session")(session);

var usercontroller = require("./controllers/UserController");
var app = express();
var store = new MongoDBStore({
  uri: process.env.ConnectionString,
  collection: "mySessions",
});
store.on("error", function (error) {
  console.log(error);
});
var router = express.Router();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.session_secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    },
    store: store,
  })
);

app.post("/authenticate", function (req, res) {
  try {
    const { User } = req.session;
    if (User) {
      usercontroller.UpdateUserSession(
        req.session.id,
        User._id,
        function (err) {
          if (err) res.status(500).send();
        }
      );
      model.type = 1;
      model.message = "Successed logging in";
      model.data = User;
      res.json(model);
    } else {
      const { username, password } = req.body;
      usercontroller.GetUserByUsernamePassword(username, password, (data) => {
        var user = data.data;
        if (user !== null && user !== undefined) {
          data.data.password = undefined;
          req.session.User = user;
          usercontroller.UpdateUserSession(
            req.session.id,
            user._id,
            function (err) {
              if (err) res.status(500).send();
            }
          );
          res.json(data);
        } else res.status(200).json(data);
      });
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/logout", function (req, res) {
  req.session.destroy();
  model.type = 1;
  model.message = "LOGGEDOUT";
  model.data = null;
  //res.clearCookie("key");
  res.json(model);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.all("*", function (req, res, next) {
  if (!req.session.User) {
    res.status(401).send();
  } else next();
});

app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/projects", projectRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (req, res, next) {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.status(err.status || 500);
  console.log(err)
  res.json({
    error: {
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res) => {
  console.log(`server listening on port: ${PORT}`);
})
module.exports = app;
