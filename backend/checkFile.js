const fs = require('fs');

const filePath = 'C:\\Users\\YOLFR\\Desktop\\image.png';

fs.access(filePath, fs.constants.F_OK, (err) => {
    console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
});

fs.access(filePath, fs.constants.R_OK, (err) => {
    console.log(`${filePath} ${err ? 'is not readable' : 'is readable'}`);
});
