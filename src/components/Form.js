import React, { useState } from 'react';

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

export default Form;