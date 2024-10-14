import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
// import "./Park1Hero.css"

const texts = {
  en: {
    heading: 'Fresnillo II Park',
    subheading: '',
  },
  es: {
    heading: 'Parque Fresnillo II',
    subheading: '',
  },
  fr: {
    heading: 'Parc Fresnillo II',
    subheading: '',
  },
  de: {
    heading: 'Fresnillo II Park',
    subheading: '',
  },
  ja: {
    heading: 'フレスニージョIIパーク',
    subheading: '',
  },
  zh: {
    heading: '弗雷斯尼略二号公园',
    subheading: '',
  },
  ko: {
    heading: '프레스닐로 II 공원',
    subheading: '',
  },
};


  
  
export default function Park3Hero() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang,setlang] = useState(Cookies.get('language') || 'en');

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
     
    }, 1); 

    return () => clearInterval(interval); 
  }, []);

  const { heading, subheading ,paragraph,paragraph1} = texts[lang];

  return (
    <div
      className="blackOverlay"
      style={{
        backgroundImage: `url(../assets/Park3.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '77vh',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        // borderBottom: '5px solid #efbcbc',
      }}
    >
      <h3 className="hero-heading">{heading}</h3>
      <h1 className="hero-subheading">{subheading}</h1>
    
    </div>
  );
}
