import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {AboutMe} from './components/AboutMe';
import Langages from './components/Langages';
import {Col, Container, Row} from "react-bootstrap";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ThemeSwitch/>
                </Col>
                <Col>
                    <Langages/>
                </Col>
            </Row>
            <AboutMe/>
        </Container>
    );
}

export default App;