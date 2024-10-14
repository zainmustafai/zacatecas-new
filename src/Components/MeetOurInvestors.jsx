import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Cookies from 'js-cookie'

// Define your translations here for all languages
const translations = {
  en: {
    title: "MEET OUR INVESTORS",
    description:
      "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in Zacatecas.",
  },
  es: {
    title: "CONOZCA A NUESTROS INVERSORES",
    description:
      "El director de promoción y gestión de inversiones lo acompañará personalmente durante el proceso de establecimiento de su empresa y lo apoyará con todos los procedimientos y permisos en Zacatecas.",
  },
  de: {
    title: "TREFFEN SIE UNSERE INVESTOREN",
    description:
      "Der Direktor für Investitionsförderung und -management begleitet Sie persönlich durch den Prozess der Gründung Ihres Unternehmens und unterstützt Sie bei allen Verfahren und Genehmigungen in Zacatecas.",
  },
  ja: {
    title: "私たちの投資家に会いましょう",
    description:
      "投資促進および管理ディレクターは、あなたの会社を設立するプロセスを個人で同行し、ザカテカスでのすべての手続きと許可に支援します。",
  },
  zh: {
    title: "见见我们的投资者",
    description:
      "投资促进与管理主任将亲自陪同您完成公司建立过程，并为您在萨卡特卡斯的所有程序和许可提供支持。",
  },
  ko: {
    title: "투자자들을 만나보세요",
    description:
      "투자 촉진 및 관리 이사는 회사 설립 과정에서 개인적으로 동행하며, 자카테카스에서 모든 절차와 허가를 지원합니다.",
  },
  fr: {
    title: "RENCONTREZ NOS INVESTISSEURS",
    description:
      "Le directeur de la promotion et de la gestion des investissements vous accompagnera personnellement dans le processus d'établissement de votre entreprise et vous soutiendra dans toutes les procédures et autorisations à Zacatecas.",
  },
};

export default function MeetOurInvestors() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 992;
      setIsMobile(window.innerWidth < mobileWidth);
      //   console.log(isMobile)
    };
    checkIfMobile();
    const intervalId = setInterval(checkIfMobile, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [language,setlanguage] = useState(Cookies.get("language") || "en");

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
    <div
      className="strategic-border"
      style={{
        backgroundImage: `url(../assets/meet.png)`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #571517",
        borderBottom: "5px solid #efbcbc",
        marginTop:'-300px'
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3 
        data-aos="fade-in"
        style={{ fontWeight: "bold", textAlign: "center" }}>
        {translations[language].title}
        </h3>

        <div className="col-lg-8 col-md-10 col-sm-6">
          <p
            data-aos="fade-in-up"
            style={{
              fontWeight: "500",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {translations[language].description}
          </p>
        </div>

        


        {!isMobile ? (
          <MDBContainer className="py-5">
            <MDBCarousel showControls dark style={{zIndex:'2'}} interval={2000}>
            <img src="../assets/dot1.png" alt="Top Left" className="dot1"/>
              <MDBCarouselItem className="active">
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m6.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m11.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m2.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m7.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m12.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m3.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m8.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m13.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m4.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m9.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m14.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m6.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m11.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m5.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m10.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m15.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>

              <MDBCarouselItem>
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m3.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m8.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m13.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m5.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m10.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m15.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m6.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m11.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m2.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m7.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m12.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m3.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m8.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m13.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m4.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m9.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m14.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
              {/* <img src="../assets/circle1.png" alt="Top Left" className="circle1"/> */}
            </MDBCarousel> 
          </MDBContainer>
        ) : (
          <MDBContainer className="py-5">
            <MDBCarousel showControls dark interval={2000}>
              <MDBCarouselItem className="active">
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                     <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m1.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m6.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m11.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m2.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m7.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m12.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m3.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m8.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m13.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m4.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m9.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m14.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBContainer>
                  <MDBRow
                    className="text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px", backgroundColor: "#fff" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m5.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m10.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                      <div
                        style={{
                          border: "2px solid #ccc",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          borderTop: "1px solid #ccc",
                          borderRight: "0px solid #ccc",
                        }}
                      >
                        <img
                          src="../assets/m15.png"
                          alt=""
                          style={{ width: "100px", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBContainer>
        )}
      </div>
    </div>
  );
}
