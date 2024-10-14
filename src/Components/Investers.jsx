import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Cookies from "js-cookie";

export default function Investers() {
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

  const translations = {
    en: {
      title: "LEADERS IN MINING THANKS TO <br /> OUR INVESTORS",
      description:
        "Home to 3 international mining vehicles manufacturing and remanufacturing companies",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    es: {
      title: "LÍDERES EN MINERÍA GRACIAS <br /> A NUESTROS INVERSORES",
      description:
        "Sede de 3 empresas internacionales de fabricación y remanufacturación de vehículos mineros",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    de: {
      title: "FÜHREND IN DER BERGBAUBRANCHE DANK <br /> UNSERER INVESTOREN",
      description:
        "Heimat von 3 internationalen Unternehmen für die Herstellung und Remanufacturierung von Bergbaufahrzeugen",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    ja: {
      title: "私たちの投資家のおかげで鉱業のリーダー",
      description: "国際鉱業車両製造および再製造企業の拠点",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    "zh-CN": {
      title: "由于我们的投资者，我们成为了采矿业的领导者",
      description: "拥有3家国际采矿车辆制造和再制造公司",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    ko: {
      title: "투자자들의 덕분에 광업의 선도자",
      description: "국제 광업 차량 제조 및 재제조 기업의 본거지",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    zh: {
      title: "因为我们的投资者，我们成为了矿业的领导者",
      description: "拥有3家国际矿业车辆制造和再制造公司",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
    fr: {
      title:
        "LEADERS DANS L'INDUSTRIE MINIÈRE GRÂCE À <br /> NOS INVESTISSEURS",
      description:
        "Accueil de 3 entreprises internationales de fabrication et de remanufacturation de véhicules miniers",
      images: [
        ["i1.png", "i6.png"],
        ["i2.png", "i7.png"],
        ["i3.png", "i8.png"],
        ["i4.png", "i9.png"],
        ["i5.png", "i10.png"],
      ],
    },
  };

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ margin: "50px 10px" }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3
          data-aos="fade-up"
          style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: translations[language].title }}
        />
        <p
          data-aos="slide-up"
          style={{
            fontWeight: "500",
            fontSize: "14px",
            color: "#000",
            textAlign: "center",
            margin: "0px",
          }}
        >
          {translations[language].description}
        </p>

        {!isMobile ? (
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
                      width: "100%",
                    }}
                  >
                    <MDBCol
                      lg="2"
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/i1.png"
                          alt=""
                          style={{ width: "60%", height: "auto" }}
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
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/i7.png"
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
                          src="../assets/i1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/m13.png"
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
                          src="../assets/i7.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/i1.png"
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
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/i7.png"
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
                          src="../assets/i1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/m13.png"
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
                        }}
                      >
                        <img
                          src="../assets/i7.png"
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
                      style={{ padding: "0px" }}
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
                          src="../assets/i1.png"
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
                      style={{ padding: "0px" }}
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
                          src="../assets/i7.png"
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
                          src="../assets/i1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/m13.png"
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
                          src="../assets/i7.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px" }}
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
                          src="../assets/i1.png"
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
                      style={{ padding: "0px" }}
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
                          src="../assets/i7.png"
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
                          src="../assets/i1.png"
                          alt=""
                          style={{ width: "80%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol
                      lg="2"
                      className="mb-md-0"
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/m13.png"
                          alt=""
                          style={{ width: "65%", height: "auto" }}
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
                        }}
                      >
                        <img
                          src="../assets/i7.png"
                          alt=""
                          style={{ width: "65%", height: "auto" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBContainer>
        ) : (
          <MDBContainer className="py-5">
            <MDBCarousel showControls interval={2000}>
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
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/i1.png"
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
                        }}
                      >
                        <img
                          src="../assets/i6.png"
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
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/i2.png"
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
                        }}
                      >
                        <img
                          src="../assets/i7.png"
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
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/i3.png"
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
                        }}
                      >
                        <img
                          src="../assets/i8.png"
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
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/i4.png"
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
                        }}
                      >
                        <img
                          src="../assets/i9.png"
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
                      className=" mb-md-0"
                      style={{ padding: "0px" }}
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
                        }}
                      >
                        <img
                          src="../assets/i5.png"
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
                        }}
                      >
                        <img
                          src="../assets/i10.png"
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

        <video
          data-aos="zoom-in"
          src="../assets/hero.mp4" // Replace this with the correct path to your video
          controls
          style={{ border: "10px solid #efbcbc", width: "80%", height: "auto" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
