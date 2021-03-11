"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandleUnauthorized = HandleUnauthorized;

function HandleUnauthorized() {
  console.log("here");
  window.localStorage.removeItem("cUser");
  window.location.href = "/";
}