const crypto = require('crypto');
const algorithm = 'sha256';
const digest = 'base64';

module.exports.EncryptPassword = (input) => {
    return crypto.createHmac(algorithm, process.env.ConnectionString).update(input).digest(digest);
}