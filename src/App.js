import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoDay } from './TodoDay';
import React from 'react';


const misTareasTodos = [
{ text: 'Leer la biblia', completed:true},
{ text: 'Estudiar Macro', completed:false},
{ text: 'Ir al trabajo', completed:true},
{ text: 'Leer bitcoin standar', completed:false},
{ text: 'Ir al gym', completed:true},

];



function App() {
  const [todos, setTodos] = React.useState(misTareasTodos);
  const [searchValue, setSearchValue] = React.
useState('');


const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;




console.log('Usuarios made the day ' + searchValue)
  return (
    <>

<TodoCounter completed={completedTodos} total={totalTodos} /> 

<TodoSearch 
searchValue={searchValue}
setSearchValue={setSearchValue}


/>


<TodoList>
{misTareasTodos.map(todo => ( 
<TodoDay 
key={todo.text} 
text={todo.text}
completed={todo.completed}/>

))}
  
   </TodoList>


<CreateTodoButton />

    </>
  );
}


export default App;
