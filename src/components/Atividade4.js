import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import Gallery2 from './Gallery2';
import Counter from './Counter';
import Form from './Form';
import List from './List';
import List2 from './List2';
import CounterList from './CounterList';
import BucketList from './BucketList';
import MovingDot from './MovingDot';
import './Atv4.css';

function Atv4() {
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

export default Atv4;
