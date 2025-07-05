import React from 'react';
import translations from '../assets/translations';

const Projects = ({ currentLang }) => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">{translations.projects_title[currentLang]}</h2>
                <div className="project-grid">
                    <div className="project-card">
                        {/* If you have project images, place them in public/img/projects and use the path like /img/projects/project1.jpg */}
                        <h3>{translations.proj_portfolio_title[currentLang]}</h3>
                        <p className="date">{translations.proj_portfolio_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-react skill-lang-icon"></i>
                             <i className="fab fa-node skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* If you have project images, place them in public/img/projects and use the path like /img/projects/project1.jpg */}
                        <h3>{translations.proj_recruitment_site_title[currentLang]}</h3>
                        <p className="date">{translations.proj_recruitment_site_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project2.jpg" alt="Project 2" /> */}
                        <h3>{translations.proj_high_services_title[currentLang]}</h3>
                        <p className="date">{translations.proj_high_services_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-python skill-lang-icon"></i>
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project3.jpg" alt="Project 3" /> */}
                        <h3>{translations.proj_medical_office_title[currentLang]}</h3>
                        <p className="date">{translations.proj_medical_office_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_android_signature_title[currentLang]}</h3>
                        <p className="date">{translations.proj_android_signature_date[currentLang]}</p>
                        <p className="tech"><i className="fab fa-java skill-lang-icon"></i></p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 5" /> */}
                        <h3>{translations.proj_android_hospital_title[currentLang]}</h3>
                        <p className="date">{translations.proj_android_hospital_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_ehealth_platform_title[currentLang]}</h3>
                        <p className="date">{translations.proj_ehealth_platform_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_library_app_title[currentLang]}</h3>
                        <p className="date">{translations.proj_library_app_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_degree_service_title[currentLang]}</h3>
                        <p className="date">{translations.proj_degree_service_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_school_cert_app_title[currentLang]}</h3>
                        <p className="date">{translations.proj_school_cert_app_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_exam_platform_title[currentLang]}</h3>
                        <p className="date">{translations.proj_exam_platform_date[currentLang]}</p>
                        <p className="tech">
                            <i className="fab fa-php skill-lang-icon"></i>
                            <i className="fab fa-js skill-lang-icon"></i>
                            <i className="fab fa-html5 skill-lang-icon"></i>
                            <i className="fab fa-css3-alt skill-lang-icon"></i>
                            <i className="fas fa-database skill-lang-icon"></i>
                        </p>
                    </div>
                    <div className="project-card">
                        {/* <img src="/img/projects/project4.jpg" alt="Project 4" /> */}
                        <h3>{translations.proj_chat_app_title[currentLang]}</h3>
                        <p className="date">{translations.proj_chat_app_date[currentLang]}</p>
                        <p className="tech"><i className="fab fa-java skill-lang-icon"></i></p>
                    </div>
                </div>
                {/* <button className="btn btn-secondary show-more-btn">{translations.show_more_projects[currentLang]}</button> */}
            </div>
        </section>
    );
};

export default Projects;