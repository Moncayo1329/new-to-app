import React from "react";

function TodoSearch({

searchValue,
setSearchValue,
}) {



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

