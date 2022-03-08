import './App.css';
import { useState } from 'react';
import Item from './Components/Item'
import Form from './Components/Form'

function App() {

const [items, setItem] = useState([
  { text: "salmon" },
  { text: "bok choy" },
  { text: "oat milk" },
])

const addItem = (text) => {
  const newItem = [...items, { text }];
  setItem(newItem);
};

  return (
    <div className="App">
      <h1>Grocery List App</h1>
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
      <Form addItem={addItem} />
    </div>
  );
}

export default App;
