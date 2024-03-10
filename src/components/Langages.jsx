import React, {useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useTranslation} from 'react-i18next';
import {Container} from "react-bootstrap";

function Langages() {
    const {i18n} = useTranslation();

    useEffect(() => {
        const changeLanguage = async () => {
            await i18n.changeLanguage('fr');
        };
        changeLanguage();
    }, [i18n]);

    function changerLangue(langue) {
        i18n.changeLanguage(langue);
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col xs={{span: 6, offset: 6}} sm={{span: 3, offset: 9}} lg={{span: 2, offset: 10}}>
                    <Form.Group>
                        <Form.Control as="select" className="mb-3"
                                      onChange={(event) => changerLangue(event.target.value)}>
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default Langages;