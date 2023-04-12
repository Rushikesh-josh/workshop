import { useState } from 'react'
import './App.css';
import ListComponent from './components/listComponent';

function App() {
  const [ todos, setTodos] = useState([
    {title:'Todo-1', description:'This is todo 1', id: 1},
    {title:'Todo-2', description:'This is todo 2', id: 2},
    {title:'Todo-3', description:'This is todo 3', id: 3},
    {title:'Todo-4', description:'This is todo 4', id: 4},
    {title:'Todo-5', description:'This is todo 5', id: 5}
  ])
  const header = "ToDo List"
  const handleClick = (id) =>{
    const newTodos = todos.filter(list => list.id !== id)
    setTodos(newTodos)
  }
  const handleRefreshClick = () => {
    window.location.reload();
  }
  return (
    <div className="App d-flex justify-content-center">
      <ListComponent todolist={todos} header={header} handleClick={handleClick} handleRefreshClick={handleRefreshClick}/>
    </div>
  );
}

export default App;
