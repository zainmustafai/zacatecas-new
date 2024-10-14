import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
// import "./Park1Hero.css"

const texts = {
  en: {
    heading: 'Guadalupe',
    subheading: 'Industrial Area',
  },
  es: {
    heading: 'Área Industrial de Guadalupe',
    subheading: 'Bienes Raíces',
  },
  fr: {
    heading: 'Zone Industrielle de Guadalupe',
    subheading: 'Immobilier',
  },
  de: {
    heading: 'Industriegebiet Guadalupe',
    subheading: 'Immobilien',
  },
  ja: {
    heading: 'グアダルーペ工業地区',
    subheading: '不動産',
  },
  zh: {
    heading: '瓜达卢佩工业区',
    subheading: '房地产',
  },
  ko: {
    heading: '과달루페 산업 지역',
    subheading: '부동산',
  },
};

  
export default function Park1Hero() {
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
      className="blackOverlay boxShadowPrimary "
      style={{
        backgroundImage: `url(../assets/Air2.png)`,
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
        borderBottomRightRadius: '16%',
        overflow: 'hidden',
      }}
    >
      <h3 className='hero-heading'>{heading}</h3>
      <h1 className='hero-subheading'>{subheading}</h1>
    
    </div>
  );
}
