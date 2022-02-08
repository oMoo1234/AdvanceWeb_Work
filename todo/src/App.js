import React,{useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const initialList =[];
  const [list, setList] = useState(initialList);
  const [text, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    if(text === ''){


    }
    else{
    const newList = list.concat({ text, id: uuidv4() });
    setList(newList);
    setName('');
    console.log(newList)
    }
  }
  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Add Things To Do!</h1>
      </header>
      <div className='body'>

        <input type="text" className='input' value={text} placeholder='Type here' onChange={handleChange} ></input>

        <button type="button" className='button' onClick={handleAdd}>
          Add
        </button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}
          <button className='button2' onClick={() => deleteItem(item.id)}>Done</button>
          </li>
        ))

        }
      </ul>
      </div>
    </div>
  );
}

export default App;
