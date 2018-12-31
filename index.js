const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public', {
    setHeaders: setHeaders
}));

function setHeaders (res, path) {
    res.setHeader("Access-Control-Allow-Origin", "*")
}

app.listen(PORT, () => console.log('Server ready'));