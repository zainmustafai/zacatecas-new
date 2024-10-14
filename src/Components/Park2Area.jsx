import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Park1Area.css";

const texts = {
  en: {
    heading: "Industrial Park Osiris",
    subheading: "Industrial Park Plan",
    service: "Services & Features",
    h1: "Water",
    h2: "Electrical Power",
    h3: "Natural Gas",
    h4: "Roads",
    h5: "Park Internal Regulation",
    h6: "Regulation",
    h7: "Park Security",
    h8: "Telecommunications",
    p1: "Water, sewer and water treatment facilities",
    p2: "KVA available Underground distribution",
    p3: "Natural gas underground system Natural gas available",
    p4: "Roads with 2 lanes in each direction",
    p5: "Regulated according to internal regulation manual",
    p6: "24 hours security Closed circuit Fully fenced Controlled main access",
    p7: "Analog & digital services Fully equipped with fiber optic internet",
    k1: "Park is still under development",
    k2: "238,000 m2 / 2,561,810 sqft of land available",
  },
  es: {
    heading: "Parque Industrial Osiris",
    subheading: "Plan del Parque Industrial",
    service: "Servicios y características",
    h1: "Agua",
    h2: "Energía eléctrica",
    h3: "Gas natural",
    h4: "Calles",
    h5: "Reglamento Interno del Parque",
    h6: "Reglamento",
    h7: "Seguridad del Parque",
    h8: "Telecomunicaciones",
    p1: "Agua, alcantarillado y plantas de tratamiento de agua",
    p2: "Sistema KVA disponible Distribución subterránea",
    p3: "Sistema subterráneo de gas natural Gas natural disponible",
    p4: "Calles con 2 carriles en cada dirección",
    p5: "Regulado según el manual de reglamento interno",
    p6: "Seguridad 24 horas Circuito cerrado Totalmente cercado Acceso principal controlado",
    p7: "Servicios analógicos y digitales Totalmente equipado con internet de fibra óptica",
    k1: "El parque aún está en desarrollo",
    k2: "238,000 m2 / 2,561,810 sqft de terreno disponible",
  },
  fr: {
    heading: "Parc Industriel Osiris",
    subheading: "Plan du Parc Industriel",
    service: "Services et caractéristiques",
    h1: "Eau",
    h2: "Énergie électrique",
    h3: "Gaz naturel",
    h4: "Routes",
    h5: "Règlement Intérieur du Parc",
    h6: "Règlement",
    h7: "Sécurité du Parc",
    h8: "Télécommunications",
    p1: "Eau, égouts et installations de traitement de l'eau",
    p2: "Système KVA disponible Distribution souterraine",
    p3: "Système souterrain de gaz naturel Gaz naturel disponible",
    p4: "Routes avec 2 voies dans chaque direction",
    p5: "Réglementé selon le manuel de règlement intérieur",
    p6: "Sécurité 24 heures Circuit fermé Entièrement clôturé Accès principal contrôlé",
    p7: "Services analogiques et numériques Entièrement équipé avec internet en fibre optique",
    k1: "Le parc est encore en développement",
    k2: "238 000 m2 / 2 561 810 sqft de terrain disponible",
  },
  de: {
    heading: "Industriepark Osiris",
    subheading: "Industriepark-Plan",
    service: "Dienstleistungen und Merkmale",
    h1: "Wasser",
    h2: "Elektrische Energie",
    h3: "Erdgas",
    h4: "Straßen",
    h5: "Internes Parkreglement",
    h6: "Regelung",
    h7: "Parksicherheit",
    h8: "Telekommunikation",
    p1: "Wasser, Abwasser und Wasseraufbereitungsanlagen",
    p2: "KVA verfügbares System Unterirdische Verteilung",
    p3: "Unterirdisches Erdgas-System Erdgas verfügbar",
    p4: "Straßen mit 2 Fahrspuren in jede Richtung",
    p5: "Reguliert gemäß dem internen Regelwerk",
    p6: "24 Stunden Sicherheit Geschlossener Kreis Vollständig eingezäunt Kontrollierter Haupteingang",
    p7: "Analoge und digitale Dienste Vollständig ausgestattet mit Glasfaserinternet",
    k1: "Der Park befindet sich noch in der Entwicklung",
    k2: "238.000 m2 / 2.561.810 sqft Land verfügbar",
  },
  ja: {
    heading: "オシリス工業団地",
    subheading: "工業団地プラン",
    service: "サービスと特徴",
    h1: "水",
    h2: "電力",
    h3: "天然ガス",
    h4: "道路",
    h5: "公園内部規則",
    h6: "規則",
    h7: "公園のセキュリティ",
    h8: "通信",
    p1: "水、下水道および水処理施設",
    p2: "KVA 利用可能 地下配電",
    p3: "天然ガス地下システム 天然ガス利用可能",
    p4: "各方向に2車線の道路",
    p5: "内部規則マニュアルに従って規制",
    p6: "24時間セキュリティ クローズド回路 完全に囲まれた 控制された主要アクセス",
    p7: "アナログ＆デジタルサービス 光ファイバーインターネット完備",
    k1: "公園はまだ開発中です",
    k2: "238,000 m2 / 2,561,810 sqft の土地が利用可能",
  },
  zh: {
    heading: "奥西里斯工业园区",
    subheading: "工业园区规划",
    service: "服务与特点",
    h1: "水",
    h2: "电力",
    h3: "天然气",
    h4: "道路",
    h5: "园区内部规章",
    h6: "规章",
    h7: "园区安全",
    h8: "电信",
    p1: "水、排水和水处理设施",
    p2: "KVA 可用 系统地下分布",
    p3: "天然气地下系统 天然气可用",
    p4: "每个方向有2条车道的道路",
    p5: "根据内部规章手册进行管理",
    p6: "24小时安全 监控系统 完全围栏 控制主入口",
    p7: "模拟和数字服务 完备的光纤互联网",
    k1: "公园仍在开发中",
    k2: "238,000 平方米 / 2,561,810 平方英尺的土地可用",
  },
  ko: {
    heading: "오시리스 산업 단지",
    subheading: "산업 단지 계획",
    service: "서비스 및 특징",
    h1: "수도",
    h2: "전력",
    h3: "천연 가스",
    h4: "도로",
    h5: "공원 내부 규정",
    h6: "규정",
    h7: "공원 보안",
    h8: "통신",
    p1: "수도, 하수도 및 물 처리 시설",
    p2: "KVA 이용 가능한 시스템 지하 배급",
    p3: "천연 가스 지하 시스템 천연 가스 이용 가능",
    p4: "각 방향으로 2차선 도로",
    p5: "내부 규정 매뉴얼에 따라 규제됨",
    p6: "24시간 보안 폐쇄 회로 완전 울타리 통제된 주요 출입",
    p7: "아날로그 및 디지털 서비스 완비된 광섬유 인터넷",
    k1: "공원이 아직 개발 중입니다",
    k2: "238,000 m2 / 2,561,810 sqft의 토지가 이용 가능",
  }
};



