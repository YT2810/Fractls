const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function uploadImage() {
    const form = new FormData();
    form.append('image', fs.createReadStream('/home/tyme/Fractls/backend/images/image.png'));

    try {
        const response = await axios.post('http://localhost:5000/api/upload', form, {
            headers: {
                ...form.getHeaders(),
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error during upload:', error.response ? error.response.data : error.message);
    }
}

uploadImage();
