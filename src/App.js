import './App.css';
import {AboutMe} from './components/AboutMe';
import Langages from './components/Langages';
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Langages/>
            <AboutMe/>
        </Container>
    );
}

export default App;