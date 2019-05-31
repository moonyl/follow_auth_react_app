const express = require('express');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})