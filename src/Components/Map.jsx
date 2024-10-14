import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Map.css";

const texts = {
    en: {
      heading: "Our Location",
      subhead: "Property Availability",
      checkbox: "Available Industrial Property",
    },
    es: {
      heading: "Nuestra Ubicación",
      subhead: "Disponibilidad de Propiedades",
      checkbox: "Propiedad Industrial Disponible",
    },
    fr: {
      heading: "Notre Emplacement",
      subhead: "Disponibilité des Propriétés",
      checkbox: "Propriété Industrielle Disponible",
    },
    de: {
      heading: "Unser Standort",
      subhead: "Verfügbarkeit von Immobilien",
      checkbox: "Verfügbares Industrieimmobilie",
    },
    ja: {
      heading: "私たちの場所",
      subhead: "物件の空き状況",
      checkbox: "利用可能な工業用地",
    },
    zh: {
      heading: "我们的地点",
      subhead: "物业可用性",
      checkbox: "可用工业物业",
    },
    ko: {
      heading: "우리의 위치",
      subhead: "부동산 가용성",
      checkbox: "사용 가능한 산업용 부동산",
    },
  };
  
export default function Map() {
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
      className="Map-border"
      style={{
        backgroundImage: `url('../assets/Maplocation.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "max-content",
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-center mt-5 Mp-h">{heading}</div>
        <div className="d-flex justify-content-center Mp-P">{subhead}</div>
        <div className="relative">
          <div className="d-flex justify-content-center Mp-P mb-5">
            <img src="../assets/MAP.png" alt="" />
          </div>
      
            <div class="form-check abs-checkbox">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {checkbox}
              </label>
            </div>
         
        </div>
      </div>
    </div>
  );
}
