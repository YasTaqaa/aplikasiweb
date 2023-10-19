import logo from './logo.svg';
import './App.css';

function App() {

    let ucapan, WaktuPagi;

     WaktuPagi = false;

     if (WaktuPagi) {
        ucapan = "Selamat Pagi !" ;
     }
     else {ucapan = "Selamat Sore !" ;}

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{ucapan}</h1>

        { 5 + 5}
       
      </header>
    </div>
  );
}

export default App;