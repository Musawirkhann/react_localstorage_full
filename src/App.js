import logo from './logo.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
       <Navbar bg="danger" variant="dark">
         <div className="container">
         <Navbar.Brand href="#home">
            React Local Storage Demo
          </Navbar.Brand>
         </div>
        </Navbar>
        <HomeScreen/>
    </div>
  );
}

export default App;
