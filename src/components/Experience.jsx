import React from 'react';
import translations from '../assets/translations';

const Experience = ({ currentLang }) => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">{translations.experience_title[currentLang]}</h2>
                <div className="timeline">
                    {/* Experience 1: Freelancer */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-laptop-code fa-flip experience-icon"></i> {translations.exp_freelance_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_freelance_company[currentLang]}</h4>
                            <p className="date">{translations.exp_freelance_date[currentLang]}</p>
                            <p>{translations.exp_freelance_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 1: High Services */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-solid fa-sitemap fa-flip experience-icon"></i> {translations.exp_high_services_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_high_services_company[currentLang]}</h4>
                            <p className="date">{translations.exp_high_services_date[currentLang]}</p>
                            <p>{translations.exp_high_services_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 2: Youkous */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-solid fa-server fa-flip experience-icon"></i> {translations.exp_youkous_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_youkous_company[currentLang]}</h4>
                            <p className="date">{translations.exp_youkous_date[currentLang]}</p>
                            <p>{translations.exp_youkous_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 3: Pharmacist Assistant */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-pills fa-flip experience-icon"></i> {translations.exp_pharmacist_assistant_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_pharmacist_assistant_company[currentLang]}</h4>
                            <p className="date">{translations.exp_pharmacist_assistant_date[currentLang]}</p>
                            <p>{translations.exp_pharmacist_assistant_desc[currentLang]}</p>
                        </div>
                    </div>
                    
                    {/* Experience 5: Part-time Teacher Uni */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-university fa-flip experience-icon"></i> {translations.exp_part_time_teacher_uni_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_part_time_teacher_uni_company[currentLang]}</h4>
                            <p className="date">{translations.exp_part_time_teacher_uni_date[currentLang]}</p>
                            <p>{translations.exp_part_time_teacher_uni_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 6: Temp Teacher Uni */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-desktop fa-flip experience-icon"></i> {translations.exp_temp_teacher_uni_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_temp_teacher_uni_company[currentLang]}</h4>
                            <p className="date">{translations.exp_temp_teacher_uni_date[currentLang]}</p>
                            <p>{translations.exp_temp_teacher_uni_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 4: Temp Teacher College */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-chalkboard-teacher fa-flip experience-icon"></i> {translations.exp_temp_teacher_college1_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_temp_teacher_college1_company[currentLang]}</h4>
                            <p className="date">{translations.exp_temp_teacher_college1_date[currentLang]}</p>
                            <p>{translations.exp_temp_teacher_college1_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 4: Temp Teacher College */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-chalkboard-teacher fa-flip experience-icon"></i> {translations.exp_temp_teacher_college_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_temp_teacher_college_company[currentLang]}</h4>
                            <p className="date">{translations.exp_temp_teacher_college_date[currentLang]}</p>
                            <p>{translations.exp_temp_teacher_college_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 7: Supervisor  */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-solid fa-user-graduate fa-flip experience-icon"></i> {translations.exp_supervisor_ts_full_eldjorf_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_supervisor_ts_full_eldjorf_company[currentLang]}</h4>
                            <p className="date">{translations.exp_supervisor_ts_full_eldjorf_date[currentLang]}</p>
                            <p>{translations.exp_supervisor_ts_full_eldjorf_desc[currentLang]}</p>
                        </div>
                    </div>
                    {/* Experience 7: Supervisor  */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-solid fa-user-graduate fa-flip experience-icon"></i> {translations.exp_supervisor_ts_full_hammamet_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_supervisor_ts_full_hammamet_company[currentLang]}</h4>
                            <p className="date">{translations.exp_supervisor_ts_full_hammamet_date[currentLang]}</p>
                            <p>{translations.exp_supervisor_ts_full_hammamet_desc[currentLang]}</p>
                        </div>
                    </div>
                     {/* Experience 8: Formateur DDS  */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-person-chalkboard fa-flip experience-icon"></i> {translations.exp_trainer_health_dir_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_trainer_health_dir_company[currentLang]}</h4>
                            <p className="date">{translations.exp_trainer_health_dir_date[currentLang]}</p>
                            <p>{translations.exp_trainer_health_dir_desc[currentLang]}</p>
                        </div>
                    </div>
                     {/* Experience 9: Formateur EPH  */}
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h3><i className="fas fa-person-chalkboard fa-flip experience-icon"></i> {translations.exp_trainer_eph_cheria_title[currentLang]}</h3> {/* Icon moved inside <h3> */}
                            <h4>{translations.exp_trainer_eph_cheria_company[currentLang]}</h4>
                            <p className="date">{translations.exp_trainer_eph_cheria_date[currentLang]}</p>
                            <p>{translations.exp_trainer_eph_cheria_desc[currentLang]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;