import React from 'react';
import translations from '../assets/translations';

const Skills = ({ currentLang }) => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">{translations.skills_title[currentLang]}</h2>
                <div className="skills-content">
                    {/* Programming Languages */}
                    <div className="programming-languages">
                        <h3>{translations.prog_languages[currentLang]}</h3>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-php skill-lang-icon"></i> PHP</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-html5 skill-lang-icon"></i> HTML5</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '95%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-css3-alt skill-lang-icon"></i> CSS3</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '90%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-js skill-lang-icon"></i> JavaScript</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '85%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fas fa-database skill-lang-icon"></i> MySQL/SQLite/Oracle</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '88%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fas fa-cogs skill-lang-icon"></i> C++</span> {/* Using cogs as a generic code icon */}
                            <div className="skill-bar"><div className="skill-level" style={{ width: '70%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-python skill-lang-icon"></i> Python</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '75%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fab fa-java skill-lang-icon"></i> Java</span>
                            <div className="skill-bar"><div className="skill-level" style={{ width: '65%' }}></div></div>
                        </div>
                        <div className="skill-item">
                            <span className="skill-name"><i className="fas fa-desktop skill-lang-icon"></i> Visual Basic</span> {/* Using desktop as a generic VB icon */}
                            <div className="skill-bar"><div className="skill-level" style={{ width: '60%' }}></div></div>
                        </div>
                    </div>

                    {/* Knowledge */}
                    <div className="knowledge">
                        <h3>{translations.knowledge[currentLang]}</h3>
                        <ul>
                            <li><i className="fas fa-network-wired knowledge-icon"></i> {translations.network_admin[currentLang]}</li>
                            <li><i className="fas fa-shield-alt knowledge-icon"></i> {translations.info_security[currentLang]}</li>
                            <li><i className="fas fa-drafting-compass knowledge-icon"></i> {translations.software_design[currentLang]}</li>
                            <li><i className="fas fa-wrench knowledge-icon"></i> {translations.general_maintenance[currentLang]}</li>
                            <li><i className="fas fa-mobile-alt knowledge-icon"></i> {translations.mobile_dev[currentLang]}</li>
                            <li><i className="fas fa-database knowledge-icon"></i> {translations.db_admin[currentLang]}</li>
                        </ul>
                    </div>

                    {/* Languages Spoken - Now with percentage bars */}
                    <div className="languages-spoken">
                        <h3>{translations.spoken_languages[currentLang]}</h3>
                        <div className="lang-skill-item">
                            <span className="lang-skill-name">{translations.arabic[currentLang]}</span>
                            <div className="lang-skill-bar"><div className="lang-skill-level" style={{ width: '100%' }}></div></div> {/* Fluent = 100% */}
                            <span className="lang-level">{translations.fluent[currentLang]}</span>
                        </div>
                        <div className="lang-skill-item">
                            <span className="lang-skill-name">{translations.french[currentLang]}</span>
                            <div className="lang-skill-bar"><div className="lang-skill-level" style={{ width: '95%' }}></div></div> {/* Fluent = 95% (slightly less than native for visual variety) */}
                            <span className="lang-level">{translations.fluent[currentLang]}</span>
                        </div>
                        <div className="lang-skill-item">
                            <span className="lang-skill-name">{translations.english[currentLang]}</span>
                            <div className="lang-skill-bar"><div className="lang-skill-level" style={{ width: '90%' }}></div></div> {/* Intermediate = 70% */}
                            <span className="lang-level">{translations.intermediate[currentLang]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;