import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import ProfileWithAvatar from './ProfileWithAvatar';
import PackingList from '../PackingList';
import List from '../List';

export default function App() {
  return (
    <div>
      <Gallery />
      <ProfileWithAvatar />
      <PackingList />
      <List />
    </div>
  );
}
