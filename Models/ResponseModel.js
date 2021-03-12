class Response {
    constructor(type, message, data) {
        this.type = type;
        this.message = message;
        this.data = data;
    }
}

module.exports.Response = new Response()