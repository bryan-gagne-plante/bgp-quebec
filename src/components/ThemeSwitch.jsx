import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ThemeSwitch() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-bs-theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
            <button
                className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
                onClick={toggleTheme}>
                {theme === 'dark' ? (
                    <i className="bi bi-sun-fill"></i>
                ) : (
                    <i className="bi bi-moon-stars-fill"></i>
                )}
            </button>
        </div>
    );
}

export default ThemeSwitch;