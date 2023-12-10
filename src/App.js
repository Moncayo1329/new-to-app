import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoDay } from './TodoDay';
import './App.css';

function App() {
  return (
    <div className="App">

<TodoCounter /> 
<TodoSearch />


<TodoList>

   <TodoDay />
   <TodoDay />
   <TodoDay />
  
   </TodoList>


<CreateTodoButton />

    </div>
  );
}


export default App;
