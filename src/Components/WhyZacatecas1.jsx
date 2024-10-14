import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const translations = {
  en: {
    title: "WHY ZACATECAS",
    subtitle: "Strategic Location in the Industrial Heart of Mexico.",
    learnMore: "Learn More",
    image: "../assets/buil2.png",
  },
  es: {
    title: "POR QUÉ ZACATECAS",
    subtitle: "Ubicación estratégica en el corazón industrial de México.",
    learnMore: "Saber más",
    image: "../assets/buil2_es.png",
  },
  de: {
    title: "WARUM ZACATECAS",
    subtitle: "Strategische Lage im industriellen Herz Mexikos.",
    learnMore: "Erfahren Sie mehr",
    image: "../assets/buil2_de.png",
  },
  ja: {
    title: "ザカテカスの魅力",
    subtitle: "メキシコ工業の中心部に戦略的位置にあります。",
    learnMore: "詳細を見る",
    image: "../assets/buil2_ja.png",
  },
  zh: {
    title: "为什么选择萨卡特卡斯",
    subtitle: "位于墨西哥工业中心的战略位置。",
    learnMore: "了解更多",
    image: "../assets/buil2_zh.png",
  },
  ko: {
    title: "왜 자카테카스를 선택해야 하는가",
    subtitle: "멕시코 산업의 중심지에 전략적으로 위치해 있습니다.",
    learnMore: "자세히 보기",
    image: "../assets/buil2_ko.png",
  },
  fr: {
    title: "POURQUOI ZACATECAS",
    subtitle: "Emplacement stratégique au cœur industriel du Mexique.",
    learnMore: "En savoir plus",
    image: "../assets/buil2_fr.png",
  },
};

const learnMoreText = "Learn More";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const WhyZacatecas1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 561;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    checkIfMobile();
    const intervalId = setInterval(checkIfMobile, 1);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second for language change

    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, learnMore, image } = translations[language];

  return (
    <div className="row d-flex justify-content-center" style={{ margin: "50px 10px", color: "#000", marginBottom: "0px" }}>
      <div className="col-lg-10 col-md-12 col-sm-6" style={{ padding: "30px", paddingBottom: "0px" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
            <h3 style={{ fontWeight: "bold" }}>
              <span style={{ borderBottom: "3px solid #efbcbc", paddingBottom: "5px" }}>{title}</span>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <p style={{ fontSize: "14px", fontWeight: "600" }}>{subtitle}</p>
            <Link to="/invest">
              
              <button
                className="buttonn d-flex align-items-center"
                style={{
                  backgroundColor: "#571517",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "5px 20px",
                  paddingRight: "5px",
                  borderRadius: "30px",
                  border: "3px solid #efbcbc",
                  marginBottom: "10px",
                }}
                onClick={handleClick}
              >
                {learnMoreText}
                <img
                  src={"../assets/contactus.png"}
                  alt="icon"
                  style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isMobile ? (
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "auto", marginTop: "50px" }}
        />
      ) : (
        <img
        src={translations[language].image}
          alt=""
          style={{ width: "100%", height: "auto", marginTop: "50px" }}
        />
      )}
    </div>
  );
};

export default WhyZacatecas1;
