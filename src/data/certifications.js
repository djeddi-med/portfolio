// src/data/certifications.js

// Helper function to get the icon based on provider
const getProviderIcon = (provider) => {
    const providerLower = provider.toLowerCase();
    
    if (providerLower.includes('amazon') || providerLower.includes('aws')) {
        return 'fab fa-aws';
    }
    if (providerLower.includes('cisco networking academy')) {
        return 'fa-solid fa-c';
    }
    if (providerLower.includes('coursera & google') || providerLower.includes('google') ) {
        return 'fab fa-google';
    }
    if (providerLower.includes('udemy')) {
        return 'fab fa-u';
    }
    if (providerLower.includes('microsoft')) {
        return 'fab fa-microsoft';
    }
    if (providerLower.includes('ibm')) {
        return 'fa-solid fa-certificate';
    }
    if (providerLower.includes('oracle')) {
        return 'fas fa-database';
    }
    if (providerLower.includes('ec-council') || providerLower.includes('cybrary') || providerLower.includes('cybersecurity')) {
        return 'fas fa-shield-alt';
    }
    if (providerLower.includes('linux') || providerLower.includes('ubuntu')) {
        return 'fab fa-linux';
    }
    if (providerLower.includes('edx')) {
        return 'fas fa-e';
    }
    if (providerLower.includes('w3schools')) {
        return 'fas fa-code';
    }
    if (providerLower.includes('freecodecamp') || providerLower.includes('free code camp')) {
        return 'fab fa-free-code-camp';
    }
    if (providerLower.includes('hackerrank')) {
        return 'fas fa-laptop-code';
    }
    if (providerLower.includes('sololearn')) {
        return 'fas fa-mobile-alt';
    }
    if (providerLower.includes('linkedin')) {
        return 'fab fa-linkedin';
    }
    if (providerLower.includes('coursera & meta')) {
        return 'fab fa-meta';
    }
    if (providerLower.includes('university')) {
        return 'fas fa-university';
    }
    if (providerLower.includes('skillup') || providerLower.includes('skillfront')) {
        return 'fas fa-certificate';
    }
    if (providerLower.includes('hp')) {
        return 'fas fa-hp';
    }
    if (providerLower.includes('open university') || providerLower.includes('european open university')) {
        return 'fas fa-graduation-cap';
    }
    if (providerLower.includes('unicef') || providerLower.includes('unesco')) {
        return 'fas fa-globe';
    }
    if (providerLower.includes('itronix') || providerLower.includes('virtual cyber labs')) {
        return 'fas fa-laptop';
    }
    if (providerLower.includes('great learning') || providerLower.includes('graet learning')) {
        return 'fas fa-brain';
    }
    
    return 'fas fa-award'; // Generic award/certificate icon
};

// Function to determine category based on title
const getCategory = (title) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('cyber') || titleLower.includes('security') || titleLower.includes('cissp') || titleLower.includes('crisc') || titleLower.includes('cisa') || titleLower.includes('hack')) {
        return 'Cybersecurity';
    }
    if (titleLower.includes('network') || titleLower.includes('ccna') || titleLower.includes('dns') || titleLower.includes('wireshark') || titleLower.includes('ipv6')) {
        return 'Networking';
    }
    if (titleLower.includes('cloud') || titleLower.includes('aws') || titleLower.includes('azure') || titleLower.includes('gcp')) {
        return 'Cloud';
    }
    if (titleLower.includes('data') || titleLower.includes('database') || titleLower.includes('sql') || titleLower.includes('mysql') || titleLower.includes('mongodb')) {
        return 'Database';
    }
    if (titleLower.includes('python') || titleLower.includes('java') || titleLower.includes('c++') || titleLower.includes('javascript') || titleLower.includes('php') || titleLower.includes('ruby') || titleLower.includes('typescript') || titleLower.includes('swift')) {
        return 'Programming';
    }
    if (titleLower.includes('web') || titleLower.includes('html') || titleLower.includes('css') || titleLower.includes('react') || titleLower.includes('frontend') || titleLower.includes('wordpress')) {
        return 'Web Development';
    }
    if (titleLower.includes('project') || titleLower.includes('pmp') || titleLower.includes('management')) {
        return 'Project Management';
    }
    if (titleLower.includes('linux') || titleLower.includes('ubuntu') || titleLower.includes('windows') || titleLower.includes('macos')) {
        return 'Operating Systems';
    }
    if (titleLower.includes('ai') || titleLower.includes('artificial intelligence') || titleLower.includes('machine learning') || titleLower.includes('deep learning')) {
        return 'AI/ML';
    }
    if (titleLower.includes('support') || titleLower.includes('helpdesk') || titleLower.includes('technical')) {
        return 'IT Support';
    }
    if (titleLower.includes('system') || titleLower.includes('admin') || titleLower.includes('infrastructure')) {
        return 'IT Infrastructure';
    }
    if (titleLower.includes('business') || titleLower.includes('analysis') || titleLower.includes('marketing') || titleLower.includes('seo')) {
        return 'Business';
    }
    if (titleLower.includes('iot')) {
        return 'IoT';
    }
    
    return 'Other';
};

// Function to determine importance score based on provider and title
const getImportanceScore = (provider, title) => {
    const providerLower = provider.toLowerCase();
    const titleLower = title.toLowerCase();
    
    // Professional certifications from major providers
    if (providerLower.includes('cisco') && (titleLower.includes('ccna') || titleLower.includes('security'))) {
        return 9;
    }
    if (providerLower.includes('google') && titleLower.includes('professional')) {
        return 9;
    }
    if (providerLower.includes('aws') && (titleLower.includes('professional') || titleLower.includes('architect') || titleLower.includes('practitioner'))) {
        return 9;
    }
    if (providerLower.includes('microsoft') && (titleLower.includes('azure') || titleLower.includes('associate') || titleLower.includes('expert'))) {
        return 9;
    }
    if (providerLower.includes('ibm') && titleLower.includes('professional')) {
        return 8;
    }
    if (providerLower.includes('oracle') && titleLower.includes('certified')) {
        return 8;
    }
    if (titleLower.includes('cissp') || titleLower.includes('cisa') || titleLower.includes('crisc') || titleLower.includes('security+')) {
        return 9;
    }
    
    // Courses from major platforms
    if (providerLower.includes('coursera') || providerLower.includes('edx') || providerLower.includes('udemy')) {
        if (titleLower.includes('advanced') || titleLower.includes('professional')) {
            return 7;
        }
        return 6;
    }
    
    // Other certifications
    if (providerLower.includes('linkedin') || providerLower.includes('skillup') || providerLower.includes('sololearn')) {
        return 5;
    }
    
    // Basic or introductory courses
    if (titleLower.includes('intro') || titleLower.includes('beginner') || titleLower.includes('fundamental')) {
        return 4;
    }
    
    return 5; // Default score
};

