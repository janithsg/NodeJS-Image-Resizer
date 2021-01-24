const axios = require('axios');
const sharp = require('sharp');

// Download image from URL as stream
const download = url => axios({
    method: 'get',
    url,
    responseType: 'stream'
}).then(response => response.data);

// Do the image processing
const transform = ({
    height,
    width,
    quality
}) => {
    const sharpObj = sharp();
    // Width and Height both adjusted
    if (Number.isInteger(height) && Number.isInteger(width)) {
        sharpObj.resize({ width: width, height: height, fit: sharp.fit.inside }).withMetadata();

        // Only the width is adjusted
    } else if (Number.isInteger(width)) {
        sharpObj.resize({ width: width, fit: sharp.fit.contain }).withMetadata();

        // Only the height is adjusted
    } else if (Number.isInteger(height)) {
        sharpObj.resize({ width: null, height: height, fit: sharp.fit.contain }).withMetadata();
    }

    // JPEG quality
    sharpObj.jpeg({
        quality: Number.isInteger(quality) ? Math.max(1, Math.min(100, quality)) : 80,
    });

    return sharpObj;
}

// Resize Image
const resizeImage = (width, height, quality, url, res) => {
    // Download the image from the user's master image source.
    download(url).then(response => response.pipe(transform({
        height: height,
        width: width,
        quality: quality,
    })).pipe(res)).catch(err => {
        console.log(err);
        res.status(404).send();
    });
}

exports.resizeImage = resizeImage;