import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./HeroSection.css";

const texts = {
  en: {
    why: "WHY",
    zacatecas: "ZACATECAS",
  },
  es: {
    why: "POR QUÉ",
    zacatecas: "ZACATECAS",
  },
  de: {
    why: "WARUM",
    zacatecas: "ZACATECAS",
  },
  ja: {
    why: "なぜ",
    zacatecas: "サカテカス",
  },
  zh: {
    why: "为什么",
    zacatecas: "萨卡特卡斯",
  },
  ko: {
    why: "왜",
    zacatecas: "사카테카스",
  },
  fr: {
    why: "POURQUOI",
    zacatecas: "ZACATECAS",
  },
  cmn: {
    why: "为什么",
    zacatecas: "萨卡特卡斯",
  },
  // Add more languages here...
};

export default function HeroSection() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      // console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  const { why, zacatecas } = texts[language] || texts.en;

  return (
    <div
      className="text-white invest-hero-section boxShadowPrimary d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url('../assets/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        // aspectRatio: "16 / 9",
      }}
    >
      <h3 data-aos="fade-up" className="text-center hero-heading">{why}</h3>
      <h1 data-aos="fade-up" data-aos-delay="100" className="text-center hero-subheading">{zacatecas}</h1>
    </div>

  );
}
