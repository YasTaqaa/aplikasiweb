import logo from './logo.svg';
import './App.css';

function App() {

    let ucapan;

    ucapan = 'Selamat Siang !';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <h1> {ucapan} </h1>
       
      </header>
    </div>
  );
}

export default App;