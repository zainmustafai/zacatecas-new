import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Park1Area.css";

const texts = {
  en: {
    heading: "Park Master Plan",
    subheading: "Airport Industrial Park I",
    service: "Services & Features",
    h1: "Water",
    h2: "Electrical Power",
    h3: "Natural Gas",
    h4: "Fire protection system",
    h5: "Common Areas",
    h6: "Roads",
    h7: "Park Internal Regulation",
    h8: "Park Security",
    p1: "Water, sewer and water treatment facilities",
    p2: "KVA available Underground distribution",
    p3: "Natural gas underground system Natural gas available",
    p4: "Shared Fire Protection System",
    p5: "Daycare facility",
    p6: "Roads with 2 lanes in each direction",
    p7: "Regulated according to internal regulation manual",
    p8: "24 hours security Closed circuit Fully fenced Controlled main access",
  },
  es: {
    heading: "Plan Maestro del Parque",
    subheading: "Parque Industrial Aeropuerto I",
    service: "Servicios y características",
    h1: "Agua",
    h2: "Energía eléctrica",
    h3: "Gas natural",
    h4: "Sistema de protección contra incendios",
    h5: "Áreas comunes",
    h6: "Calles",
    h7: "Reglamento Interno del Parque",
    h8: "Seguridad del Parque",
    p1: "Agua, alcantarillado y plantas de tratamiento de agua",
    p2: "Sistema KVA disponible Distribución subterránea",
    p3: "Sistema subterráneo de gas natural Gas natural disponible",
    p4: "Sistema compartido de protección contra incendios",
    p5: "Instalaciones para guardería",
    p6: "Calles con 2 carriles en cada dirección",
    p7: "Regulado según el manual de reglamento interno",
    p8: "Seguridad 24 horas Circuito cerrado Totalmente cercado Acceso principal controlado",
  },
  fr: {
    heading: "Plan Directeur du Parc",
    subheading: "Parc Industriel Aéroport I",
    service: "Services et caractéristiques",
    h1: "Eau",
    h2: "Énergie électrique",
    h3: "Gaz naturel",
    h4: "Système de protection incendie",
    h5: "Espaces communs",
    h6: "Routes",
    h7: "Règlement Intérieur du Parc",
    h8: "Sécurité du Parc",
    p1: "Eau, égouts et installations de traitement de l'eau",
    p2: "Système KVA disponible Distribution souterraine",
    p3: "Système souterrain de gaz naturel Gaz naturel disponible",
    p4: "Système de protection contre les incendies partagé",
    p5: "Établissement pour garde d'enfants",
    p6: "Routes avec 2 voies dans chaque direction",
    p7: "Réglementé selon le manuel de règlement intérieur",
    p8: "Sécurité 24 heures Circuit fermé Entièrement clôturé Accès principal contrôlé",
  },
  de: {
    heading: "Masterplan des Parks",
    subheading: "Industriepark Flughafen I",
    service: "Dienstleistungen und Merkmale",
    h1: "Wasser",
    h2: "Elektrische Energie",
    h3: "Erdgas",
    h4: "Brandschutzsystem",
    h5: "Gemeinschaftsbereiche",
    h6: "Straßen",
    h7: "Internes Parkreglement",
    h8: "Parksicherheit",
    p1: "Wasser, Abwasser und Wasseraufbereitungsanlagen",
    p2: "KVA verfügbares System Unterirdische Verteilung",
    p3: "Unterirdisches Erdgas-System Erdgas verfügbar",
    p4: "Gemeinsames Brandschutzsystem",
    p5: "Kindertagesstätte",
    p6: "Straßen mit 2 Fahrspuren in jede Richtung",
    p7: "Reguliert gemäß dem internen Regelwerk",
    p8: "24 Stunden Sicherheit Geschlossener Kreis Vollständig eingezäunt Kontrollierter Haupteingang",
  },
  ja: {
    heading: "パークマスタープラン",
    subheading: "空港工業団地 I",
    service: "サービスと特徴",
    h1: "水",
    h2: "電力",
    h3: "天然ガス",
    h4: "消防システム",
    h5: "共用エリア",
    h6: "道路",
    h7: "公園内部規則",
    h8: "公園のセキュリティ",
    p1: "水、下水道および水処理施設",
    p2: "KVA 利用可能 地下配電",
    p3: "天然ガス地下システム 天然ガス利用可能",
    p4: "共有の消防システム",
    p5: "保育施設",
    p6: "各方向に2車線の道路",
    p7: "内部規則マニュアルに従って規制",
    p8: "24時間セキュリティ クローズド回路 完全に囲まれた 控制された主要アクセス",
  },
  zh: {
    heading: "园区总体规划",
    subheading: "机场工业园区 I",
    service: "服务与特点",
    h1: "水",
    h2: "电力",
    h3: "天然气",
    h4: "消防系统",
    h5: "公共区域",
    h6: "道路",
    h7: "园区内部规章",
    h8: "园区安全",
    p1: "水、排水和水处理设施",
    p2: "KVA 可用 系统地下分布",
    p3: "天然气地下系统 天然气可用",
    p4: "共享消防系统",
    p5: "日托设施",
    p6: "每个方向有2条车道的道路",
    p7: "根据内部规章手册进行管理",
    p8: "24小时安全 监控系统 完全围栏 控制主入口",
  },
  ko: {
    heading: "파크 마스터 플랜",
    subheading: "공항 산업 단지 I",
    service: "서비스 및 특징",
    h1: "수도",
    h2: "전력",
    h3: "천연 가스",
    h4: "화재 보호 시스템",
    h5: "공용 구역",
    h6: "도로",
    h7: "공원 내부 규정",
    h8: "공원 보안",
    p1: "수도, 하수도 및 물 처리 시설",
    p2: "KVA 이용 가능한 시스템 지하 배급",
    p3: "천연 가스 지하 시스템 천연 가스 이용 가능",
    p4: "공유 화재 보호 시스템",
    p5: "어린이집 시설",
    p6: "각 방향으로 2차선 도로",
    p7: "내부 규정 매뉴얼에 따라 규제됨",
    p8: "24시간 보안 폐쇄 회로 완전 울타리 통제된 주요 출입",
  }
};




