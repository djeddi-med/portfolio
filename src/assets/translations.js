// src/assets/translations.js
const translations = {
    // Navigation
    home: { en: "Home", fr: "Accueil" },
    experience: { en: "Experience", fr: "Expérience" },
    education: { en: "Education", fr: "Formation" },
    certifications: { en: "Certifications", fr: "Certifications" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    contact: { en: "Contact", fr: "Contact" },

    // Hero section
    hero_title: { en: "Hi, I'm <span>DJEDDI Mohamed</span>", fr: "Bonjour, je suis <span>DJEDDI Mohamed</span>" },
    hero_subtitle: { en: "IT Manager & Full Stack Developer", fr: "Manager IT & Développeur Full Stack" },
    hero_description: {
        en: "Responsible for IT infrastructure, from servers to networks, ensuring staff have the necessary hardware and software resources to perform their tasks. I analyze technological needs and recommend upgrades and security patches while managing new software and hardware implementations within budget and deadlines.",
        fr: "Responsable de l'infrastructure IT, des serveurs aux réseaux, en assurant que le personnel dispose des ressources matérielles et des logiciels nécessaires à l'exécution de ses tâches. J'analyse les besoins technologiques et recommande des mises à niveau et des correctifs de sécurité tout en gérant les nouvelles implémentations de logiciels et de matériel dans les délais et le budget."
    },
    contact_me: { en: "Contact Me", fr: "Me Contacter" },
    download_cv_en: { en: "Download CV (EN)", fr: "Télécharger CV (EN)" },
    download_cv_fr: { en: "Download CV (FR)", fr: "Télécharger CV (FR)" },

    // Experience section
    exp_freelance_title: { en: "Freelance Developer (Web & AI)", fr: "Développeur Freelance (Web & IA)" },
    exp_freelance_company: { en: "Self-Employed", fr: "Auto-Entrepreneur" },
    exp_freelance_date: { en: "Jan 2022 - Present", fr: "Jan 2022 - Présent" },
    exp_freelance_desc: {en: "Developing custom web applications and AI solutions for international clients. Specializing in full-stack development and machine learning implementations.",fr: "Développement d'applications web sur mesure et solutions d'IA pour des clients internationaux. Spécialisation en développement full-stack et implémentations de machine learning."},

    experience_title: { en: "Experience", fr: "Expérience" },
    exp_high_services_title: { en: "IT Manager", fr: "Responsable IT" },
    exp_high_services_company: { en: "SARL High Services, Hassi Messaoud", fr: "SARL High Services, Hassi Messaoud" },
    exp_high_services_date: { en: "May 2021 - Jan 2022", fr: "Mai 2021 - Jan 2022" },
    exp_high_services_desc: {
        en: "Managed IT infrastructure, ensuring optimal network performance, data security, and system reliability.",
        fr: "Gestion de l'infrastructure informatique, assurant des performances réseau optimales, la sécurité des données et la fiabilité du système."
    },
    exp_youkous_title: { en: "IT Service Manager", fr: "Responsable Service IT" },
    exp_youkous_company: { en: "SARL Youkous, Hammamet Tebessa", fr: "SARL Youkous, Hammamet Tebessa" },
    exp_youkous_date: { en: "Nov 2020 - May 2021", fr: "Nov 2020 - Mai 2021" },
    exp_youkous_desc: {
        en: "Led a team in providing comprehensive IT support, troubleshooting hardware/software issues, and implementing new IT solutions.",
        fr: "Dirigé une équipe de support IT, dépannage des problèmes matériels/logiciels et mise en œuvre de nouvelles solutions IT."
    },
    exp_pharmacist_assistant_title: { en: "Pharmacist Assistant", fr: "Assistant Pharmacien" },
    exp_pharmacist_assistant_company: { en: "Gouasmia Hana Pharmacy, Cheria Tebessa", fr: "Pharmacie Gouasmia Hana, Chéria Tébessa" },
    exp_pharmacist_assistant_date: { en: "Jan 2020 - Nov 2020", fr: "Jan 2020 - Nov 2020" },
    exp_pharmacist_assistant_desc: {
        en: "Assisted pharmacists with dispensing medications, managing inventory, and providing customer service.",
        fr: "Assisté les pharmaciens dans la délivrance des médicaments, la gestion des stocks et le service client."
    },
    exp_temp_teacher_college1_title: { en: "Temporary Teacher", fr: "Enseignant Vacataire" },
    exp_temp_teacher_college1_company: { en: "College Zarouk Loardi Bir Dh'eb Tebessa", fr: "Lycée Zarouk Loardi Bir Dh'eb - Tébessa" },
    exp_temp_teacher_college1_date: { en: "Sept 2018 - June 2019", fr: "Sept 2018 - Juin 2019" },
    exp_temp_teacher_college1_desc: { en: "Taught computer science fundamentals to college students.", fr: "Enseignement des bases de l'informatique aux élèves du collège."},
    
    exp_temp_teacher_college_title: { en: "Temporary Teacher", fr: "Enseignant Vacataire" },
    exp_temp_teacher_college_company: { en: "The Hub college Cheria Tebessa", fr: "Lycée Le Pôle Chéria Tébessa" },
    exp_temp_teacher_college_date: { en: "Oct 2019 - Nov 2019", fr: "Oct 2019 - Nov 2019" },
    exp_temp_teacher_college_desc: { en: "Taught computer science fundamentals to college students.", fr: "Enseignement des bases de l'informatique aux élèves du collège."},

    exp_part_time_teacher_uni_title: { en: "Part-time Conference Teacher", fr: "Enseignant de conference Vacataire" },
    exp_part_time_teacher_uni_company: { en: "Tebessa University, Faculty of Exact Sciences and Natural Sciences", fr: "Université de Tébessa, Faculté de sciences exactes et sciences de la nature" },
    exp_part_time_teacher_uni_date: { en: "Sep 2018 - Jul 2018", fr: "Sep 2017 - Jui 2018" },
    exp_part_time_teacher_uni_desc: {
        en: "Conducted tutorials and practical sessions for university students.",
        fr: "Animation de travaux dirigés et de séances de travaux pratiques pour les étudiants universitaires."
    },
    exp_temp_teacher_uni_title: { en: "Temporary Teacher", fr: "Enseignant Vacataire" },
    exp_temp_teacher_uni_company: { en: "Tebessa University, Faculty of Humanities and Social Sciences and Faculty of Commercial, Economic, and Management Sciences", fr: "Université de Tébessa, Faculté de sciences humaines et sociales et Faculté des sciences commerciales, économiques et gestion" },
    exp_temp_teacher_uni_date: { en: "Sept 2016 - Jul 2018", fr: "Sept 2016 - Jui 2018" },
    exp_temp_teacher_uni_desc: {en: "Taught computer science courses to university students.",fr: "Enseignement de cours d'informatique aux étudiants universitaires."},
    
    exp_supervisor_ts_full_eldjorf_title: { en: "Supervisor for Higher Technician Degree in Computer Science", fr: "Encadreur pour obtention de Technicien Supérieur en Informatique" },
    exp_supervisor_ts_full_eldjorf_company: { en: "National Institute of Specialized Vocational Training (INSFP) Eldjorf, Tebessa", fr: "Institut National Spécialisé de la Formation Professionnelle Eldjorf, Tébessa" },
    exp_supervisor_ts_full_eldjorf_date: { en: "Sept 2017 – Mar 2019", fr: "Sept 2017 – Mar 2019" },
    exp_supervisor_ts_full_eldjorf_desc: {en: "Supervised a graduation project for a Higher Technician Degree: Development of an Android application for the admissions office of Alia Saleh Hospital, Tebessa.",fr: "Encadrement d’un projet de fin d’études pour l’obtention du diplôme de Technicien Supérieur : Réalisation d’une application Android pour le bureau des entrées de l’EPH Alia Saleh, Tébessa."},
    
    exp_supervisor_ts_full_hammamet_title: { en: "Supervisor for Higher Technician Degree in Computer Science", fr: "Encadreur pour obtention de Technicien Supérieur en Informatique" },
    exp_supervisor_ts_full_hammamet_company: { en: "National Institute of Specialized Vocational Training (INSFP) Hammamet, Tebessa", fr: "Institut National Spécialisé de la Formation Professionnelle Hammamet, Tébessa" },
    exp_supervisor_ts_full_hammamet_date: { en: "Sept 2017 – Mar 2019", fr: "Sept 2017 – Mar 2019" },
    exp_supervisor_ts_full_hammamet_desc: { en: "Supervised a graduation project for a Higher Technician Degree: Design and development of a web application for managing the SESNV faculty library at Tebessa University.",fr: "Encadrement d’un projet de fin d’études pour l’obtention du diplôme de Technicien Supérieur : Conception et réalisation d’une application web pour la gestion de la bibliothèque de la faculté SESNV, Université de Tébessa."},

    exp_trainer_health_dir_title: { en: "Trainer", fr: "Formateur"},
    exp_trainer_health_dir_company: { en: "Health Directorate, Tebessa", fr: "Direction de Santé, Tébessa"},
    exp_trainer_health_dir_date: { en: "Mar 2018", fr: "Mar 2018" },
    exp_trainer_health_dir_desc: {en: "Delivered training to general practitioners on the use of the electronic patient record system at the Health Directorate.", fr: "Formation des médecins généralistes à l’utilisation du dossier électronique du patient à la Direction de Santé."},

    exp_trainer_eph_cheria_title: { en: "Trainer", fr: "Formateur" },
    exp_trainer_eph_cheria_company: { en: "Public Hospital of Chéria, Tebessa", fr: "Établissement Public Hospitalier Chéria, Tébessa" },
    exp_trainer_eph_cheria_date: { en: "Feb 2018", fr: "Fév 2018" },
    exp_trainer_eph_cheria_desc: {en: "Conducted training on email security for the administrative staff of the Public Hospital of Chéria.", fr: "Formation sur la sécurité de la messagerie électronique pour le personnel administratif de l'Établissement Public Hospitalier de Chéria."},

    // Education section
    education_title: { en: "Education", fr: "Formation" },
    edu_degree: { en: "Master's Degree in Networks & Computer Security", fr: "Master en Réseaux & Sécurité Informatique" },
    edu_university: { en: "Tebessa University", fr: "Université de Tébessa" },
    edu_date: { en: "2013 - 2015", fr: "2013 - 2015" },
    edu_degree2: { fr: "2ème année Licence Anglais Technique", en: "2nd year Technical English Degree"},
    edu_university2: { fr: "Université de Formation Continue", en: "Continuing Education University"},
    edu_date2: { fr: "Depuis 2023", en: "Since 2023"},

    // Certifications section
    certifications_title: { en: "Certifications", fr: "Certifications" },
    cert_google_it: { en: "Google IT Support", fr: "Support IT de Google" },
    cert_meta_db: { en: "Meta Database Engineer", fr: "Ingénieur Bases de Données Meta" },
    cert_cissp: { en: "CISSP", fr: "CISSP" },
    cert_aws_cloud: { en: "AWS Cloud Practitioner", fr: "Praticien Cloud AWS" },
    cert_comptia_network: { en: "CompTIA Network+", fr: "CompTIA Network+" },
    cert_comptia_security: { en: "CompTIA Security+", fr: "CompTIA Security+" },
    show_more_cert: { en: "Show More Certifications", fr: "Afficher Plus de Certifications" },
    certifications_title: { en: "Certifications", fr: "Certifications" },
    filter_by_provider: { en: "Filter by Provider", fr: "Filtrer par Fournisseur" },
    filter_by_category: { en: "Filter by Category", fr: "Filtrer par Catégorie" },
    sort_by: { en: "Sort By", fr: "Trier par" },
    sort_importance_desc: { en: "Importance (High to Low)", fr: "Importance (Plus élevé au plus bas)" },
    sort_importance_asc: { en: "Importance (Low to High)", fr: "Importance (Plus bas au plus élevé)" },
    sort_title_az: { en: "Title (A-Z)", fr: "Titre (A-Z)" },
    sort_title_za: { en: "Title (Z-A)", fr: "Titre (Z-A)" },
    sort_date_newest: { en: "Date (Newest First)", fr: "Date (Plus récent en premier)" },
    sort_date_oldest: { en: "Date (Oldest First)", fr: "Date (Plus ancien en premier)" },
    sort_provider_az: { en: "Provider (A-Z)", fr: "Fournisseur (A-Z)" },
    sort_provider_za: { en: "Provider (Z-A)", fr: "Fournisseur (Z-A)" },
    view_confirmation: { en: "View Confirmation", fr: "Voir la confirmation" },
    provider: { en: "Provider", fr: "Fournisseur" },
    date_obtained: { en: "Date Obtained", fr: "Date d'obtention" },
    close: { en: "Close", fr: "Fermer" },
    no_certifications_found: { en: "No certifications found matching your criteria.", fr: "Aucune certification trouvée correspondant à vos critères." },
    certifications_title: {
        en: "Certifications & Trainings",
        fr: "Certifications & Formations"
    },
    filter_by_provider: {
        en: "Filter by provider",
        fr: "Filtrer par fournisseur"
    },
    filter_by_category: {
        en: "Filter by category",
        fr: "Filtrer par catégorie"
    },
    sort_by: {
        en: "Sort by",
        fr: "Trier par"
    },
    sort_importance_desc: {
        en: "Importance (High to Low)",
        fr: "Importance (Élevée à Faible)"
    },
    sort_importance_asc: {
        en: "Importance (Low to High)",
        fr: "Importance (Faible à Élevée)"
    },
    sort_title_az: {
        en: "Title (A-Z)",
        fr: "Titre (A-Z)"
    },
    sort_title_za: {
        en: "Title (Z-A)",
        fr: "Titre (Z-A)"
    },
    sort_date_newest: {
        en: "Date (Newest First)",
        fr: "Date (Récentes d'abord)"
    },
    sort_date_oldest: {
        en: "Date (Oldest First)",
        fr: "Date (Anciennes d'abord)"
    },
    sort_provider_az: {
        en: "Provider (A-Z)",
        fr: "Fournisseur (A-Z)"
    },
    sort_provider_za: {
        en: "Provider (Z-A)",
        fr: "Fournisseur (Z-A)"
    },
    no_certifications_found: {
        en: "No certifications found with the selected filters",
        fr: "Aucune certification trouvée avec les filtres sélectionnés"
    },
    view_confirmation: {
        en: "View confirmation",
        fr: "Voir la confirmation"
    },
    provider: {
        en: "Provider",
        fr: "Fournisseur"
    },
    date_obtained: {
        en: "Date obtained",
        fr: "Date d'obtention"
    },
    category: {
        en: "Category",
        fr: "Catégorie"
    },

    // Projects section
    projects_title: { en: "Projects", fr: "Projets" },

    proj_portfolio_title: { en: "Personal Portfolio Website", fr: "Site web de portfolio personnel" },
    proj_portfolio_date: { en: "2025", fr: "2025" },

    proj_ai_title: { en: "Prediction of Employee Performance Using AI", fr: "Prédiction de la performance des employés à l’aide de l’intelligence artificielle" },
    proj_ai_date: { en: "2024", fr: "2024" },

    proj_recruitment_site_title: { en: "Dynamic Website for Online Recruitment Management", fr: "Site web dynamique pour la gestion des recrutements en ligne"},
    proj_recruitment_site_date: { en: "2022", fr: "2022" },

    proj_high_services_title: { en: "Global Platform for Managing High Services Company", fr: "Plateforme globale pour la gestion de la société High Services"},
    proj_high_services_date: { en: "2021", fr: "2021" },

    proj_medical_office_title: { en: "Platform for Managing a Medical Office", fr: "Plateforme pour la gestion d’un cabinet médical"},
    proj_medical_office_date: { en: "2020", fr: "2020" },

    proj_android_signature_title: { en: "Android Signature Verification App", fr: "Application Android de Vérification de Signature"},
    proj_android_signature_date: { en: "2016", fr: "2016" },

    proj_android_hospital_title: { en: "Android App for Admissions Office, Alia Saleh Hospital", fr: "Application Android pour le bureau des entrées, Hôpital Alia Saleh Tébessa"},
    proj_android_hospital_date: { en: "2018", fr: "2018" },

    proj_ehealth_platform_title: { en: "E-Health Platform and Medical Records, EPH Chéria", fr: "Plateforme de santé électronique et dossier médical, EPH de Chéria"},
    proj_ehealth_platform_date: { en: "2018", fr: "2018" },

    proj_library_app_title: { en: "Library Management App, SESNV Faculty", fr: "Application pour la gestion de bibliothèque de la faculté SESNV"},
    proj_library_app_date: { en: "2019", fr: "2019" },

    proj_degree_service_title: { en: "Platform for Managing Degree Service, SESNV Faculty", fr: "Plateforme pour la gestion du service des diplômes, faculté SESNV"},
    proj_degree_service_date: { en: "2018", fr: "2018" },

    proj_school_cert_app_title: { en: "App for Printing School Certificates, Bir Dhab High School", fr: "Application pour imprimer les attestations de scolarité, Lycée Bir Dhab Tébessa"},
    proj_school_cert_app_date: { en: "2018", fr: "2018" },

    proj_exam_platform_title: { en: "Platform for Self-correcting Exams Using Local Network", fr: "Plateforme pour faire des examens autocorrigés en utilisant un réseau local" },
    proj_exam_platform_date: { en: "2019", fr: "2019" },

    proj_chat_app_title: { en: "Chat Application, Telemedicine", fr: "Application de chat, télémédecine"},
    proj_chat_app_date: { en: "2018", fr: "2018" },
    

    // Skills section
    skills_title: { en: "Skills", fr: "Compétences" },
    prog_languages: { en: "Programming Languages", fr: "Langages de Programmation" },
    knowledge: { en: "Knowledge", fr: "Connaissances" },
    network_admin: { en: "Network Administration", fr: "Administration Réseau" },
    info_security: { en: "Information Security", fr: "Sécurité de l'Information" },
    software_design: { en: "Software Solutions Design", fr: "Conception de Solutions Logicielles" },
    general_maintenance: { en: "General Maintenance", fr: "Maintenance Générale" },
    mobile_dev: { en: "Mobile Application Development", fr: "Développement d'Applications Mobiles" },
    db_admin: { en: "Database Administration", fr: "Administration de Bases de Données" },

    // Spoken Languages
    spoken_languages: { en: "Languages", fr: "Langues" },
    arabic: { en: "Arabic", fr: "Arabe" },
    french: { en: "French", fr: "Français" },
    english: { en: "English", fr: "Anglais" },
    fluent: { en: "", fr: "" },
    intermediate: { en: "", fr: "" },
    beginner: { en: "", fr: "" },

    // Contact section
    contact_title: { en: "Contact Me", fr: "Me Contacter" },
    contact_info: { en: "Contact Information", fr: "Coordonnées" },
    phone: { en: "Phone", fr: "Téléphone" },
    email: { en: "Email", fr: "Email" },
    linkedin: { en: "LinkedIn", fr: "LinkedIn" },
    github: { en: "GitHub", fr: "GitHub" },
    send_message: { en: "Send Message", fr: "Envoyer Message" },
    your_name: { en: "Your Name", fr: "Votre Nom" },
    your_email: { en: "Your Email", fr: "Votre Email" },
    subject: { en: "Subject", fr: "Sujet" },
    your_message: { en: "Your Message", fr: "Votre Message" },
    form_submitted: { en: "Your message has been sent successfully!", fr: "Votre message a été envoyé avec succès !" },
    form_submitted_client: { en: "Your email client will open to send the message.", fr: "Votre client de messagerie va s'ouvrir pour envoyer le message." },

    // Footer
    footer_text: { en: "IT Manager & Full Stack Developer with expertise in network administration, information security, and software development.", fr: "Responsable IT & Développeur Full Stack avec une expertise en administration réseau, sécurité de l'information et développement de logiciels." },
    copyright: { en: "© 2025 Djeddi Mohamed. All rights reserved.", fr: "© 2025 Djeddi Mohamed. Tous droits réservés." }
};

export default translations;