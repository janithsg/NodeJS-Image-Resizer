/*
/   Image Resizing on-the-fly NodeJS Service
*/
const express = require('express');
const app = express()
const port = 3000;

const imageResizer = require('./image-resizer');

app.get('/api/resize', (req, res) => {
    const width = req.query.w || 600;
    const height = req.query.h || 500;
    const quality = req.query.q || 80;
    const img = req.query.img || "";

    console.log(Number.isInteger(+width), Number.isInteger(+height), Number.isInteger(+quality), img);

    imageResizer.resizeImage(+width, +height, +quality, img, res);
})

app.listen(port, () => {
    console.log(`Image Resizer running at http://localhost:${port}`)
})