import logo from './pngegg.png';
import './App.css';

    function App() {

        return ( 
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

                <h3> Pilih Link di Bawah ini : </h3>
                <ul>
                <li>                
                <a
                ClassName="App-Link"
                href="Lat1"
                rel="noopener noreferrer"
                >
                    Latihan 1
                </a> 
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat2"
                rel="noopener noreferrer"
                >
                    Latihan 2
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat3"
                rel="noopener noreferrer"
                >
                    Latihan 3
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat4"
                rel="noopener noreferrer"
                >
                    Latihan 4
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat5"
                rel="noopener noreferrer"
                >
                    Latihan 5
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat6"
                rel="noopener noreferrer"
                >
                    Latihan 6
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat7"
                rel="noopener noreferrer"
                >
                    Latihan 7
                </a>
                </li>
                <li>
                <a
                ClassName="App-Link"
                href="Lat8"
                rel="noopener noreferrer"
                >
                    Latihan 8
                </a>
                </li>                  
                </ul>
            </header>
        </div>
    );
}

export default App;