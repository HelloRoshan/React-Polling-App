const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000);
console.log('Polling Serve is running port 3000');