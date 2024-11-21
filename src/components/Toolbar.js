import React from 'react';
import { Link } from 'react-router-dom';

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <button onClick={onPlayMovie}>Play Movie</button>
        <button onClick={onUploadImage}>Upload Image</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default Toolbar;