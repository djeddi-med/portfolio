import React from 'react';
import translations from '../assets/translations';

const Hero = ({ currentLang, downloadCV }) => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-flex-container">
                    <div className="hero-text-section">
                        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: translations.hero_title[currentLang] }} />
                        <h2 className="hero-subtitle">{translations.hero_subtitle[currentLang]}</h2>
                        <p className="hero-description">
                            {translations.hero_description[currentLang]}
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                {translations.contact_me[currentLang]}
                            </a>
                            <button 
                                onClick={() => downloadCV('en')} 
                                className="btn btn-secondary"
                            >
                                {translations.download_cv_en[currentLang]}
                            </button>
                            <button
                                onClick={() => downloadCV('fr')}
                                className="btn btn-secondary"
                            >
                                {translations.download_cv_fr[currentLang]}
                            </button>
                        </div>
                    </div>
                    
                    <div className="hero-image-section">
                        <img 
                            src="/img/img.png" 
                            alt="Djeddi Mohamed" 
                            className="profile-img"
                        />
                        <div className="tech-icons">
                            <i className="fab fa-html5" title="HTML5"></i>
                            <i className="fab fa-css3-alt" title="CSS3"></i>
                            <i className="fab fa-js" title="JavaScript"></i>
                            <i className="fab fa-php" title="PHP"></i>
                            <i className="fab fa-python" title="Python"></i>
                            <i className="fab fa-java" title="Java"></i>
                            <i className="fas fa-database" title="MySQL"></i>
                            <i className="fab fa-linux" title="Linux"></i>
                        </div>
                        
                        <div className="contact-info-box">
                            <div className="contact-item">
                                <a href="tel:+213668429688" className="contact-link">
                                    <i className="fas fa-phone contact-icon"></i> +213 (0) 668 42 96 88
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="mailto:med.djd@gmail.com" className="contact-link">
                                    <i className="fas fa-envelope contact-icon"></i> med.djd@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://linkedin.com/in/djeddi-med" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <i className="fab fa-linkedin contact-icon"></i> linkedin.com/in/djeddi-med
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://github.com/djeddi-med" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <i className="fab fa-github contact-icon"></i> github.com/djeddi-med
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;