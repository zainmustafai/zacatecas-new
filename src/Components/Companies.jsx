
import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Cookies from "js-cookie";
import "./Companies.css";

// Define your translations here for all languages
const texts = {
  en: {
    heading: "Companies that choose",
    subheading: "Zacatecas",
  },
  es: {
    heading: "CONOZCA A NUESTROS INVERSORES",
    subheading: "Zacatecas",
  },
  de: {
    heading: "TREFFEN SIE UNSERE INVESTOREN",
    subheading: "Zacatecas",
  },
  ja: {
    heading: "私たちの投資家に会いましょう",
    subheading: "サカテカス",
  },
  zh: {
    heading: "见见我们的投资者",
    subheading: "萨卡特卡斯",
  },
  ko: {
    heading: "투자자들을 만나보세요",
    subheading: "자카테카스",
  },
  fr: {
    heading: "RENCONTREZ NOS INVESTISSEURS",
    subheading: "Zacatecas",
  },
};



export default function Companies() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [lang, setlang] = useState(Cookies.get("language") || "en");

  // Handle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update language from cookies
  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }

    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  const { heading, subheading, } = texts[lang];





  return (
    <div
      className="strategic-border"
      style={{
        backgroundColor: "#F1F1F1",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        borderTop: "5px solid #efbcbc",
        border: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <div className="mt-3">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
            }}
            className="text-center">{heading}</h1>
          <h1 className="text-center"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >{subheading}</h1>
          <div className="Company-underline"></div>
        </div>

        {!isMobile ? (
          <MDBContainer className="py-5">
            <MDBCarousel showControls dark style={{ zIndex: "2" }} interval={2000}>
              <img src="../assets/dot1.png" alt="Top Left" className="dot1" />
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
