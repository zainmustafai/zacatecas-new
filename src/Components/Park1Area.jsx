import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Park1Area.css";

const texts = {
  en: {
    heading: "GUADALUPE INDUSTRIAL AREA",
    subheading: "Industrial Park Plan",
    service: "Services & Features",
    h1: "Water",
    h2: "Electrical Power",
    h3: "Natural Gas",
    p1: "Water, sewer and water",
    p2: "KVA available",
    p3: "Natural gas underground system Natural gas available",
    k1: "Park is still under development",
    k2: "238,000 m2 / 2,561,810 sqft of land available",
  },
  es: {
    heading: "Industria en Zacatecas",
    subheading: "Bienes raíces",
    service: "Servicios y características",
    h1: "Agua",
    h2: "Energía eléctrica",
    h3: "Gas natural",
    p1: "Agua, alcantarillado y agua",
    p2: "KVA disponibles",
    p3: "Sistema de gas natural subterráneo Gas natural disponible",
    k1: "El parque aún está en desarrollo",
    k2: "238,000 m2 / 2,561,810 sqft de terreno disponible",
  },
  fr: {
    heading: "Industrie à Zacatecas",
    subheading: "Immobilier",
    service: "Services et caractéristiques",
    h1: "Eau",
    h2: "Énergie électrique",
    h3: "Gaz naturel",
    p1: "Eau, égouts et eau",
    p2: "KVA disponibles",
    p3: "Système de gaz naturel souterrain Gaz naturel disponible",
    k1: "Le parc est encore en développement",
    k2: "238 000 m2 / 2 561 810 sqft de terrain disponible",
  },
  de: {
    heading: "Industrie in Zacatecas",
    subheading: "Immobilien",
    service: "Dienstleistungen und Merkmale",
    h1: "Wasser",
    h2: "Elektrische Energie",
    h3: "Erdgas",
    p1: "Wasser, Abwasser und Wasser",
    p2: "KVA verfügbar",
    p3: "Erdgas-unterirdisches System Erdgas verfügbar",
    k1: "Der Park befindet sich noch in der Entwicklung",
    k2: "238.000 m2 / 2.561.810 sqft Land verfügbar",
  },
  ja: {
    heading: "サカテカスの産業",
    subheading: "不動産",
    service: "サービスと特徴",
    h1: "水",
    h2: "電力",
    h3: "天然ガス",
    p1: "水、下水道と水",
    p2: "KVA 利用可能",
    p3: "天然ガス地下システム 天然ガス利用可能",
    k1: "公園はまだ開発中です",
    k2: "238,000 m2 / 2,561,810 sqftの土地が利用可能",
  },
  zh: {
    heading: "萨卡特卡斯的工业",
    subheading: "房地产",
    service: "服务与特点",
    h1: "水",
    h2: "电力",
    h3: "天然气",
    p1: "水、排水和水",
    p2: "KVA 可用",
    p3: "天然气地下系统 天然气可用",
    k1: "公园仍在开发中",
    k2: "238,000 平方米 / 2,561,810 平方英尺的土地可用",
  },
  ko: {
    heading: "자카테카스 산업",
    subheading: "부동산",
    service: "서비스 및 특징",
    h1: "수도",
    h2: "전력",
    h3: "천연 가스",
    p1: "수도, 하수도 및 물",
    p2: "KVA 이용 가능",
    p3: "천연 가스 지하 시스템 천연 가스 이용 가능",
    k1: "공원이 아직 개발 중입니다",
    k2: "238,000 m2 / 2,561,810 sqft의 토지가 이용 가능",
  }
};

export default function Park1Area() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang, setlang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const { heading, subheading, service,h1,h2,h3,p1,p2,p3,k1,k2 } = texts[lang];

  return (
    <div
      style={{
        backgroundImage: `url(../assets/Area1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      <div className="d-flex justify-content-center mt-5 Area1-header">
        {heading}
      </div>
      <div className="d-flex justify-content-center mt-5 Area1-Sub">
      {subheading}{" "}
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        <img src="../assets/Map1.png" alt="" />
      </div>

      <div className="d-flex justify-content-center mt-5 Map1-header">
        {service}
      </div>

      
        <div className="row mt-5">
          <div className="col-4 col-md-4 col-sm-4 d-flex justify-content-center flex-column align-items-center h-100">
            <div
              style={{
                borderBottomRightRadius: "47%",
                padding: "5px",
                width: "90px",
                height: "90px",
                borderBottomLeftRadius: "47%",
                border: "3px solid #ccc",
                borderTop: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FAEBEB",
                  width: "100%",
                  height: "100%",
                  borderBottomRightRadius: "46%",
                  borderBottomLeftRadius: "46%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/o7.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="Indus-card-heading mt-2">{h1}</div>
            <div className="Indus-card-para mt-2">{p1}</div>
          </div>
          <div className="col-4 col-md-4 col-sm-4 d-flex justify-content-center flex-column align-items-center h-100">
            <div
              style={{
                borderBottomRightRadius: "47%",
                padding: "5px",
                width: "90px",
                height: "90px",
                borderBottomLeftRadius: "47%",
                border: "3px solid #ccc",
                borderTop: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FAEBEB",
                  width: "100%",
                  height: "100%",
                  borderBottomRightRadius: "46%",
                  borderBottomLeftRadius: "46%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/o8.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="Indus-card-heading mt-2">{h2}</div>
            <div className="Indus-card-para mt-2">{p2}</div>
          </div>
          <div className="col-4 col-md-4 col-sm-4 d-flex justify-content-center flex-column align-items-center h-100">
            <div
              style={{
                borderBottomRightRadius: "47%",
                padding: "5px",
                width: "90px",
                height: "90px",
                borderBottomLeftRadius: "47%",
                border: "3px solid #ccc",
                borderTop: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FAEBEB",
                  width: "100%",
                  height: "100%",
                  borderBottomRightRadius: "46%",
                  borderBottomLeftRadius: "46%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/o9.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="Indus-card-heading mt-2">{h3}</div>
            <div className="Indus-card-para mt-2">{p3}</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5 Map1-Para">
        {k1}
      </div>
      <div className="d-flex justify-content-center mt-2 mb-5 Map1-Para">
        {k2}
      </div>
    </div>
  );
}
