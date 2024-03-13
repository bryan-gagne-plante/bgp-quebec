import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ThemeSwitch() {
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute('data-bs-theme') || 'light'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <Form.Check
            type="switch"
            id="theme-switch"
            label={`Enable ${theme === 'light' ? 'dark' : 'light'} mode`}
            checked={theme === 'dark'}
            onChange={toggleTheme}
        />
    );
}

export default ThemeSwitch;
