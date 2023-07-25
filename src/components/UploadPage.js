import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import Navbar1 from './Navbar1';

const UploadPage = ({ storage }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const storageRef = ref(storage, `files/${selectedFile.name}`);

      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
        },
        (error) => {
          console.error('Error uploading file:', error);
        },
        () => {
        //   alert('File uploaded successfully!');
        if (window.confirm('File uploaded successfully. You will be redirected to Telegram bot now. Click Ok. ')) 
        {
        window.location.href='http://t.me/HeckkAiBOT';
        };    
    }
      );
    }
  };

  return (
    <div>
    <Navbar1 />
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 col-5">
        {/* <label for="formFile" class="form-label">Default file input example</label> */}
        <input  className="form-control" id="formFile" type="file" onChange={handleFileChange} />
        <button className="btn btn-primary mt-2" onClick={handleFileUpload}>Upload</button>
        
      </div>
    </div>
      
    </div>
  );
};

export default UploadPage;
