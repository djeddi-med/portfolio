import React from 'react';
import translations from '../assets/translations';

const Education = ({ currentLang }) => {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">{translations.education_title[currentLang]}</h2>
                <div className="education-cards">
                    <div className="edu-card">
                        <i className="fas fa-graduation-cap"></i>
                        <h3>{translations.edu_degree[currentLang]}</h3>
                        <h4>{translations.edu_university[currentLang]}</h4>
                        <p className="date">{translations.edu_date[currentLang]}</p>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Education;