import './App.css';
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Skills from './Skills'

function App() {
  return (
    <>
        <NavBar />
        <Header />
        <About />
        <Skills/>
    </>
  );
}

export default App;
