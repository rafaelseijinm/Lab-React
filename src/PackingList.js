function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✔' : ''}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <ul>
        <Item name="Toothbrush" isPacked={true} />
        <Item name="Towel" isPacked={false} />
        <Item name="Socks" isPacked={true} />
      </ul>
    );
  }
  