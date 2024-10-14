import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// Example context to manage language state
const LanguageContext = React.createContext();

const translations = {
  en: {
    title: "ZACATECAS",
    buttonText: "LEARN MORE",
    image: "../assets/pic1.png", // English image path
    imagem: "../assets/pic2.png"
  },
  es: {
    title: "ZACATECAS",
    buttonText: "SABER MÁS",
    image: "../assets/pic1es.png", // Spanish image path
    imagem: "../assets/pic2es.png"
  },
  de: {
    title: "ZACATECAS",
    buttonText: "ERFAHREN SIE MEHR",
    image: "../assets/pic1de.png", // German image path
    imagem: "../assets/pic2de.png"
  },
  ja: {
    title: "サカテカス",
    buttonText: "詳細はこちら",
    image: "../assets/pic1ja.png", // Japanese image path
    imagem: "../assets/pic2ja.png"
  },
  zh: {
    title: "萨卡特卡斯",
    buttonText: "了解更多",
    image: "../assets/pic1zh.png", // Chinese image path
    imagem: "../assets/pic2zh.png"
  },
  ko: {
    title: "사카테카스",
    buttonText: "더 알아보기",
    image: "../assets/pic1ko.png", // Korean image path
    imagem: "../assets/pic2ko.png"
  },
  zh_tw: {
    title: "薩卡特卡斯",
    buttonText: "了解更多",
    image: "../assets/pic1zh.png", // Traditional Chinese image path
    imagem: "../assets/pic2zh.png"
  },
  fr: {
    title: "ZACATECAS",
    buttonText: "EN SAVOIR PLUS",
    image: "../assets/pic1fr.png", // French image path
    imagem: "../assets/pic2fr.png"
  },
};

export default function Zacatecas() {
  const navigate = useNavigate(); // Call useNavigate here
  const [language, setLanguage] = useState(Cookies.get("language") || "en");
  const [isMobile, setIsMobile] = useState(false);

  // Handle button click
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // Navigate to the desired route
    navigate('/Invest');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 561;
      setIsMobile(window.innerWidth < mobileWidth);
    };
    checkIfMobile();
    const intervalId = setInterval(checkIfMobile, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="strategic-border"
      style={{
        backgroundImage: `url(../assets/zacatecas.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #efbcbc",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3
          data-aos="fade-in-up"

          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {translations[language].title}
        </h3>
        {isMobile ? (
          <img
            data-aos="zoom-in"
            src={translations[language].imagem} // Dynamic image path for mobile
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
          />
        ) : (
          <img
            data-aos="zoom-in"
            src={translations[language].image} // Dynamic image path for desktop
            alt=""
            style={{ width: "100%", height: "auto", marginTop: "30px", marginBottom: "30px" }}
          />
        )}
        <button
          className="buttonn d-flex align-items-center"
          style={{
            backgroundColor: "#571517",
            color: "#fff",
            marginTop: "30px",
            fontSize: "14px",
            fontWeight: "500",
            width: "150px",
            padding: "5px 10px",
            paddingRight: "5px",
            paddingLeft: "5px",
            borderRadius: "30px",
            border: "3px solid #efbcbc",
            marginBottom: "10px",
          }}
          onClick={handleClick}
        >
          <img
            src={"../assets/contactus.png"}
            alt="button icon"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          {translations[language].buttonText}
        </button>
      </div>
    </div>
  );
}

// Example provider component to wrap around your app
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
