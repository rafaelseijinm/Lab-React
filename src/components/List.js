const people = [
    { id: 1, name: 'Albert Einstein' },
    { id: 2, name: 'Marie Curie' },
    { id: 3, name: 'Nikola Tesla' },
  ];
  
  export default function List() {
    return (
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
  