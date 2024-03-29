import React, {useEffect} from 'react';
import {Dropdown} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

function Languages() {
    const {i18n} = useTranslation();

    useEffect(() => {
        const changeLanguage = async () => {
            await i18n.changeLanguage('fr');
        };
        changeLanguage();
    }, [i18n]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="d-flex justify-content-end">
            <Dropdown onSelect={changeLanguage}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {i18n.language === 'fr' ? 'Français' : 'English'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="fr">Français</Dropdown.Item>
                    <Dropdown.Item eventKey="en">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Languages;
