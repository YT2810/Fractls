const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

const pinFileToIPFS = async (filePath) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', fs.createReadStream(filePath));

  const response = await axios.post(url, data, {
    maxContentLength: 'Infinity', // Este es necesario para evitar errores grandes archivos
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey
    }
  });
  return response.data;
};

module.exports = { pinFileToIPFS };
