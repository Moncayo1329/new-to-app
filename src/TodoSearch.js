import React from "react";

function TodoSearch() {
const [searchValue, setSearchValue] = React.
useState('');
console.log('Usuarios made the day ' + searchValue)


    return(
    <input
     placeholder="Ir al gym"
          className='TodoSearch'
          value={searchValue}
         onChange={(event) => {
            setSearchValue(event.target.value);
           

          } 
        }
    />
    );
    }


export {TodoSearch}

