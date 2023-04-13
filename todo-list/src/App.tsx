import { useState } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import { todos } from './constants/todolist';

function App() {
  const [todo, setTodos] = useState(todos)
  
  const onDeleteClick = (id: number) =>{
    const newTodos = todo.filter(list => list.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="App d-flex justify-content-center">
      <ListComponent todolist={todo} header="Todo List" onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
