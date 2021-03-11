"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCookie = GetCookie;
exports.SetCookie = SetCookie;
exports.CheckCookie = CheckCookie;
exports.DeleteCookie = DeleteCookie;
exports.GetSession = GetSession;
exports.SetSession = SetSession;
exports.DeleteSession = DeleteSession;
exports.EncodeURI = EncodeURI;
exports.DecodeURI = DecodeURI;

function GetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return null;
}

function SetCookie(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function CheckCookie(cname, renew, exdays) {
  var cookie = GetCookie(cname);
  if (cookie === null) return false;else if (cookie !== null && !renew) return true;else if (cookie !== null && renew) {
    SetCookie(cname, cookie, exdays);
    return true;
  }
}

function DeleteCookie(name) {
  if (GetCookie(name)) {
    document.cookie = name + "=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    return true;
  } else return false;
}

function GetSession(cname) {
  return window.sessionStorage.getItem(cname);
}

function SetSession(cname, value) {
  window.sessionStorage.setItem(cname, value);
  return true;
}

function DeleteSession(cname) {
  window.sessionStorage.removeItem(cname);
  return true;
}

function EncodeURI(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function DecodeURI(str) {
  return decodeURIComponent(escape(window.atob(str)));
}