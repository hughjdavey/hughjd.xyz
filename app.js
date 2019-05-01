const express = require('express');
const path = require('path');

const app = express();

// point express to ng build dist output folder
app.use(express.static(path.join(__dirname, 'dist/hughjd-xyz')));

// send all requests to angular for routing
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/hughjd-xyz/index.html'));
});

// start app on port 4200
app.listen(4200, () => {
    console.log(`${new Date().toLocaleTimeString()}: Running on localhost:4200`)
});
