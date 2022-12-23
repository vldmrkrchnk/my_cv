import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import Bio from './Bio';


function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <Carousel/>
        <Bio/>
      </div>
    </div>
  );
}

export default App;
