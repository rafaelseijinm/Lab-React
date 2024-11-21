  // ProfileWithAvatar.js
  import Avatar from './components/Avatar';
  
  export default function ProfileWithAvatar() {
    const person = { name: 'Gregorio Y. Zara', imageId: '7vQD0fPs' };
    return (
      <div>
        <Avatar person={person} size={100} />
        <h1>{person.name}</h1>
      </div>
    );
  }