export default function Park4Area() {
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

  const { heading, subheading, service,h1,h2,h3,h4,h5,h6,h7,h8,p1,p2,p3,p4,p5,p6,p7,p8,k1,k2 } = texts[lang];

  return (
    <div
      style={{
        backgroundImage: `url(../assets/Area4.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
      }}
    >

      <div className="container park2-mar">
        <div className="mt-5 d-flex justify-content-center Area1-header">
        {heading}
        </div>
        <div className="mt-5 d-flex justify-content-center Area1-Sub">
        {subheading}	{" "}
        </div>
        <div className="mt-5 d-flex justify-content-center ">
          <img src="../assets/Map4.png" alt="" />
        </div>

        <div className="mt-5 d-flex justify-content-center Map1-header">
          {service}
        </div>
        <div className="mt-5 row">
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
            <div className="mt-2 Indus-card-heading">{h1}</div>
            <div className="mt-2 Indus-card-para">{p1}</div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
            <div className="mt-2 Indus-card-heading">{h2}</div>
            <div className="mt-2 Indus-card-para">{p2}</div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
            <div className="mt-2 Indus-card-heading">{h3}</div>
            <div className="mt-2 Indus-card-para">
            {p3}
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o14.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 Indus-card-heading">{h4}</div>
            <div className="mt-2 Indus-card-para">{p4}</div>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o15.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 Indus-card-heading">{h5}</div>
            <div className="mt-2 Indus-card-para">{p5}</div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o10.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 Indus-card-heading">{h6}</div>
            <div className="mt-2 Indus-card-para">{p6}</div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o11.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 Indus-card-heading">{h7}</div>
            <div className="mt-2 Indus-card-para">
            {p7}
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o12.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 Indus-card-heading">{h8}</div>
            <div className="mt-2 Indus-card-para">{p8}</div>
          </div>
        </div>
      </div>6
   
    </div>
  );
}
