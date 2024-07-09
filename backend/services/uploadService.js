// Import required dependencies
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const Jimp = require('jimp');

// Retrieve Pinata API keys from environment variables
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

/**
 * Uploads a file to Pinata
 * @param {string} filePath - Path to the file to be uploaded
 * @returns {Promise<Object>} - Response data from Pinata
 */
async function uploadToPinata(filePath) {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append('file', fs.createReadStream(filePath));

  const res = await axios.post(url, data, {
    maxBodyLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      'pinata_api_key': PINATA_API_KEY,
      'pinata_secret_api_key': PINATA_SECRET_API_KEY,
    },
  });

  return res.data;
}

/**
 * Fractionates an image into 9 parts and uploads them to Pinata
 * @param {string} imagePath - Path to the image to be fractionated
 * @returns {Promise<Array>} - Array of responses from Pinata
 */
async function fractionateImage(imagePath) {
  const image = await Jimp.read(imagePath);
  const width = image.bitmap.width / 3;
  const height = image.bitmap.height / 3;

  const promises = [];
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const clone = image.clone();
      const fragmentPath = `fragment_${x}_${y}.png`;
      clone.crop(x * width, y * height, width, height).write(fragmentPath);
      promises.push(uploadToPinata(fragmentPath));
    }
  }

  return Promise.all(promises);
}

// Export functions to be used in other files
module.exports = { fractionateImage, uploadToPinata };
