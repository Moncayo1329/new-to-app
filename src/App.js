import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

   <TodoDay />




      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          don't waste your life 
        </a>
      </header>
    </div>
  );
}

function TodoDay() {
return(

<li>
<span>V</span>
<p>Wake up</p>
<p>X</p>

</li>

);

}
export default App;
