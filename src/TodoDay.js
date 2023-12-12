import { FaCheck } from "react-icons/fa"; 
import { TiDelete } from "react-icons/ti";



function TodoDay(props) {
    return(
    <li>
    <span><FaCheck /></span>
    <p className="TodoDay-p 
    TodoDay-p--complete">        
        {props.text}</p>
    <span><TiDelete /></span>
    </li>
    );
    }

 export {TodoDay}