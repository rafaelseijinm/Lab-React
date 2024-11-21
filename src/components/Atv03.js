import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import ProfileWithAvatar from './ProfileWithAvatar';
import PackingList from '../PackingList';
import List from '../List';

function Atv03() {
  return (
    <div>
      <h2>Atividade 03</h2>
      <Gallery />
      <ProfileWithAvatar />
      <PackingList />
      <List />
    </div>
  );
}

export default Atv03;