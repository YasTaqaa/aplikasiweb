import logo from './logo.svg';
import './App.css';

function App() {

    let ucapan, WaktuPagi;

    let x = 4

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

        <h1>{(x) < 10 ? "Hai" : "Selamat Tinggal"}</h1>
       
      </header>
    </div>
  );
}

export default App;