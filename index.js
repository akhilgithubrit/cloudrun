const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const name = process.env.NAME || 'HELLO-WORLD'; // 'process' is lowercase
    res.send(`Hello ${name}`); // Use backticks for string interpolation
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
