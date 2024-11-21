import React, { useState } from 'react';

function Gallery() {
    const images = ['Image1', 'Image2', 'Image3'];
    return (
      <div>
        <h1>Gallery</h1>
        {images.map((img, index) => (
          <div key={index}>{img}</div>
        ))}
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default Gallery;