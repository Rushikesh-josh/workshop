import { useState } from 'react'
import './App.css';
import ListComponent from './components/ListComponent';
import { todos } from './constants/constants';

function App() {
  const [ todo, setTodos] = useState(todos)

  const deleteClick = (id) =>{
    const newTodos = todo.filter(list => list.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App d-flex justify-content-center">
      <ListComponent todolist={todo} header="Todo List" deleteClick={deleteClick} />
    </div>
  );
}

export default App;
