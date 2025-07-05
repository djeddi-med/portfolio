import React, { useState, useEffect } from 'react';
import translations from '../assets/translations';

const Header = ({ currentLang, switchLanguage, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [themeIcon, setThemeIcon] = useState('fa-moon'); // State to control the theme icon

    // Effect to set the initial theme icon based on localStorage or system preference
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setThemeIcon('fa-sun');
        } else {
            setThemeIcon('fa-moon');
        }
    }, []);

    const handleThemeToggle = () => {
        const newTheme = themeIcon === 'fa-moon' ? 'dark' : 'light';
        setThemeIcon(newTheme === 'dark' ? 'fa-sun' : 'fa-moon');
        toggleTheme(newTheme); // Call the toggleTheme function passed from App.jsx
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">DJEDDI<span>Mohamed</span></div>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" className="nav-link" onClick={closeMobileMenu}>{translations.home[currentLang]}</a></li>
                        <li><a href="#experience" className="nav-link" onClick={closeMobileMenu}>{translations.experience[currentLang]}</a></li>
                        <li><a href="#education" className="nav-link" onClick={closeMobileMenu}>{translations.education[currentLang]}</a></li>
                        <li><a href="#certifications" className="nav-link" onClick={closeMobileMenu}>{translations.certifications[currentLang]}</a></li>
                        <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>{translations.projects[currentLang]}</a></li>
                        <li><a href="#skills" className="nav-link" onClick={closeMobileMenu}>{translations.skills[currentLang]}</a></li>
                        <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>{translations.contact[currentLang]}</a></li>
                    </ul>
                    <div className="nav-controls">
                        <button className="theme-toggle" onClick={handleThemeToggle}>
                            <i className={`fas ${themeIcon}`}></i>
                        </button>
                        <div className="lang-switcher">
                            <button className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`} onClick={() => switchLanguage('en')}>EN</button>
                            <button className={`lang-btn ${currentLang === 'fr' ? 'active' : ''}`} onClick={() => switchLanguage('fr')}>FR</button>
                        </div>
                        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileMenuToggle}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;