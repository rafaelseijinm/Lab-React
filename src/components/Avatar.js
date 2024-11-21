export default function Avatar({ person, size }) {
    return (
      <img
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  // ProfileWithAvatar.js
  import Avatar from './Avatar';
  
  export default function ProfileWithAvatar() {
    const person = { name: 'Gregorio Y. Zara', imageId: '7vQD0fPs' };
    return (
      <div>
        <Avatar person={person} size={100} />
        <h1>{person.name}</h1>
      </div>
    );
  }
  