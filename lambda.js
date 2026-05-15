const serverless = require('serverless-http');
const app = require('./app'); // Import ứng dụng Express hiện có

// Lambda sẽ gọi hàm 'handler' này
module.exports.handler = serverless(app);