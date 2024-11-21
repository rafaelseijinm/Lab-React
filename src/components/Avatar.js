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

  