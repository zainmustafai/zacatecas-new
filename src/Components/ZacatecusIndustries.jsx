import React, { useState, useEffect, useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cookies from 'js-cookie'

// Example context to manage language state
const LanguageContext = React.createContext();

export default function ZacatecusIndustries() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 992;
      setIsMobile(window.innerWidth < mobileWidth);
    };
    checkIfMobile();
    const resizeListener = () => {
      checkIfMobile();
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const translations = {
    en: {
      title: "ZACATECAS INDUSTRIES",
      buttonText: "LEARN MORE",
    },
    es: {
      title: "INDUSTRIAS DE ZACATECAS",
      buttonText: "SABER MÁS",
    },
    de: {
      title: "ZACATECAS INDUSTRIEN",
      buttonText: "ERFAHREN SIE MEHR",
    },
    ja: {
      title: "サカテカス産業",
      buttonText: "詳細はこちら",
    },
    zh: {
      title: "萨卡特卡斯工业",
      buttonText: "了解更多",
    },
    ko: {
      title: "사카테카스 산업",
      buttonText: "더 알아보기",
    },
    zh_tw: {
      title: "薩卡特卡斯工業",
      buttonText: "了解更多",
    },
    fr: {
      title: "INDUSTRIES DE ZACATECAS",
      buttonText: "EN SAVOIR PLUS",
    },
  };

  const buttonStyle = {
    backgroundColor: "#9E342D",
    borderRadius: "5px",
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "50px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const iconStyle = {
    marginLeft: "10px",
  };

  const overlapButtonStyle = {
    backgroundColor: "rgba(180, 66, 62,0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "16px",
    position: "absolute",
    left: "35%",
    top: "45%",
    transform: "translateX(0%)",
    zIndex: "10",
  };

  const overlapButtonStyle1 = {
    backgroundColor: "rgba(180, 66, 62,0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "16px",
    position: "absolute",
    right: "35%",
    top: "45%",
    transform: "translateX(0%)",
    zIndex: "10",
  };

  const innerButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const diss = [
    {
      img1: "../assets/zi1.png",
      img2: "../assets/zzi1.png",
      size: "70px",
    },
    {
      img1: "../assets/zi2.png",
      img2: "../assets/zzi2.png",
      size: "110px",
    },
    {
      img1: "../assets/zi3.png",
      img2: "../assets/zzi3.png",
      size: "120px",
    },
  ];

  const [language, setlanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlanguage(savedLanguage);
      }
      // console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <LanguageContext.Consumer>
      {(value) => {
        // const { language } = value;

        return (
          <div
            className="row d-flex justify-content-center"
            style={{ margin: "50px 10px" }}
          >
            <div className="col-lg-10 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <h3
                data-aos="fade-in-up"
                style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}>
                {translations[language].title}
              </h3>
              <div
                className="row d-flex justify-content-center align-items-center position-relative"
                style={{ width: "100%" }}
              >
                {diss.map((dis, index) => (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration={index === 0 ? "1000" : index === 1 ? "1500" : "2000"}

                    key={index}
                    className="col-lg-4 col-md-3 col-sm-3"
                    style={{
                      backgroundImage: `url(${dis.img1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                      margin: "10px",
                      marginTop: "40px",
                      display: "flex",
                      padding: "0px",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      borderRadius: "10px",
                      backgroundColor: "#000",
                      width: "250px",
                      height: "300px",
                    }}
                  >
                    <img
                      src={dis.img2}
                      alt=""
                      style={{
                        width: `${dis.size}`,
                        height: "110px",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        marginLeft: "20px",
                        marginBottom: "20px",
                      }}
                    />
                    {/* <button style={buttonStyle}> */}
                    {/* <i className="fas fa-arrow-right" style={iconStyle}></i> */}
                    {/* </button> */}
                  </div>
                ))}
                {isMobile ? null : (
                  <div>
                    <button style={overlapButtonStyle} className="overlap-button">
                      <div style={innerButtonStyle}>
                        <img
                          src="../assets/logo1.png"
                          alt=""
                          style={{ width: "25px", height: "25px" }}
                        />
                      </div>
                    </button>
                    <button style={overlapButtonStyle1} className="overlap-button">
                      <div style={innerButtonStyle}>
                        <img
                          src="../assets/logo1.png"
                          alt=""
                          style={{ width: "25px", height: "25px" }}
                        />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .overlap-button {
                  display: none;
                }
              }
            `}</style>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
}
