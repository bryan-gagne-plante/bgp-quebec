import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container} from "react-bootstrap";

export const AboutMe = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('AboutMe-Title')}</h1>
            <span>{t('AboutMe-Subtitle')}</span>
            <ul>
                <li>{t('AboutMe-Line1')}</li>
                <li>{t('AboutMe-Line2')}</li>
                <li>{t('AboutMe-Line3')}</li>
                <li>{t('AboutMe-Line4')}</li>
                <li>{t('AboutMe-Line5')}</li>
                <li>{t('AboutMe-Line6')}</li>
            </ul>
            <p>Arrête de chercher, tu viens de le trouver !</p>
        </>
    );
}

export default AboutMe;