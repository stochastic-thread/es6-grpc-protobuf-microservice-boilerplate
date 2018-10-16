/*
Models may extends the "BaseModel" ,"BaseDBModel" or nothing , depends on you and your system.
 */

const DatabaseModel = require('../../core/BaseDBModel');

module.exports = class SayHelloModel extends DatabaseModel {
/**/constructor() { super(); }
/**/reverse(string) {let tmp = '';if ((typeof string==="number" || typeof string==="string")) { for (let i = string.length - 1; i >= 0; i--) { tmp += string[i] } } return tmp }
/**/async retrieve() { let rezult;try{rezult = await this.query('SELECT * FROM users');} catch (e) { rezult = []; } return rezult; } };

