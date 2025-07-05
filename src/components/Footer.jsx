import React from 'react';
import translations from '../assets/translations';

const Footer = ({ currentLang }) => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">DJEDDI<span>Mohamed</span></div>
                    <p className="footer-text">{translations.footer_text[currentLang]}</p>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/djeddi-med" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/djeddi-med" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        {/* Add actual Twitter link if available, otherwise remove or comment out */}
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                    <p className="copyright">{translations.copyright[currentLang]}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;