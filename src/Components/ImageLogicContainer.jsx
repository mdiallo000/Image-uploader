import React from 'react';

function ImageLogicContainer() {
  return (
    <div>
      <h1>Image Uploader</h1>
      <div>
        <form action="">
          <label for="profile_pic">Choose file to upload</label>
          <input type="file" accept="image/*" />
        </form>
      </div>
    </div>
  );
}

export default ImageLogicContainer;
