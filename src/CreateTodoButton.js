import { GrAddCircle } from "react-icons/gr";

function CreateTodoButton() {
    return(
  <button className="CreateTodoButton" 
  onClick={
  (event) => {
  console.log('actividad add')
  console.log(event)
  console.log(event.target)

  }
}
  ><GrAddCircle /></button>
    );
    }


export {CreateTodoButton}




