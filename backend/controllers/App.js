const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('/Users/mohitsankhla/Desktop/Web D Experiment/WebDFinal/css/mainPage.css'))

app.get('/api/v1', (req,res, html)=> {
    res.sendFile('/Users/mohitsankhla/Desktop/Web D Experiment/WebDFinal/webPages/index.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});