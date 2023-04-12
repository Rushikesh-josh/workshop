import { useState } from 'react'
import './App.css';
import ListComponent from './components/ListComponent';
import { Todos } from './constants/constants';

function App() {
  const [ todos, setTodos] = useState(Todos)

  const deleteClick = (id) =>{
    const newTodos = todos.filter(list => list.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App d-flex justify-content-center">
      <ListComponent todolist={todos} header="Todo List" deleteClick={deleteClick} />
    </div>
  );
}

export default App;
