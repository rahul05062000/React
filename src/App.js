// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='Home' content='Menu'/>
    <div className="Mybox">
    <TextForm heading='Text To be Convert'/>
    </div>
    </>

  );
}

export default App;