export default function Park2Area() {
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

  const { heading, subheading, service,h1,h2,h3,h4,h5,h6,h7,h8,p1,p2,p3,p4,p5,p6,p7,k1,k2 } = texts[lang];

  return (
    <div
      style={{
        backgroundImage: `url(../assets/Area2.png)`,
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

      <div className="container park2-mar">
        <div className="d-flex justify-content-center mt-5 Area1-header">
        {heading}
        </div>
        <div className="d-flex justify-content-center mt-5 Area1-Sub">
        {subheading}	{" "}
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <img src="../assets/Map2.png" alt="" />
        </div>

        <div className="d-flex justify-content-center mt-5 Map1-header">
          {service}
        </div>
        <div className="row mt-5">
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
            <div className="Indus-card-heading mt-2">{h1}</div>
            <div className="Indus-card-para mt-2">{p1}</div>
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
            <div className="Indus-card-heading mt-2">{h2}</div>
            <div className="Indus-card-para mt-2">{p2}</div>
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
            <div className="Indus-card-heading mt-2">{h3}</div>
            <div className="Indus-card-para mt-2">
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
            <div className="Indus-card-heading mt-2">{h4}</div>
            <div className="Indus-card-para mt-2">{p4}</div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6 col-md-4 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
            <div className="Indus-card-heading mt-2">{h5} <br />{h6}</div>
            <div className="Indus-card-para mt-2">{p5}</div>
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
            <div className="Indus-card-heading mt-2">{h7}</div>
            <div className="Indus-card-para mt-2">{p6}</div>
          </div>
          <div className="col-6 col-md-4 col-sm-6 d-flex justify-content-center flex-column align-items-center h-100">
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
                  src="../assets/o13.png"
                  style={{
                    padding: "10px",
                    width: "auto",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="Indus-card-heading mt-2">{h8}</div>
            <div className="Indus-card-para mt-2">
            {p7}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center mt-5 Map1-Para">
        Park is still under development
      </div>
      <div className="d-flex justify-content-center mt-2 mb-5 Map1-Para">
        238,000 m2 / 2,561,810 sqft of land available
      </div> */}
    </div>
  );
}
