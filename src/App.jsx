import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import translations from './assets/translations'; // Import translations here

// No need to import './App.css' here, it's imported in main.jsx

function App() {
    const [currentLang, setCurrentLang] = useState(() => {
        const storedLang = localStorage.getItem('currentLang');
        return storedLang || 'en';
    });

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Effect to apply theme to HTML element and save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Effect to save current language to localStorage
    useEffect(() => {
        localStorage.setItem('currentLang', currentLang);
    }, [currentLang]);

    const switchLanguage = (lang) => {
        setCurrentLang(lang);
    };

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    const downloadCV = (lang) => {
        const cvPath = `/file/CV_${lang}.pdf`; // Path relative to public folder
        const tempLink = document.createElement('a');
        tempLink.href = cvPath;
        tempLink.download = `Djeddi_Mohamed_CV_${lang}.pdf`;
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    };

    return (
        <>
            <Header currentLang={currentLang} switchLanguage={switchLanguage} toggleTheme={toggleTheme} />
            <main>
                <Hero currentLang={currentLang} downloadCV={downloadCV} />
                <Experience currentLang={currentLang} />
                <Education currentLang={currentLang} />
                <Certifications currentLang={currentLang} />
                <Projects currentLang={currentLang} />
                <Skills currentLang={currentLang} />
                <Contact currentLang={currentLang} />
            </main>
            <Footer currentLang={currentLang} />
        </>
    );
}

export default App;