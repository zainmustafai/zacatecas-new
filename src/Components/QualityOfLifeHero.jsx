import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './QualityOfLifeHero.css';

const texts = {
  en: {
    heading: 'QUALITY',
    subheading: 'OF LIFE',
  },
  es: {
    heading: 'CALIDAD',
    subheading: 'DE VIDA',
  },
  fr: {
    heading: 'QUALITÉ',
    subheading: 'DE LA VIE',
  },
  de: {
    heading: 'QUALITÄT',
    subheading: 'DES LEBENS',
  },
  ja: {
    heading: '生活の質',
    subheading: 'の質',
  },
  zh: {
    heading: '生活质量',
    subheading: '质量',
  },
  ko: {
    heading: '삶의 질',
    subheading: '의 질',
  },
};

export default function QualityOfLifeHero() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang, setlang] = useState(Cookies.get('language') || 'en');

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
      // console.log(lang);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, subheading } = texts[lang];

  return (
    <div className="qol_hero-border boxShadowPrimary"
      style={{
        backgroundImage: 'url(./assets/qv.jpg)'
      }}
    >
      <h3 data-aos="zoom-in" className="hero-heading">{heading}</h3>
      <h1 data-aos="fade-up" className="hero-subheading">{subheading}</h1>
    </div>
  );
}
