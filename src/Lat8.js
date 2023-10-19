import logo from './logo.svg';
import './App.css';

function Salam() {
    return <h1>Hai, Apa Kabar</h1>;
}

function App() {
    

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
            <Salam />
        </div>
       
      </header>
    </div>
  );
}

export default App;