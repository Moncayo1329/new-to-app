import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoDay } from './TodoDay';
import React from 'react';
import './App.css';

const misTareasTodos = [
{ text: 'Leer la biblia', completed:true},
{ text: 'Estudiar Macro', completed:false},
{ text: 'Ir al trabajo', completed:true},
{ text: 'Leer bitcoin standar', completed:false},

];



function App() {
  return (
    <React.Fragment>

<TodoCounter completed={8} total={12} /> 

<TodoSearch />


<TodoList>
{misTareasTodos.map(todo => ( 
<TodoDay 
key={todo.text} 
text={todo.text}
completed={todo.completed}/>

))}
  
   </TodoList>


<CreateTodoButton />

    </React.Fragment>
  );
}


export default App;
