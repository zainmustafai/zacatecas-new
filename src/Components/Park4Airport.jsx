import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Park4Airport.css";

const texts = {
    en: {
      heading: "Our Location",
      subhead: "Park is under development",
      checkbox: "180 hectares of land available",
    },
    es: {
      heading: "Nuestra Ubicación",
      subhead: "El parque está en desarrollo",
      checkbox: "180 hectáreas de terreno disponibles",
    },
    fr: {
      heading: "Notre Emplacement",
      subhead: "Le parc est en développement",
      checkbox: "180 hectares de terrain disponibles",
    },
    de: {
      heading: "Unser Standort",
      subhead: "Der Park ist noch in Entwicklung",
      checkbox: "180 Hektar Land verfügbar",
    },
    ja: {
      heading: "私たちの場所",
      subhead: "公園は開発中です",
      checkbox: "180ヘクタールの土地が利用可能",
    },
    zh: {
      heading: "我们的地点",
      subhead: "公园正在开发中",
      checkbox: "180公顷土地可用",
    },
    ko: {
      heading: "우리의 위치",
      subhead: "공원은 개발 중입니다",
      checkbox: "180헥타르의 토지가 이용 가능합니다",
    },
  };
  
export default function Park4Airport() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang, setlang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, subhead,checkbox } = texts[lang];

  return (
    <div
      className="Air-border"
      style={{
        backgroundImage: `url('../assets/Airport4.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "black",
        borderBottom: "5px solid #EFBCBC", // Added border-bottom property
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center mt-5 Ap-h">{heading}</div>
        <div className="d-flex justify-content-center A-P">{subhead}</div>
        <div className="d-flex justify-content-center A-P1">{checkbox}</div>
        <div className="d-flex justify-content-center  mb-5">
            <img src="../assets/Airpotmini.png" alt="" />
          </div>

      </div>
    </div>
  );
}