const certificationsData = [
  {
    provider: "AMAZON",
    title: "AWS Cloud Practitioner Essentials",
    date: "22/05/2022",
    confirmation: "",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/amazon/AWS Cloud Practitioner Essentials.jpg"
  },
  {
    provider: "AMAZON",
    title: "AWS Foundation: Securing your AWS Cloud",
    date: "31/05/2022",
    confirmation: "",
    category: "Cloud Security",
    importance_score: 7,
    image: "/images/certifications/amazon/AWS Foundation_ Securing your AWS Cloud.jpg"
  },
  {
    provider: "AMAZON",
    title: "Getting Started with AWS Security, Identity, and compliance",
    date: "31/05/2022",
    confirmation: "",
    category: "Cloud Security",
    importance_score: 7,
    image: "/images/certifications/amazon/Getting Started with AWS Security, Identity, and compliance.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "CCNAv7: Bridging",
    date: "20/05/2022",
    confirmation: "",
    category: "Networking",
    importance_score: 9,
    image: "/images/certifications/cisco/CCNAv7 Bridging.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Get Connected",
    date: "19/01/2022",
    confirmation: "",
    category: "Networking",
    importance_score: 5,
    image: "/images/certifications/cisco/CISCO Get connected.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Introduction to Cybersecurity",
    date: "19/01/2022",
    confirmation: "",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/cisco/CISCO Introduction to Cybersecurity.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Network Defense",
    date: "12/06/2025",
    confirmation: "",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/cisco/Network Defense.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Networking Devices and Initial Configuration",
    date: "27/06/2022",
    confirmation: "",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/cisco/Networking Devices and Initial Configuration.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Python Essentials 1",
    date: "08/07/2022",
    confirmation: "",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/cisco/Python Essentials 1.jpg"
  },
  {
    provider: "CISCO Networking Academy",
    title: "Linux Essentials",
    date: "20/05/2022",
    confirmation: "",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/cisco/NDG Linux Essent.jpg"
  },
  {
    provider: "COURSERA",
    title: "Business Analysis & Process Management",
    date: "23/05/2022",
    confirmation: "https://coursera.org/verify/H9LWKFJJRN2P",
    category: "Business Analysis",
    importance_score: 6,
    image: "/images/certifications/coursera/Business Analytics & Process Management_.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Google IT Support",
    date: "28/04/2023",
    confirmation: "https://coursera.org/verify/profession al-cert/Y885G6L2L62W",
    category: "IT Support",
    importance_score: 8,
    image: "/images/certifications/google/Google IT Support.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "IT Security: Defense against the digital dark arts",
    date: "18/03/2023",
    confirmation: "https://coursera.org/verify/RN67C8F5PZQP",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/google/IT Security Defense against the digital dark arts.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Operating Systems and You: Becoming a Power User",
    date: "28/04/2023",
    confirmation: "https://coursera.org/verify/JJCCCFL55A6U",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/google/Operating Systems and You Becoming a Power.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "System Administration and IT Infrastructure Services",
    date: "06/03/2023",
    confirmation: "https://coursera.org/verify/QGHMKDQ3KADU",
    category: "IT Infrastructure",
    importance_score: 7,
    image: "/images/certifications/google/System Administration and IT Infrastructure.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Technical Support Fundamentals",
    date: "26/04/2023",
    confirmation: "https://coursera.org/verify/WJWZRD4J5MTB",
    category: "IT Support",
    importance_score: 6,
    image: "/images/certifications/google/Technical Support Fundamentals.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "The Bits and Bytes of Computer Networking",
    date: "05/03/2023",
    confirmation: "https://coursera.org/verify/FTD9LAMAGVMF",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/google/The Bits and Bytes of Computer Networking.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Assets, Threats, and Vulnerabilities",
    date: "27/05/2023",
    confirmation: "https://coursera.org/verify/XE8Z5ZCSBJL5",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Assets, Threats, and Vulnerabilities.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Automate Cybersecurity Tasks with Python",
    date: "27/05/2023",
    confirmation: "https://coursera.org/verify/475GH5NT7KLQ",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Assets, Threats, and Vulnerabilities.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Connect and Protect: Networks and Network Security",
    date: "26/05/2023",
    confirmation: "https://coursera.org/verify/RJS742SWRVUY",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Connect and Protect   Networks and Network.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Foundations of Cybersecurity",
    date: "20/05/2023",
    confirmation: "https://coursera.org/verify/EPJSV937QPL5",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Foundations of Cybersecurity.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Play It Safe: Manage Security Risks",
    date: "26/05/2023",
    confirmation: "https://coursera.org/verify/98QBPUAKT583",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Play It Safe   Manage Security Risks.jpg"
  },
  {
    provider: "COURSERA & Google",
    title: "Sound the Alarm: Detection and Response",
    date: "27/05/2023",
    confirmation: "https://coursera.org/verify/SZTDPVEXA8KY",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/google/Sound the Alarm   Detection and Response.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Applied Data Science Capstone",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/WHXY2Q882Z7P",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Applied Data Science Capstone.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Data Analysis with Python",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/AE8HKKCHN3LU",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Data Analysis with Python.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Data Science Methodology",
    date: "24/05/2023",
    confirmation: "https://coursera.org/verify/SVVNDCWAR9WF",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Data Science Methodology.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Data Visualization with Python",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/ZW4TVVJQFRWP",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Data Science Methodology.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Databases and SQL for Data Science with Python",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/Q4QLEYM6XGU3",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Databases and SQL for Data Science with Python.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "IBM Data Science",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/profession al-cert/WCCF9R7MWZGW",
    category: "Data Science",
    importance_score: 9,
    image: "/images/certifications/ibm/FINAL_IBM Data Science.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Machine Learning with Python",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/G586PS6K3N3Y",
    category: "AI/ML",
    importance_score: 9,
    image: "/images/certifications/ibm/Machine Learning with Python.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Python for Data Science, AI & Development",
    date: "24/05/2023",
    confirmation: "https://coursera.org/verify/VF4DZG222PGE",
    category: "Programming",
    importance_score: 8,
    image: "/images/certifications/ibm/Python for Data Science, AI & Development.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Python Project for Data Science",
    date: "25/05/2023",
    confirmation: "https://coursera.org/verify/SFNU32GCSZPG",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Python Project for Data Science.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "Tools for Data Science",
    date: "24/05/2023",
    confirmation: "https://coursera.org/verify/F5TRRDDPLDSG",
    category: "Data Science",
    importance_score: 8,
    image: "/images/certifications/ibm/Tools for Data Science.jpg"
  },
  {
    provider: "COURSERA & IBM",
    title: "What is Data Science?",
    date: "22/05/2023",
    confirmation: "https://coursera.org/verify/CPSMT93S9GYT",
    category: "Data Science",
    importance_score: 7,
    image: "/images/certifications/ibm/What is Data Science.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Advanced Data Modeling",
    date: "03/05/2023",
    confirmation: "https://coursera.org/verify/4SUKTPL876D9",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/meta/Advanced Data Modeling.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Advanced MySQL Topics",
    date: "29/04/2023",
    confirmation: "https://coursera.org/verify/PJ89LYFTW467",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/meta/Advanced MySQL Topics.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Coding Interview Preparation",
    date: "03/05/2023",
    confirmation: "https://coursera.org/verify/KWQSX5ZHQ78B",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/meta/Coding Interview Preparation.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Database Clients",
    date: "01/05/2023",
    confirmation: "https://coursera.org/verify/N9AEDTS7Z6ED",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/meta/Database Clients.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Database Engineer Capstone",
    date: "03/05/2023",
    confirmation: "https://coursera.org/verify/FSWZJ7KA4RJ6",
    category: "Database",
    importance_score: 8,
    image: "/images/certifications/meta/Database Engineer Capstone.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Database Structures and Management with MySQL",
    date: "30/04/2023",
    confirmation: "https://coursera.org/verify/HTPQNEH2M56T",
    category: "Database",
    importance_score: 8,
    image: "/images/certifications/meta/Database Structures and Management with MySQL.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Introduction to Databases",
    date: "28/04/2023",
    confirmation: "https://coursera.org/verify/K7GQ27FLYRY6",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/meta/Introduction to Databases.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Programming in Python",
    date: "01/05/2023",
    confirmation: "https://coursera.org/verify/F6S2EL43PKEC",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/meta/Programming in Python.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Version Control",
    date: "28/04/2023",
    confirmation: "https://coursera.org/verify/HMHHLYZPTRE3",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/meta/Version Control.jpg"
  },
  {
    provider: "COURSERA & META",
    title: "Meta Database Engineer",
    date: "03/05/2023",
    confirmation: "https://coursera.org/verify/profession al-cert/Y8456QFCR6X9",
    category: "Database",
    importance_score: 9,
    image: "/images/certifications/meta/Meta Database Engineer.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Data Integration with Microsoft Azure Data",
    date: "29/05/2023",
    confirmation: "https://coursera.org/verify/42XBAVSAS9RB",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Data Integration with Microsoft Azure Data.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Data Warehousing with Microsoft Azure Synapse Analytics",
    date: "29/05/2023",
    confirmation: "https://coursera.org/verify/GKUQ9V69S37N",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Data Warehousing with Microsoft Azure Synapse.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Data Engineering with MS Azure Synapse Apache Spark Pools",
    date: "06/06/2023",
    confirmation: "https://coursera.org/verify/BKJLHANVZ8TX",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Data Engineering with MS Azure Synapse Apache.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Data Storage in Microsoft Azure",
    date: "06/06/2023",
    confirmation: "https://coursera.org/verify/Q57P5QPVB8ZN",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Data Storage in Microsoft Azure.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Introduction to Microsoft Azure Synapse Analytics",
    date: "28/05/2023",
    confirmation: "https://coursera.org/verify/QASMHWH85JN3",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Introduction to Microsoft Azure Synapse Analytics.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Microsoft Azure for Data Engineering",
    date: "28/05/2023",
    confirmation: "https://coursera.org/verify/W8QW5Z4SXKNM",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/microsoft/Microsoft Azure for Data Engineering.jpg"
  },
  {
    provider: "COURSERA & MICROSOFT",
    title: "Prepare for DP-203: Data Engineering on Microsoft Azure Exam",
    date: "06/06/2023",
    confirmation: "https://coursera.org/verify/CEJH5GVCQJCZ",
    category: "Cloud",
    importance_score: 9,
    image: "/images/certifications/microsoft/Prepare for DP 203 Data Engineering on Microsoft.jpg"
  },
  {
    provider: "COURSERA & UNIVERSITY OF MARYLAND",
    title: "Cryptography",
    date: "04/05/2023",
    confirmation: "https://coursera.org/verify/6HEVN87BVM7N",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/maryland_univ/Cryptography.jpg"
  },
  {
    provider: "COURSERA & UNIVERSITY OF MARYLAND",
    title: "Usable Security",
    date: "03/05/2023",
    confirmation: "https://coursera.org/verify/4MPAYJSPZK5Y",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/maryland_univ/Usable Security.jpg"
  },
  {
    provider: "SKILLUP",
    title: "Oracle Cloud Infrastructure Foundation Course",
    date: "15/05/2022",
    confirmation: "3454412",
    category: "Cloud",
    importance_score: 7,
    image: "/images/certifications/skillup/Oracle Cloud infrastructure Foundation Course.jpg"
  },
  {
    provider: "SKILLUP",
    title: "CISSP® - Certified Information Systems Security Professional",
    date: "04/05/2022",
    confirmation: "3429157",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/skillup/CISSP Certified Information Systems Security Professional.jpg"
  },
  {
    provider: "SKILLUP",
    title: "Advanced Search Engine Optimisation Certification Program",
    date: "29/05/2022",
    confirmation: "3487089",
    category: "Business",
    importance_score: 6,
    image: "/images/certifications/skillup/Advanced Search Engine Optimisation Certification Program.jpg"
  },
  {
    provider: "SKILLUP",
    title: "MongoDB Developer and Administrator",
    date: "28/04/2022",
    confirmation: "3415261",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/skillup/MongoDB Developer & Administrator.jpg"
  },
  {
    provider: "SKILLUP",
    title: "Advanced Social Media Certification Program",
    date: "13/05/2022",
    confirmation: "3447636",
    category: "Business",
    importance_score: 6,
    image: "/images/certifications/skillup/Advanced Social Media Certification Program.jpg"
  },
  {
    provider: "CYBRARY",
    title: "CompTIA Security+ (SY0-601)",
    date: "28/02/2023",
    confirmation: "CC-6b813ffa-d480-4d77-8c2b-b0aeeaf8dbe1",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "MITRE ATT&CK Defender™ (MAD) ATT&CK® Fundamentals Badge Training",
    date: "25/02/2023",
    confirmation: "CC-51e5148b-c2ce-43c6-8725-984c64f85ab1",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "CompTIA Network+ (N10-008)",
    date: "28/02/2023",
    confirmation: "CC-b4300626-9fcb-4bed-8492-02740c4479d0",
    category: "Networking",
    importance_score: 8,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "CRISC",
    date: "27/02/2023",
    confirmation: "CC-894183d2-7dcb-4608-80c7-0e8fcc0ca749",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Certified Information Systems Auditor (CISA)",
    date: "27/02/2023",
    confirmation: "CC-27c5cab8-ca45-4995-8654-19f1078bd668",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/cybrary/Certified Information Security Manager (CISM).jpg"
  },
  {
    provider: "CYBRARY",
    title: "End User Cyber Fundamentals",
    date: "24/02/2023",
    confirmation: "CC-f2dd38da-87e0-427f-99fe-5352610d3199",
    category: "Cybersecurity",
    importance_score: 6,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "CompTIA CASP+ (CAS-004)",
    date: "26/02/2023",
    confirmation: "CC-ff75817c-cea4-45a7-bd75-5437cffd493a",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/cybrary/cybrary_casp.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Privileged Access Management",
    date: "25/02/2023",
    confirmation: "CC-48b91d79-754f-4e43-a020-182543af2d2d",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Certified Information Systems Security Professional (CISSP)",
    date: "25/02/2023",
    confirmation: "CC-a71a5a63-4f7e-4d74-8d48-97ded30a7485",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Enterprise Security Leadership: Creating a World Class Security Operations Center (SOC)",
    date: "30/06/2022",
    confirmation: "CC-1cc2011e-6efe-4220-b45b-3f910a59f457",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/Enterprise Security Leadership Creating a World Class Security Operations Ce.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Information Security Fundamentals Career Path Intro",
    date: "23/06/2022",
    confirmation: "CC-a2a98b6e-756e-49a7-952a-3b29325bad37",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/cybrary/Information Security Fundamentals Career Path Intro.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Welcome to the Network Engineer Career Path",
    date: "23/06/2022",
    confirmation: "CC-56462dde-bfaf-4686-b4f2-282627f73bae",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/cybrary/Welcome to the Network Engineer Career Path.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Identifying Web Attacks Through Logs",
    date: "28/06/2022",
    confirmation: "CC-136783de-f1b9-4f95-803e-a357ca509b6a",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/cybrary/Identifying Web Attacks Through Logs.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Executive Vulnerability Management",
    date: "29/06/2022",
    confirmation: "CC-b15b4307-3186-4a8e-a440-b1816792c391",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/Executive Vulnerability Management.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Network Operational Management",
    date: "30/06/2022",
    confirmation: "CC-221c0fbc-f3af-49fe-a0a5-1fb0448e5034",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/cybrary/Network Operational Management.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Introduction to IT & Cybersecurity",
    date: "25/06/2022",
    confirmation: "CC-913ed861-7d4b-46e8-806d-873b94f7787e",
    category: "Cybersecurity",
    importance_score: 6,
    image: "/images/certifications/cybrary/Introduction to IT & Cybersecurity.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Cloud Governance Principles",
    date: "29/06/2022",
    confirmation: "CC-c8fa8795-73dc-4b33-b9a9-631d3cbf6dda",
    category: "Cloud",
    importance_score: 7,
    image: "/images/certifications/cybrary/Cloud Governance Principles.jpg"
  },
  {
    provider: "CYBRARY",
    title: "CISCO IT Security Makeover",
    date: "30/06/2022",
    confirmation: "CC-610a5a79-8f62-418d-873c-e6d41aa7433c",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/cybrary/CISCO IT Security Makeover.jpg"
  },
  {
    provider: "CYBRARY",
    title: "AWS Certified Solutions Architect Associate",
    date: "01/03/2023",
    confirmation: "CC-805e8189-17b4-436a-a8ff-956643202ed8",
    category: "Cloud",
    importance_score: 9,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Python for Cybersecurity Professionals",
    date: "01/03/2023",
    confirmation: "CC-f4701b4c-982f-41a5-9184-3aeefa512b04",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/1.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Offensive Penetration Testing",
    date: "28/02/2023",
    confirmation: "CC-d130bf49-7ab9-4c8e-8c54-d5b7a3f5ee55",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/Offensive Penetration Testing.jpg"
  },
  {
    provider: "CYBRARY",
    title: "AWS Certified Cloud Practitioner",
    date: "01/03/2023",
    confirmation: "CC-67a46f31-ee30-406d-b839-f3b0c8392bb0",
    category: "Cloud",
    importance_score: 8,
    image: "/images/certifications/cybrary/AWS Certified Cloud Practitioner.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Systems Security Certified Practitioner (SSCP)",
    date: "27/02/2023",
    confirmation: "CC-db4b1c0b-02ad-4ed6-bae5-98c4ed0319c0",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/Systems Security Certified Practitioner (SSCP).jpg"
  },
  {
    provider: "CYBRARY",
    title: "Learn Cisco Networking Fundamentals",
    date: "01/03/2023",
    confirmation: "CC-33d23b72-7241-4dcc-b063-c9d130a5afa8",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/cybrary/Learn Cisco Networking Fundamentals.jpg"
  },
  {
    provider: "CYBRARY",
    title: "Certified Information Security Manager (CISM)",
    date: "27/02/2023",
    confirmation: "CC-f17689fe-43f6-4248-834a-7dda44a4d7c2",
    category: "Cybersecurity",
    importance_score: 9,
    image: "/images/certifications/cybrary/Certified Information Security Manager (CISM).jpg"
  },
  {
    provider: "CYBRARY",
    title: "MITRE ATT&CK Defender™ ATT&CK® Adversary Emulation",
    date: "28/06/2022",
    confirmation: "CC-6d538650-ea57-4173-8a4c-2e4172e0103b",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/cybrary/MITRE ATT&CK Defender ATT&CK Adversary Emulation.jpg"
  },
  {
    provider: "EUROPEAN OPEN UNIVERSITY",
    title: "Next Generation Network",
    date: "21/05/2022",
    confirmation: "",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/europe_academy/Next Generation Network.jpg"
  },
  {
    provider: "EUROPEAN OPEN UNIVERSITY",
    title: "Software engineering",
    date: "22/05/2022",
    confirmation: "",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/europe_academy/Software Engineering.jpg"
  },
  {
    provider: "EUROPEAN OPEN UNIVERSITY",
    title: "Entreprise Resource planning (ERP)",
    date: "23/05/2022",
    confirmation: "",
    category: "Business",
    importance_score: 6,
    image: "/images/certifications/europe_academy/ERP.jpg"
  },
  {
    provider: "EUROPEAN OPEN UNIVERSITY",
    title: "Android Expert",
    date: "24/05/2022",
    confirmation: "",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/europe_academy/Android Expert.jpg"
  },
  {
    provider: "HP LIFE & HP FOUNDATION",
    title: "Inventory Management",
    date: "26/05/2022",
    confirmation: "90bee0da-3a5e-4c38-8f7d-b969be004afc",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/hp/Inventory management.jpg"
  },
  {
    provider: "HP LIFE & HP FOUNDATION",
    title: "IT for Business Success",
    date: "02/06/2022",
    confirmation: "666dcd89-d99c-4fd2-b934-082299793f94",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/hp/IT for Business Success.jpg"
  },
  {
    provider: "HP LIFE & HP FOUNDATION",
    title: "L'informatique au service de mon entreprise",
    date: "26/05/2022",
    confirmation: "4949c7d5-37e1-4c14-8bc3-69c21dab4a2e",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/hp/l_informatique au service de mon entreprise-hp.jpg"
  },
  {
    provider: "HP LIFE & HP FOUNDATION",
    title: "Les e-mails professionnels",
    date: "02/06/2022",
    confirmation: "e1f3fec2-b692-4971-81f8-e209caf28f81",
    category: "Business",
    importance_score: 4,
    image: "/images/certifications/hp/Les e-mails professionnels.jpg"
  },
  {
    provider: "HP LIFE & HP FOUNDATION",
    title: "Sites Web efficaces",
    date: "26/05/2022",
    confirmation: "33fd00c1-4d61-4a53-a589-5c9ac66ce3bf",
    category: "Web Development",
    importance_score: 5,
    image: "/images/certifications/hp/Site web efficace-hp.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Ethical Hacker",
    date: "12/05/2022",
    confirmation: "M5R6exFrqF",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/Ethical Hacker.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Building Web Applications using PHP & MYSQL",
    date: "12/05/2022",
    confirmation: "zhPswabYNs",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Ethical Hacker.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "React JS",
    date: "19/01/2022",
    confirmation: "7O2M8QFEJ9",
    category: "Web Development",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/React JS.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "ISTQB Foundation Level",
    date: "19/01/2022",
    confirmation: "VQhDJragjV",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/ISTQB Foundation Level.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Articulate Storyline 3",
    date: "19/01/2022",
    confirmation: "YtG8bqrcc4",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/MaharaTech/Articulate Storyline 3.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Applied Deep Learning",
    date: "19/01/2022",
    confirmation: "rT52HbzEEe",
    category: "AI/ML",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/Applied Deep Learning.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Wireless Networks Penetration Testing",
    date: "19/01/2022",
    confirmation: "4rpn0K7PB9",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/Wireless Networks Penetration Testing.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Ethical Hacking",
    date: "19/01/2022",
    confirmation: "PD5xY7xJ7Q",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/Ethical Hacking.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "JavaScript",
    date: "19/01/2022",
    confirmation: "rOfW9iNIy7",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Javascript.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Introduction to network security",
    date: "19/01/2022",
    confirmation: "YmhPPG3ds2",
    category: "Cybersecurity",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Introduction to network security.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "IoT Applications Development using MasterOfThings platform",
    date: "12/05/2022",
    confirmation: "EMOzUO0oOF",
    category: "IoT",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/IoT Applications Development using Master of Things platform.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "TypeScript Fundamentals",
    date: "12/05/2022",
    confirmation: "EfFnUHJSDS",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/TypeScript Fundamentals.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Computer Network Fundamentals",
    date: "12/05/2022",
    confirmation: "PNY1o6AWkQ",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Computer Network Fundamentals.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Intructional Design",
    date: "12/05/2022",
    confirmation: "Yz0D2LSwuG",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/MaharaTech/Instructional Design.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Introduction to Software Testing Concepts & Techniques",
    date: "11/05/2022",
    confirmation: "lYLhdqICAZ",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Introduction to Software Testing Concepts & Techniques.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Database Fundamentals",
    date: "11/05/2022",
    confirmation: "F9pVDQ5Dcr",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Database Fundamentals.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Python Programming Basics",
    date: "11/05/2022",
    confirmation: "xN4q1gSICO",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Python Programming Basics.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Learn HTML &CSS",
    date: "11/05/2022",
    confirmation: "2VMMx9BYtx",
    category: "Web Development",
    importance_score: 5,
    image: "/images/certifications/MaharaTech/Learn HTML & CSS.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "iOS Application development using Objective-C",
    date: "11/05/2022",
    confirmation: "1wlwzfbAWf",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/IOS Application development using Objective C.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "iOS Architecture Design Patterns",
    date: "11/05/2022",
    confirmation: "w9aajLLRyC",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/IOS Architecture Design Patterns.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Building Web Applications using PHP & MYSQL",
    date: "19/01/2022",
    confirmation: "zhPswabYNs",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Building Web Applications using PHP & MYSQL.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "iOS Application development using Swift",
    date: "19/01/2022",
    confirmation: "9elMIhtudT",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/IOS Application development using Swift.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Effective Test Case and Bug Report Writing Techniques",
    date: "19/01/2022",
    confirmation: "xRL86qguAV",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Effective Test Case and Bug Report Writing Techniques.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Gamification In eLearning",
    date: "19/01/2022",
    confirmation: "z7s3jypPp2",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/MaharaTech/Gamification in eLearning.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Modern JavaScript: ES6 and beyond",
    date: "19/01/2022",
    confirmation: "xelCVzSc4F",
    category: "Programming",
    importance_score: 7,
    image: "/images/certifications/MaharaTech/Modern JavaScript ES6 and beyond.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "Introduction to mongoDB",
    date: "19/01/2022",
    confirmation: "GMwY7NtlCO",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/MaharaTech/Introduction to mongoDB.jpg"
  },
  {
    provider: "INFORMATION TECHNOLOGY INSTITUTE PLATFORM",
    title: "eLearning Fundamentals",
    date: "19/01/2022",
    confirmation: "cbylxVBeUX",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/MaharaTech/eLearning Fundamentals.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Préparation la certification CCNA: 3.L'adreesage Ip(200-301)",
    date: "28/04/2022",
    confirmation: "AbQHMCXHbViE8vwTRlo7_LubS7PX",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Préparer la certification CCNA_3.L_adressage IP (200-301).jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "SQL avancé pour les data scientists",
    date: "01/03/2023",
    confirmation: "ASlYl_Ex9CCnFX0tIf8QkO0zx8-H",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/linkedin/SQL avancé pour les data scientists.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Project Management Foundations: Schedules",
    date: "24/07/2022",
    confirmation: "Ac45Lpt0fRlARKTJCaP1YIKlvsQm",
    category: "Project Management",
    importance_score: 6,
    image: "/images/certifications/linkedin/Project Management Foundations- Schedules.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Project Management Foundations: Ethics",
    date: "24/07/2022",
    confirmation: "AdFq1gRuHoKYiMmDFuRCjCGICuVg",
    category: "Project Management",
    importance_score: 6,
    image: "/images/certifications/linkedin/Project Management Foundations- Ethics.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Project Management Foundations",
    date: "24/07/2022",
    confirmation: "AbO5scnErJJYVmICLxZ8oFm7wJdC",
    category: "Project Management",
    importance_score: 6,
    image: "/images/certifications/linkedin/Project Management Foundations PMI.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Penser comme un leader",
    date: "28/02/2023",
    confirmation: "AVWqlPO7Td36VSfCUxNVjN1usDXr",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Penser comme un leader.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Oracle 19c : L'administration",
    date: "28/02/2023",
    confirmation: "Aas4FJZxbs1nZeAuwxShlcxJ3Yov",
    category: "Database",
    importance_score: 7,
    image: "/images/certifications/linkedin/Oracle 19c  L'administration.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Mener des réunions productives",
    date: "28/02/2023",
    confirmation: "ATiSVbtsilJA2KMTn_kKR4WMNetP",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Mener des réunions productives.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : Les services système",
    date: "24/02/2023",
    confirmation: "AQOrLJpzhYfHAUir05ZKQBk_wxEH",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/Linux _ Les services système.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : Les réseaux",
    date: "25/02/2023",
    confirmation: "ASYAv9C1aNPN_60PVb16Hc52u2hz",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/Linux _ Les réseaux.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : Les disques et le stockage",
    date: "24/02/2023",
    confirmation: "AfrFVZ8ye7xEyGB440ie_EdiACDZ",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/Linux _ Les disques et le stockage.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : Les commandes du terminal",
    date: "23/02/2023",
    confirmation: "Ae5ghiXWCk3jIyWw21TtqzAlBogz",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/1.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : La sécurité",
    date: "25/02/2023",
    confirmation: "AWprJxKRAM64T2u2zuEahZNj5xgt",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/1.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Linux : Installation et administration",
    date: "24/02/2023",
    confirmation: "AfayaHHGNVb0OT5JHlf1EjYf6NiD",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/1.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "L'essentiel de Wireshark",
    date: "28/04/2022",
    confirmation: "Ac0BLkKCBkSRdHW6QOD5Ul3CSNM-",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/L_essentiel de Wireshark.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "L'essentiel de la gestion du DNS",
    date: "28/04/2022",
    confirmation: "ATanBdKUrnCjJneO_W5EiOAbEqQv",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/L_essentiel de la gestion du DNS.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements du nouveau et de la\nnouvelle manager",
    date: "27/02/2023",
    confirmation: "AQhy4eOnMAoxwTzoVQIarcuuUsiI",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Les fondements du nouveau et de la nouvelle manager.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements du bilan de performance",
    date: "28/02/2023",
    confirmation: "AXTlCBhGitIIpLU4-1YlkuyIIwnJ",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Les fondements du bilan de performance.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux: les protocoles et les outils CLI",
    date: "28/04/2022",
    confirmation: "Aa7aredAFt0_MA2g6JdeAWVCOL1h",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux _ les protocoles et les outils CLI.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux: le monitoring",
    date: "28/04/2022",
    confirmation: "ASjps9dDTiS2gtEB74Gy9duuaZTt",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux - Le monitoring.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux: le dépannage",
    date: "28/04/2022",
    confirmation: "Afrl_bL_TKFRFSLwf9KHn_7BCOiu",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux _ le dépannage_.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux: le contrôle d'accès dynamique",
    date: "28/04/2022",
    confirmation: "ASUzDfF9N1_hESA_nR0cdK8JeZxW",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux _ le contrôle d_accès dynamique_.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux: la sécurité",
    date: "28/04/2022",
    confirmation: "Ac1Zw0s_Tqsjv2qhwwm_ZqVGQ5x1",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux _ la sécurité_.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements des réseaux",
    date: "15/01/2022",
    confirmation: "AQQtnNHOPJfgcZDTtS-FhXbrki0i",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements des réseaux.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Les fondements de la sécurité\ninformatique et de la cybersécurité",
    date: "26/02/2023",
    confirmation: "AbIFs59P9tpo8XUxi9ElmqTajY43",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/linkedin/Les fondements de la sécurité_informatique et de la cybersécurité.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Learning Data Analytics Part 2:\nExtending and Applying Core Knowledge",
    date: "26/02/2023",
    confirmation: "ATRdM5Xi-H0C-kMPOKSZmQu6un4A",
    category: "Data Science",
    importance_score: 7,
    image: "/images/certifications/linkedin/Learning Data Analytics Part 2- Extending and Applying Core Knowledge.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "La sécurité informatique et cybersécurité : Niveau avancé",
    date: "26/02/2023",
    confirmation: "AULSIDZEx6yGJum7t7kMbL9HLcDE",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/linkedin/La sécurité informatique et_cybersécurité _ Niveau avancé.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "La sécurité des applications web",
    date: "27/02/2023",
    confirmation: "ATxy4iI6rNm8BEGrncL44z2Cqryk",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/linkedin/La sécurité des applications web.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "La sécurité des applications et des protocoles réseau",
    date: "28/04/2022",
    confirmation: "AWlOdR2h0KpPR2Mog3rQzKZMoO-U",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/linkedin/La sécurité des applications et des protocoles réseau_.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "La gestion du temps pour les managers",
    date: "28/02/2023",
    confirmation: "AZDpqTIDlD3MhhmcTbywRNP6D3XC",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/La gestion du temps pour les managers.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Jeff Weiner – Le management compassionnel",
    date: "28/02/2023",
    confirmation: "AaJjr8rsBNlk9cOBJRJYwrKGWBsq",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Jeff Weiner – Le management compassionnel.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Intégrer les nouvelles recrues",
    date: "27/02/2023",
    confirmation: "AaB-pO5CgDswMmnHtc4-F3lU8q_Q",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Intégrer les nouvelles recrues.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Excel Statistics Essential Training: 1",
    date: "26/02/2023",
    confirmation: "AY7iOmjcKoSGC2BWoGW3n6f9gIys",
    category: "Business",
    importance_score: 6,
    image: "/images/certifications/linkedin/Excel Statistics Essential Training - 1.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Établir des objectifs pour son équipe\net ses employés / employées",
    date: "27/02/2023",
    confirmation: "Aaf_KQsCah4NlVfKq0PQCI4tnwnl",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Établir des objectifs pour son équipe et ses employés _ employées.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Diriger grâce à l'intelligence émotionnelle",
    date: "27/02/2023",
    confirmation: "AXSCFU1Uqxc_LSprg4xdXtimHn0x",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Diriger grâce à l’intelligence émotionnelle.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Diriger et travailler en équipe",
    date: "27/02/2023",
    confirmation: "AesAcRFhcOImQ1w-GF3yPyUq3HMY",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Diriger et travailler en équipe.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Devenir un manager bienveillant / une\nmanager bienveillante",
    date: "27/02/2023",
    confirmation: "AeTIfAaLWn94thngu595kJS4m6q0",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Devenir un manager bienveillant _ une manager bienveillante.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Devenir spécialiste de la sécurité IT",
    date: "27/02/2023",
    confirmation: "AUk_ujmKGcBfH7O_cqVPrww31PSo",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/linkedin/Devenir spécialiste de la sécurité IT.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Devenir manager",
    date: "28/02/2023",
    confirmation: "ATuKot4EDU_eGH_kZwWrxlCJk97X",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Devenir manager.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Devenir administrateur/ administratrice réseau",
    date: "28/04/2022",
    confirmation: "TJvKxz2WezEGj_duobOHeO-cWp5",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Devenir administrateur réseau_.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Devenir administrateur / administratrice système Linux",
    date: "25/02/2023",
    confirmation: "AaOWfv96Ou_4DU8HCNLRo5FnGax1",
    category: "Operating Systems",
    importance_score: 7,
    image: "/images/certifications/linkedin/Devenir administrateur _administratrice système Linux.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Développer son leadership de manager",
    date: "28/02/2023",
    confirmation: "AfBEtkUZxh_uANj6puFRAC5xvfPZ",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Développer son leadership de manager.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Déléguer des tâches aux membres de son équipe",
    date: "27/02/2023",
    confirmation: "ASIWMqUigJ4iHdHbTuGYgLr8I-8l",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/linkedin/Déléguer des tâches aux membres de son équipe PMI.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Découvrir l'écriture de scripts en Bash",
    date: "25/02/2023",
    confirmation: "AbRlF2gKk-BYnAXhnGtuQL5O7HBJ",
    category: "Operating Systems",
    importance_score: 6,
    image: "/images/certifications/linkedin/Découvrir l_écriture de scripts en Bash.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Découvrir le cloud computing : La sécurité",
    date: "27/02/2023",
    confirmation: "Adj3BqsWXynjypyHULJVzOVTYFAV",
    category: "Cloud",
    importance_score: 7,
    image: "/images/certifications/linkedin/Découvrir le cloud computing - La sécurité.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Découvrir la cryptographie et la\nsécurité des réseaux",
    date: "27/02/2023",
    confirmation: "AZwvnSzjrnd4-BgOgvSJ4YuLQLEA",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/linkedin/Découvrir la cryptographie et la sécurité des réseaux.jpg"
  },
  {
    provider: "LINKEDIN LEARNING",
    title: "Découvrir IPv6",
    date: "28/04/2022",
    confirmation: "AZC3V4noXY36cikBkAculmP5sc_d",
    category: "Networking",
    importance_score: 7,
    image: "/images/certifications/linkedin/Découvrir IPv6.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Successful IT Systems",
    date: "01/02/2022",
    confirmation: "TM-353-1",
    category: "IT Infrastructure",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Successful IT Systems.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Understanding language and learning",
    date: "11/05/2022",
    confirmation: "EE818-1",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/OpenLearn/Understanding language and learning.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "System Practice: Managing sustainability",
    date: "11/05/2022",
    confirmation: "T306-4",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/Systems Practice _ Managing sustainability.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Software development for entreprise systems",
    date: "11/05/2022",
    confirmation: "M885-1",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Software development for entreprise systems.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "protocols in multi-service network",
    date: "11/05/2022",
    confirmation: "T822-1",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Protocols in multi-service networks.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Introducting computing and IT",
    date: "01/02/2022",
    confirmation: "TM112-1",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/Introducing computing and IT.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "An introduction to e-commerce and distributed applications",
    date: "11/05/2022",
    confirmation: "M360-1",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/An introduction to e-commerce and distributed applications.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Network security",
    date: "11/05/2022",
    confirmation: "T823-1",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/OpenLearn/Network security.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Systems engineering : challenging complexity",
    date: "11/05/2022",
    confirmation: "T873-1",
    category: "IT Infrastructure",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Systems engineering _ Challenging complexity.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Machines minds and computers",
    date: "11/05/2022",
    confirmation: "M366-1",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Machines, minds and computers.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Systems diagramming",
    date: "11/05/2022",
    confirmation: "T552-1",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/Systems diagramming.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "IT: information",
    date: "11/05/2022",
    confirmation: "T175-8",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/IT_ information.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Digital forensics",
    date: "11/05/2022",
    confirmation: "M812-1",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/OpenLearn/Digital forensics.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Learning from major security incidents",
    date: "11/05/2022",
    confirmation: "TM255-1",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/OpenLearn/Learning from major cyber security incidents.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "IT: e-government",
    date: "11/05/2022",
    confirmation: "T175-5",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/IT_ e-government.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Key skill assessment unit: information technology",
    date: "11/05/2022",
    confirmation: "U073-1",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/Key skill assessment unit_ information technology.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Information security",
    date: "11/05/2022",
    confirmation: "M811-1",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/OpenLearn/Information security.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "IT: device to device communication",
    date: "11/05/2022",
    confirmation: "T175-1",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/IT_ device to device communication.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "The database development life cycle",
    date: "11/05/2022",
    confirmation: "M359-1",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/The database development life cycle.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Software and the law",
    date: "11/05/2022",
    confirmation: "M814-1",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/Software and the law.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "IT: technology news",
    date: "11/05/2022",
    confirmation: "T175-4",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/OpenLearn/IT_ Technology news.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Systems modelling",
    date: "11/05/2022",
    confirmation: "T553-1",
    category: "IT Infrastructure",
    importance_score: 6,
    image: "/images/certifications/OpenLearn/Systems modelling.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "IT in every life",
    date: "11/05/2022",
    confirmation: "T175-2",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/OpenLearn/IT in everyday life.jpg"
  },
  {
    provider: "THE OPEN UNIVERSITY",
    title: "Forensics science and fingerprints",
    date: "11/05/2022",
    confirmation: "S187_1",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/OpenLearn/Forensic science and fingerprints.jpg"
  },
  {
    provider: "SAYLOR ACADEMY",
    title: "C++ Programming",
    date: "05/04/2021",
    confirmation: "31006731",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/saylor/c++.jpg"
  },
  {
    provider: "SAYLOR ACADEMY",
    title: "Advanced English as a Second Language",
    date: "08/01/2023",
    confirmation: "5171634201MD",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/saylor/ESL004 Advanced English as a Second Language.jpg"
  },
  {
    provider: "SOLOLEARN",
    title: "C#",
    date: "25/05/2022",
    confirmation: "13197065-1080",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/sololearn/C Sharp.jpg"
  },
  {
    provider: "SOLOLEARN",
    title: "Ruby course",
    date: "26/05/2022",
    confirmation: "#1081-13197065",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/sololearn/Ruby.jpg"
  },
  {
    provider: "ITRONIX SOLUTIONS",
    title: "Google IT automation with python quiz",
    date: "24/05/2022",
    confirmation: "itronixsolutions.com/courses/certificate/d3a77c6ac5",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/sonic/Google IT automation with python.jpg"
  },
  {
    provider: "ITRONIX SOLUTIONS",
    title: "Advanced computer concepts",
    date: "24/05/2022",
    confirmation: "itronixsolutions.com/courses/certificate/0ddde74d0b",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/sonic/Advanced Computer Concepts.jpg"
  },
  {
    provider: "ITRONIX SOLUTIONS",
    title: "Full stack development",
    date: "25/05/2022",
    confirmation: "itronixsolutions.com/courses/certificate/fc14713d23",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/sonic/Full Stack Development.jpg"
  },
  {
    provider: "VIRTUAL CYBER LABS ACADEMY",
    title: "Masterguide to C Programming L1 (security oriented)",
    date: "22/05/2022",
    confirmation: "VCL230",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/virtual_lab/Master Guide to C Programming.jpg"
  },
  {
    provider: "VIRTUAL CYBER LABS ACADEMY",
    title: "Intrusion detection system - IDS setup",
    date: "23/05/2022",
    confirmation: "E4ES1DHR",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/virtual_lab/Intrusion Detection System IDS.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Advanced Cyber Security - Threats and Governance",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/MZMSOYCV",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/GreatLearn/Advanced Cyber Security - Threats and Governance.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Database Management System",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/KERETJGB",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/GreatLearn/Database management system.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Java Programming",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/YWEFHVPY",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/GreatLearn/Java Programming.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Network Security",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/NQMYIJBE",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/GreatLearn/Network security.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Advanced SQL",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/HTSSGSQH",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/GreatLearn/Advanced SQL.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Oracle SQL",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/IAHHPUXT",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/GreatLearn/Oracle SQL.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Matlab",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/DGIANAMZ",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/GreatLearn/Matlab.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "Firewall",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/RJABFGXZ",
    category: "Cybersecurity",
    importance_score: 6,
    image: "/images/certifications/GreatLearn/Firewall.jpg"
  },
  {
    provider: "GRAET LEARNING ACADEMY",
    title: "PHP",
    date: "mai-22",
    confirmation: "verify.mygreatlearning.com/MQBMTOAZ",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/GreatLearn/PHP.jpg"
  },
  {
    provider: "SKILLFRONT",
    title: "ISO/IEC 27001 INFORMATION SKILLFRONT SECURITY ASSOCIATE",
    date: "11/07/2022",
    confirmation: "16772870265654",
    category: "Cybersecurity",
    importance_score: 8,
    image: "/images/certifications/autres/IEC 27001 INFORMATION SKILLFRONT SECURITY ASSOCIATE.jpg"
  },
  {
    provider: "TEFL Professional Development Institute",
    title: "120-Hour Teach English as a Foreign Language (TEFL) Certificate Course",
    date: "27/06/2022",
    confirmation: "TEFL_031164",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/autres/120-Hour Teach English as a Foreign Language (TEFL) Certificate Course.jpg"
  },
  {
    provider: "UNICEF",
    title: "Emergency Preparedness and Response",
    date: "29/05/2022",
    confirmation: "",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/unicef_emergency.jpg"
  },
  {
    provider: "eAcademy",
    title: "Information Systems & Technology",
    date: "21/06/2022",
    confirmation: "",
    category: "IT Infrastructure",
    importance_score: 5,
    image: "/images/certifications/autres/Information Systems & Technology.jpg"
  },
  {
    provider: "eAcademy",
    title: "Fundamentals of 5G Technology",
    date: "12/06/2022",
    confirmation: "",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/autres/Fundamentals of 5G Technology.jpg"
  },
  {
    provider: "UNESCO",
    title: "Introduction to Climate Risk Informed Decision\nAnalysis (CRIDA)",
    date: "04/06/2022",
    confirmation: "ff39933ba275486dbaf469701990fcdd",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/unesco_climate_risk.jpg"
  },
  {
    provider: "TATA CONSULTANCY SERVICES ION",
    title: "Basics of Customer Services",
    date: "25/05/2022",
    confirmation: "71267-22259544-1016",
    category: "Business",
    importance_score: 4,
    image: "/images/certifications/autres/Basics of Customer Services.jpg"
  },
  {
    provider: "Meritorium Knowledge Academy",
    title: "Deep Learning",
    date: "29/05/2022",
    confirmation: "HJCUEO-CE007165",
    category: "AI/ML",
    importance_score: 7,
    image: "/images/certifications/autres/Deep Learning.jpg"
  },
  {
    provider: "GUJARAT TECHNOLOGICAL UNIVERSITY & LEARNVERN",
    title: "Spoken English Course",
    date: "27/05/2022",
    confirmation: "CP_19206024585964",
    category: "Other",
    importance_score: 4,
    image: "/images/certifications/autres/Spoken English Course.jpg"
  },
  {
    provider: "isea.gov.in",
    title: "ISEA Certified Cyber hygiene Practioner",
    date: "25/05/2022",
    confirmation: "CDACHYD/ISEA/CHP/109441",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/autres/ISEA Digital Certificate-1.jpg"
  },
  {
    provider: "FREE CODE CAMP",
    title: "Machine Learning with Python",
    date: "18/05/2025",
    confirmation: "https://freecodecamp.org/certification/fcc47b653b7-d74a-4856-af4d-b816f08205e2/machine-learning-with-python-v7",
    category: "AI/ML",
    importance_score: 7,
    image: "/images/certifications/FreeCodeCamp/Machine Learning with Python.jpg"
  },
  {
    provider: "Cambridge International Qualifications & Athena",
    title: "Essentials of AI Learning Frameworks & Advanced Models",
    date: "13/06/2025",
    confirmation: "https://uniathena.com/verify/certificate?certID=3525-9168-3988",
    category: "AI/ML",
    importance_score: 7,
    image: "/images/certifications/autres/Essentials of AI Learning Frameworks.jpg"
  },
  {
    provider: "Mind Luster",
    title: "Network Security",
    date: "14/06/2025",
    confirmation: "https://www.mindluster.com/student/certificate/29454af5",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/autres/Network Security.jpg"
  },
  {
    provider: "UDEMY",
    title: "Advanced Databases and SQL Querying",
    date: "20/04/2022",
    confirmation: "https://www.udemy.com/certificate/UC-f3d8f7e9-9994-4044-8a6b-56f12212cc19",
    category: "Database",
    importance_score: 6,
    image: "/images/certifications/udemy/1.jpg"
  },
  {
    provider: "UDEMY",
    title: "AP Computer Science A - Part 1",
    date: "11/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-13e2c4c3-e29a-4a11-aa17-7bdf12ee0101",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/udemy/AP Computer Science A- Part 1.jpg"
  },
  {
    provider: "UDEMY",
    title: "Artificial Intelligence in Web Design + Live Class",
    date: "09/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-c40d6a46-f957-44d1-bd99-23e9e74ee630",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/udemy/Artificial Intelligence in Web Design+ Live Class.jpg"
  },
  {
    provider: "UDEMY",
    title: "Authority Marketing Mastery 2022",
    date: "11/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-fad8a41c-9655-4e49-ae10-0585202efa93",
    category: "Business",
    importance_score: 5,
    image: "/images/certifications/udemy/Authority Marketing Mastery 2022.jpg"
  },
  {
    provider: "UDEMY",
    title: "Big Data Programming Languages & Big Data Vs Data Science",
    date: "05/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-31d6db88-5bdb-44fe-b19e-5a9d534469c0",
    category: "Data Science",
    importance_score: 6,
    image: "/images/certifications/udemy/Big Data Programming Languages & Big Data Vs Data Science.jpg"
  },
  {
    provider: "UDEMY",
    title: "C++ And Java And PHP The Big 3 Languages Complete Course",
    date: "11/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-41ba3db7-6bc8-4e06-a8ce-6ac55dcaacce",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/udemy/C++ and Java and PHP The Big 3 Langages Complete Course.jpg"
  },
  {
    provider: "UDEMY",
    title: "HTML and CSS for Beginners - Build a Website & Launch ONLINE",
    date: "30/12/2019",
    confirmation: "https://www.udemy.com/certificate/UC-IND0H1SK",
    category: "Web Development",
    importance_score: 5,
    image: "/images/certifications/udemy/HTML and CSS for Beginners - Build a Website & Launch ONLINE.jpg"
  },
  {
    provider: "UDEMY",
    title: "Cisco Router Implementation",
    date: "20/04/2022",
    confirmation: "https://www.udemy.com/certificate/UC-740d0d8f-e19b-46a9-a87d-dd90d2ce5d3t",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/udemy/CISCO Router Implementation.jpg"
  },
  {
    provider: "UDEMY",
    title: "Complete Metaverse Course: Everything about AR, VR, and NFTS",
    date: "09/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-c41756fd-5307-4d84-Bcfe-621f147809d3",
    category: "Other",
    importance_score: 5,
    image: "/images/certifications/udemy/Complete Metaverse Course_ Everything about AR, VR, and NFTs.jpg"
  },
  {
    provider: "UDEMY",
    title: "Complete Wordpress Website Developer Course",
    date: "08/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-d3efeaf5-1e48-43f7-bc2c-37b6275d371b",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/udemy/Complete Wordpress Website Developer Course.jpg"
  },
  {
    provider: "UDEMY",
    title: "Cyber Security and Ethical Hacking Masterclass | CSEH+ 2022",
    date: "17/07/2022",
    confirmation: "https://www.udemy.com/certificate/UC-284fca29-3c6b-41d7-a576-305eec2cd817",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/udemy/Cyber Security and Ethical Hacking Masterclass CSEH+2022.jpg"
  },
  {
    provider: "UDEMY",
    title: "Cyber Security Threat Intelligence Researcher Preview",
    date: "20/04/2022",
    confirmation: "https://www.udemy.com/certificate/UC-b0006754-e8a6-481b-abc9-e5c0c2cfafe3",
    category: "Cybersecurity",
    importance_score: 7,
    image: "/images/certifications/udemy/Cyber Security Threat Intelligence Researcher Preview.jpg"
  },
  {
    provider: "UDEMY",
    title: "Data Manipulation in Python: Master Python, Numpy & Pandas",
    date: "03/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-eff42536-110a-4199-b6dd-4fc483f96713",
    category: "Data Science",
    importance_score: 6,
    image: "/images/certifications/udemy/Data Manipulation in Python _ Master Python, Numpy & Pandas.jpg"
  },
  {
    provider: "UDEMY",
    title: "Frontend Development with ReactJS and Bootstrap",
    date: "05/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-8b29c58e-4183-420e-bd55-dd8fca080718",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/udemy/Frontend Développement with ReactJS and Bootstrap.jpg"
  },
  {
    provider: "UDEMY",
    title: "GitLab",
    date: "10/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-7e78e8c8-1645-4ee9-9da4-314ded769a2f",
    category: "Programming",
    importance_score: 5,
    image: "/images/certifications/udemy/GitLab.jpg"
  },
  {
    provider: "UDEMY",
    title: "Google Cloud Platform Overview for AWS Professionals",
    date: "07/01/2020",
    confirmation: "https://www.udemy.com/certificate/UC-VKBDURCA",
    category: "Cloud",
    importance_score: 6,
    image: "/images/certifications/udemy/Google Cloud Platform Overview for AWS Professionals.jpg"
  },
  {
    provider: "UDEMY",
    title: "IT Deployments - Business & Technical Support Planning",
    date: "22/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-3c011186-465c-431f-b001-a10ff855810b",
    category: "IT Support",
    importance_score: 5,
    image: "/images/certifications/udemy/IT Deployments - Business & Technical Support Planning_.jpg"
  },
  {
    provider: "UDEMY",
    title: "Legacy IT - Technical Support & Desktop Troubleshooting Tips",
    date: "22/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-e8b0f58b-7133-4671-8793-0cf976546168",
    category: "IT Support",
    importance_score: 5,
    image: "/images/certifications/udemy/Legacy IT Technical Support & Desktop Troubleshooting Tips.jpg"
  },
  {
    provider: "UDEMY",
    title: "Master HTML5 Bootstrap5 & ReactJs From Scratch",
    date: "05/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-fb483e71-6907-43dc-a5ab-68803328d5c2",
    category: "Web Development",
    importance_score: 6,
    image: "/images/certifications/udemy/Master HTML5 Bootstap5 & ReactJS From Scratch.jpg"
  },
  {
    provider: "UDEMY",
    title: "The Python Programming A-Z Definitive Diploma in 2022",
    date: "19/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-d47e00fd-498b-4fe8-9e55-5672703ab753",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/udemy/The python Programming A-Z definitive diploma in 2022.jpg"
  },
  {
    provider: "UDEMY",
    title: "Improving software development productivity",
    date: "16/05/2022",
    confirmation: "https://www.udemy.com/certificate/UC-322c900d-cfe-447a-b11b-4cf7279aeaft",
    category: "Programming",
    importance_score: 6,
    image: "/images/certifications/udemy/Improving Software Development Productivity.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Advanced Emerging Technologies, Research & Practical Application",
    date: "18/05/2022",
    confirmation: "",
    category: "Other",
    importance_score: 6,
    image: "/images/certifications/iferp/ADVANCED EMERGING TECHNOLOGIES, RESEARCH AND PRACTICAL APPLICATION.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Artificial Intelligence & Machine Learning Using Python",
    date: "10/10/2020",
    confirmation: "",
    category: "AI/ML",
    importance_score: 6,
    image: "/images/certifications/iferp/Artificial Intelligence & Machine Learning Using Python.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "COGNITIVE RADIO-WIRELESS SENSOR NETWORKS APPLICATIONS & CHALLENGES",
    date: "19/09/2020",
    confirmation: "",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/iferp/COGNITIVE RADIO-WIRELESS SENSOR NETWORKS APPLICATIONS & CHALLENGES.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Computing & Signal Processing in IOT Applications",
    date: "09/10/2020",
    confirmation: "",
    category: "IoT",
    importance_score: 6,
    image: "/images/certifications/iferp/Computing & Signal Processing in IOT Applications.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Cyber Virus that took his path with Corona Virus A Disaster Journey of Malicious Malware in the ASEAN Countries",
    date: "15/08/2020",
    confirmation: "",
    category: "Other",
    importance_score: 6,
    image: "/images/certifications/iferp/Cyber Virus that took his path with Corona Virus A Disaster Journey of Malicious Malware in the ASEAN Countries.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Evolution of Intelligent Systems",
    date: "11/05/2022",
    confirmation: "",
    category: "AI/ML",
    importance_score: 6,
    image: "/images/certifications/iferp/Evolution of Intelligent Systems.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "LEARNING PATH TO DATA SCIENCE",
    date: "26/09/202O",
    confirmation: "",
    category: "Data Science",
    importance_score: 6,
    image: "/images/certifications/iferp/LEARNING PATH TO DATA SCIENCE.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Modelling of Biomedical applications using Neural Networks in International Short Term training Program held in India",
    date: "16/09/2020",
    confirmation: "",
    category: "AI/ML",
    importance_score: 6,
    image: "/images/certifications/iferp/Modelling of Biomedical applications using Neural Networks in International Short Term training Program held in India.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Optical Wireless Communication-Challenges & Opportunities",
    date: "03/10/2020",
    confirmation: "",
    category: "Networking",
    importance_score: 6,
    image: "/images/certifications/iferp/Optical Wireless Communication-Challenges & Opportunities.jpg"
  },
  {
    provider: "Institute For Engineering Research and Publication",
    title: "Teaching and Learning in Higher and Professional Education-the challenges and opportunities",
    date: "18/04/2022",
    confirmation: "",
    category: "Other",
    importance_score: 6,
    image: "/images/certifications/iferp/Teaching and Learning in Higher and Professional Education-the challenges and opportunities.jpg"
  }
];

export { certificationsData, getProviderIcon };