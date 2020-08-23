const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send (`<html> <body> Hello World </body> </html>`)
})

const PORT = 1337;
app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});