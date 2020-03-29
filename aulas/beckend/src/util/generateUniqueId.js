const crypto = require('crypto')
module.exports = function generateUnickId(){
    return crypto.randomBytes(4).toString('HEX');
}