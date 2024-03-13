import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AboutMe from './components/AboutMe';
import Langages from './components/Langages';
import ThemeSwitch from "./components/ThemeSwitch";


function App() {
    return (
        <Container>
            <Langages/>
            <AboutMe/>
            <ThemeSwitch/>
        </Container>
    );
}

export default App;