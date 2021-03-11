import { Post } from "./library/api";
import * as ultility from "./library/ultility";
import swal from 'sweetalert2'

export const GetUser = () => {
    try {
        var cookie = ultility.GetCookie("user");
        var session = ultility.GetSession("user");
        if (cookie) {
            let decode = ultility.DecodeURI(cookie);
            let user = JSON.parse(decode);
            return user;
        } else if (session) {
            let decode = ultility.DecodeURI(session);
            let user = JSON.parse(decode);
            return user;
        }
        else return null;
    } catch (e) {

    }
};

export const Authenticate = (data, savecookie) => {
    var json = JSON.stringify(data);
    var encode = ultility.EncodeURI(json);
    if (savecookie && Boolean(savecookie)) ultility.SetCookie("user", encode, 30);
    else ultility.SetSession("user", encode)
    return true;
}

export const Login = async (credentials, savecookie) => {
    try {
        const response = await Post("/authenticate/", credentials)
        if (response && response.type === 1) {
            Authenticate(response.data, savecookie);
            ultility.DeleteCookie("uname");
            window.location.href = '/'
        }
        else swal.fire({
            type: "error",
            html: response.message
        })
    }
    catch (e) {
        throw e;
    }
}

export const Logout = async () => {
    await Post("/Logout/", null);
    var user = await GetUser();
    ultility.SetCookie("uname", ultility.EncodeURI(user.username));
    var cookie = ultility.GetCookie("user");
    var session = ultility.GetSession("user");
    console.log(session)
    if (cookie) ultility.DeleteCookie("user"); if (session) ultility.DeleteSession("user");
    window.location.href = '/Login'
}

export const CheckAuthentication = async () => {
    var user = GetUser();
    if (user) return user;
    else {
        const response = await Post("/authenticate/", null);
        if (response && response.type === 1) {
            user = response.data;
            Authenticate(user, false);
            ultility.DeleteCookie("uname");
            window.location.href = '/';
            return user;
        }
    }
    return null;
}