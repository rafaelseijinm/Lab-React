import React from 'react';
import { Link } from 'react-router-dom';

// Toolbar Component
function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// Gallery Component
function Gallery() {
  const images = ['Image1', 'Image2', 'Image3'];
  return (
    <div>
      <h1>Gallery</h1>
      {images.map((img, index) => (
        <div key={index}>{img}</div>
      ))}
      <Link to="/">Voltar</Link>
    </div>
  );
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// Form Component
function Form() {
  const [text, setText] = useState('');
  return (
    <div>
      <form>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// MovingDot Component
function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

  return (
    <div
      style={{ height: '200px', border: '1px solid black' }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: '10px',
          height: '10px',
          background: 'red',
          borderRadius: '50%',
        }}
      />
      <Link to="/">Voltar</Link>
    </div>
  );
}

// List Components
function List() {
  const items = ['Item1', 'Item2', 'Item3'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function List2() {
  const [items, setItems] = useState(['A', 'B', 'C']);
  const addItem = () => setItems([...items, `Item ${items.length + 1}`]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// ShapeEditor Component
function ShapeEditor() {
  const [shapes, setShapes] = useState([]);
  const addCircle = () => setShapes([...shapes, 'Circle']);

  return (
    <div>
      {shapes.map((shape, index) => (
        <div key={index}>{shape}</div>
      ))}
      <button onClick={addCircle}>Add Circle</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// CounterList Component
function CounterList() {
  const [counters, setCounters] = useState([0]);
  const addCounter = () => setCounters([...counters, 0]);
  const increment = (index) =>
    setCounters(
      counters.map((counter, i) => (i === index ? counter + 1 : counter))
    );

  return (
    <div>
      {counters.map((counter, index) => (
        <div key={index}>
          <button onClick={() => increment(index)}>+{counter}</button>
        </div>
      ))}
      <button onClick={addCounter}>Add Counter</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// BucketList Component
function BucketList() {
  const [items, setItems] = useState([]);
  const addItem = () => setItems([...items, `Task ${items.length + 1}`]);

  return (
    <div>
      <h2>Bucket List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Task</button>
      <Link to="/">Voltar</Link>
    </div>
  );
}

// App Component
function App() {
  const handlePlayMovie = () => alert('Playing movie...');
  const handleUploadImage = () => alert('Uploading image...');

  return (
    <div>
      <Toolbar onPlayMovie={handlePlayMovie} onUploadImage={handleUploadImage} />
      <Gallery />
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

export default App;
