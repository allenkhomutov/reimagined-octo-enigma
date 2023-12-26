const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');