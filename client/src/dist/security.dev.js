"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckAuthentication = exports.Logout = exports.Login = exports.Authenticate = exports.GetUser = void 0;

var api = _interopRequireWildcard(require("./library/api"));

var ultility = _interopRequireWildcard(require("./library/ultility"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GetUser = function GetUser() {
  try {
    var cookie = ultility.GetCookie("user");
    var session = ultility.GetSession("user");

    if (cookie) {
      var decode = ultility.DecodeURI(cookie);
      var user = JSON.parse(decode);
      return user;
    } else if (session) {
      var _decode = ultility.DecodeURI(session);

      var _user = JSON.parse(_decode);

      return _user;
    } else return null;
  } catch (e) {}
};

exports.GetUser = GetUser;

var Authenticate = function Authenticate(data, savecookie) {
  var json = JSON.stringify(data);
  var encode = ultility.EncodeURI(json);
  if (savecookie) ultility.SetCookie("user", encode, 30);else ultility.SetSession("user", encode);
  return true;
};

exports.Authenticate = Authenticate;

var Login = function Login(credentials, savecookie) {
  var response;
  return regeneratorRuntime.async(function Login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(api.Post("/authenticate/", credentials));

        case 3:
          response = _context.sent;

          if (response && response.type === 1) {
            Authenticate(response.data, savecookie);
            ultility.DeleteCookie("uname");
            window.location.href = '/';
          } else _sweetalert["default"].fire({
            type: "error",
            html: response.message
          });

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.Login = Login;

var Logout = function Logout() {
  var user, cookie, session;
  return regeneratorRuntime.async(function Logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(api.Post("/Logout/", null));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(GetUser());

        case 4:
          user = _context2.sent;
          ultility.SetCookie("uname", ultility.EncodeURI(user.username));
          cookie = ultility.GetCookie("user");
          session = ultility.GetSession("user");
          console.log(session);
          if (cookie) ultility.DeleteCookie("user");
          if (session) ultility.DeleteSession("user");
          window.location.href = '/Login';

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.Logout = Logout;

var CheckAuthentication = function CheckAuthentication() {
  var user;
  return regeneratorRuntime.async(function CheckAuthentication$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = GetUser();

          if (!user) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", true);

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(api.Post('/authenticate', null));

        case 7:
          user = _context3.sent;

          if (!user) {
            _context3.next = 11;
            break;
          }

          Authenticate(user);
          return _context3.abrupt("return", true);

        case 11:
          return _context3.abrupt("return", false);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.CheckAuthentication = CheckAuthentication;