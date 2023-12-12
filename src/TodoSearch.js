function TodoSearch() {
    return(
    <input
     placeholder="Ir al gym"
          className='TodoSearch'
         onChange={(event) => {
            console.log('Escribiste en search');
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);

          } 
        }
    />
    );
    }


export {TodoSearch}