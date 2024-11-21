import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import Gallery2 from './Gallery2';
import Counter from './Counter';
import Form from './Form';
import List2 from './List2';
import ShapeEditor from './ShapeEditor';
import CounterList from './CounterList';
import BucketList from './componentes2/BucketList';
import './atv4.css';

function atv4() {
  const handlePlayMovie = () => alert('Playing movie...');
  const handleUploadImage = () => alert('Uploading image...');

  return (
    <div>
      <Toolbar onPlayMovie={handlePlayMovie} onUploadImage={handleUploadImage} />
      <Gallery2 />
      <Counter />
      <Form />
      <MovingDot />
      <List />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <BucketList />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default atv4;
