import React, { useState } from 'react';

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const imageURI = URL.createObjectURL(file);
    onUpload(imageURI);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '200px', height: '200px' }} />}
    </div>
  );
};

export default UploadImage;
