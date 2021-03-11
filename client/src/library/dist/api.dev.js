"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Get = Get;
exports.Post = Post;

var _axios = _interopRequireDefault(require("axios"));

var _ApiResult = _interopRequireDefault(require("../models/ApiResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = new _ApiResult["default"]();

function Get(url, params) {
  var response;
  return regeneratorRuntime.async(function Get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url, {
            params: params
          }));

        case 3:
          response = _context.sent;
          console.log(response);

          if (!(response && response.status === 200)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", response.data);

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function Post(url, obj) {
  var response;
  return regeneratorRuntime.async(function Post$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(url, obj));

        case 3:
          response = _context2.sent;

          if (!(response && response.status === 200)) {
            _context2.next = 7;
            break;
          }

          model = Object.assign(model, response.data);
          return _context2.abrupt("return", model);

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}