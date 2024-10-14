import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaServicestack,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, LocateIcon, MapPin, PlaneIcon, School, SearchCheck, ShieldCheckIcon } from "lucide-react";

const texts = {
  en: {
    phones: "Phones no.",
    services: "Services",
    getInTouch: "Get In Touch",
    mexicanRedCross: "9223005 Mexican Red Cross",
    firefighters: "9225350 Firefighters",
    statePreventivePolice: "9220180 State Preventive Police",
    roadSafetyPolice: "9245320 Road Safety Police",
    administrativeCity: "4915000 Administrative City",
    emergencies: "911 Emergencies",
    anonymousComplaint: "c Anonymous complaint",
    financeSecretary: "Finance Secretary",
    educationSecretary: "Education Secretary",
    ministryOfTourism: "Ministry of Tourism",
    healthSecretary: "Health Secretary",
    transparency: "Transparency",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© Government of the State of Zacatecas 2021 - 2027 | Site Map",
  },
  es: {
    phones: "Números de Teléfono",
    services: "Servicios",
    getInTouch: "Ponte en Contacto",
    mexicanRedCross: "9223005 Cruz Roja Mexicana",
    firefighters: "9225350 Bomberos",
    statePreventivePolice: "9220180 Policía Preventiva Estatal",
    roadSafetyPolice: "9245320 Policía de Seguridad Vial",
    administrativeCity: "4915000 Ciudad Administrativa",
    emergencies: "911 Emergencias",
    anonymousComplaint: "089 Denuncia Anónima",
    financeSecretary: "Secretaría de Finanzas",
    educationSecretary: "Secretaría de Educación",
    ministryOfTourism: "Secretaría de Turismo",
    healthSecretary: "Secretaría de Salud",
    transparency: "Transparencia",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© Gobierno del Estado de Zacatecas 2021 - 2027 | Mapa del Sitio",
  },
  de: {
    phones: "Telefonnummern",
    services: "Dienstleistungen",
    getInTouch: "Kontakt aufnehmen",
    mexicanRedCross: "9223005 Mexikanisches Rotes Kreuz",
    firefighters: "9225350 Feuerwehr",
    statePreventivePolice: "9220180 Staatliche Präventionspolizei",
    roadSafetyPolice: "9245320 Verkehrssicherheitspolizei",
    administrativeCity: "4915000 Verwaltung Stadt",
    emergencies: "911 Notfälle",
    anonymousComplaint: "089 Anonyme Beschwerde",
    financeSecretary: "Finanzsekretariat",
    educationSecretary: "Bildungssekretariat",
    ministryOfTourism: "Tourismusministerium",
    healthSecretary: "Gesundheitssekretariat",
    transparency: "Transparenz",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© Regierung des Bundesstaates Zacatecas 2021 - 2027 | Seitenübersicht",
  },
  ja: {
    phones: "電話番号",
    services: "サービス",
    getInTouch: "連絡する",
    mexicanRedCross: "9223005 メキシコ赤十字",
    firefighters: "9225350 消防士",
    statePreventivePolice: "9220180 州予防警察",
    roadSafetyPolice: "9245320 道路安全警察",
    administrativeCity: "4915000 行政都市",
    emergencies: "911 緊急事態",
    anonymousComplaint: "089 匿名の苦情",
    financeSecretary: "財務長官",
    educationSecretary: "教育長官",
    ministryOfTourism: "観光省",
    healthSecretary: "保健省",
    transparency: "透明性",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© サカテカス州政府 2021 - 2027 | サイトマップ",
  },
  zh: {
    phones: "电话号码",
    services: "服务",
    getInTouch: "取得联系",
    mexicanRedCross: "9223005 墨西哥红十字会",
    firefighters: "9225350 消防员",
    statePreventivePolice: "9220180 州预防警察",
    roadSafetyPolice: "9245320 道路安全警察",
    administrativeCity: "4915000 行政城市",
    emergencies: "911 紧急情况",
    anonymousComplaint: "089 匿名投诉",
    financeSecretary: "财政部长",
    educationSecretary: "教育部长",
    ministryOfTourism: "旅游部",
    healthSecretary: "卫生部",
    transparency: "透明度",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© 萨卡特卡斯州政府 2021 - 2027 | 网站地图",
  },
  ko: {
    phones: "전화 번호",
    services: "서비스",
    getInTouch: "연락하다",
    mexicanRedCross: "9223005 멕시코 적십자",
    firefighters: "9225350 소방관",
    statePreventivePolice: "9220180 주 예방 경찰",
    roadSafetyPolice: "9245320 도로 안전 경찰",
    administrativeCity: "4915000 행정 도시",
    emergencies: "911 비상 사태",
    anonymousComplaint: "089 익명의 불만",
    financeSecretary: "재무 장관",
    educationSecretary: "교육 장관",
    ministryOfTourism: "관광부",
    healthSecretary: "보건부",
    transparency: "투명성",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© 사카테카스 주 정부 2021 - 2027 | 사이트 맵",
  },
  fr: {
    phones: "Numéros de téléphone",
    services: "Services",
    getInTouch: "Entrer en contact",
    mexicanRedCross: "9223005 Croix-Rouge mexicaine",
    firefighters: "9225350 Pompiers",
    statePreventivePolice: "9220180 Police préventive d'État",
    roadSafetyPolice: "9245320 Police de la sécurité routière",
    administrativeCity: "4915000 Ville administrative",
    emergencies: "911 Urgences",
    anonymousComplaint: "089 Plainte anonyme",
    financeSecretary: "Secrétaire des Finances",
    educationSecretary: "Secrétaire de l'Éducation",
    ministryOfTourism: "Ministère du Tourisme",
    healthSecretary: "Secrétaire de la Santé",
    transparency: "Transparence",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Premier étage,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© Gouvernement de l'État de Zacatecas 2021 - 2027 | Plan du site",
  },
  cmn: {
    phones: "电话号码",
    services: "服务",
    getInTouch: "取得联系",
    mexicanRedCross: "9223005 墨西哥红十字会",
    firefighters: "9225350 消防员",
    statePreventivePolice: "9220180 州预防警察",
    roadSafetyPolice: "9245320 道路安全警察",
    administrativeCity: "4915000 行政城市",
    emergencies: "911 紧急情况",
    anonymousComplaint: "089 匿名投诉",
    financeSecretary: "财政部长",
    educationSecretary: "教育部长",
    ministryOfTourism: "旅游部",
    healthSecretary: "卫生部",
    transparency: "透明度",
    pgje: "PGJE",
    phone: "492 491 5000",
    email: "invest@zacatecas.gob.mx",
    address: "Circuito Cerro del Gato s/n\nEdificio B, Primer Piso,\nColonia Ciudad Administrativa\nC.P. 98160",
    footerText: "© 萨卡特卡斯州政府 2021 - 2027 | 网站地图",
  },
  // Add more languages here...
};
export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setSelectedLanguage(savedLanguage);
      }
      // console.log(selectedLanguage);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    Cookies.set("language", language, { expires: 2 });
  };

  const whatsappNumber = '+524929496676';

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };


  const iconStyle = {
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "50%",
    color: "white",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const phoneContainerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
  };

  const iconStyle1 = {
    marginRight: "10px",
    color: "#9e342d",
    fontSize: "14px",
  };

  const phoneTextStyle = {
    fontSize: "14px",
    color: "white",
  };

  const serviceTextStyle = {
    fontSize: "14px",
    margin: "0px",
    color: "white",
  };

  const centeredTextWithLines = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
    width: "100%",
  };

  const lineStyle = {
    flex: 1,
    height: "1px",
    backgroundColor: "white",
  };

  const textStyle = {
    fontSize: "14px",
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="strategic-border"
      style={{
        backgroundImage: `url(../assets/footer.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #efbcbc",
        position: "relative",
        marginTop: 120
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(-400%, -50%)",
          backgroundColor: "#9e342d",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "16px",
          padding: "3px",
        }}
      >
        <button
          style={{
            backgroundColor: "#9e342d",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
            border: "1px solid #fff",
          }}
          target="_blank"
          onClick={handleClick}
        >
          <img
            src="../assets/message.png"
            alt=""
            style={{ width: "22px", height: "auto" }}
          />
        </button>


      </div>

      <div className="col-lg-10 col-md-12">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img
              src={"../assets/logodark.png"}
              alt=""
              style={{
                width: "150px",
                height: "40px",
                margin: "auto",
                marginRight: "auto",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Link
                to="https://es-la.facebook.com/SecretariadeEconomiaZac/"
                style={iconStyle}
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link to="https://x.com/sezac_" style={iconStyle} target="_blank" >
                <i class="fa-brands fa-x-twitter"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/invest-in-zacatecas/" style={iconStyle} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link to="https://www.instagram.com/se_zac/" style={iconStyle} target="_blank">
                <FaInstagram />
              </Link>
              <Link
                to="https://www.youtube.com/user/gobiernozac"
                style={iconStyle}
                target="_blank"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div style={titleStyle}>{texts[selectedLanguage].phones}</div>
            <div
              style={{
                border: "1px solid #9e342d",
                width: "60px",
                marginBottom: "10px",
              }}
            ></div>
            <div style={phoneContainerStyle}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:9223005" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].mexicanRedCross}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:9225350" className="d-flex align-items-center"
                style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].firefighters}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:9220180" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].statePreventivePolice}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:9245320" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].roadSafetyPolice}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:4915000" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].administrativeCity}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:911" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].emergencies}
                </span>
              </a>
            </div>
            <div style={phoneContainerStyle}>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:089" className="d-flex align-items-center" style={{ "textDecoration": "none" }}>
                <FaPhone style={iconStyle1} />
                <span style={phoneTextStyle}>
                  {texts[selectedLanguage].anonymousComplaint}
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div style={titleStyle}>{texts[selectedLanguage].services}</div>
            <div
              style={{
                border: "1px solid #9e342d",
                width: "60px",
                marginBottom: "10px",
              }}
            ></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sefin.zacatecas.gob.mx/" className="text-none d-flex align-items-center">
              <ShieldCheckIcon className="mr-1 text-primary1" />
              <p style={serviceTextStyle}>
                {texts[selectedLanguage].financeSecretary}
              </p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.seduzac.gob.mx/" className="text-none d-flex">
              {/* <i class="fa-solid fa-school pe-1 fc"></i> */}
              <School className="mr-1 text-primary1" />
              <p style={serviceTextStyle}>
                {texts[selectedLanguage].educationSecretary}
              </p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.zacatecas.gob.mx/gobierno/dependencias/secturz/" className="text-none d-flex">
              {/* <i class="fa-brands fa-servicestack pe-2 fc"></i> */}
              <PlaneIcon className="mr-1 text-primary1" />

              <p style={serviceTextStyle}>
                {texts[selectedLanguage].ministryOfTourism}
              </p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.saludzac.gob.mx/home/" className="text-none d-flex">
              {/* <i class="fa-solid fa-notes-medical pe-2 fc"></i>   */}
              <HeartPulse className="mr-1 text-primary1" />
              <p style={serviceTextStyle}>
                {texts[selectedLanguage].healthSecretary}
              </p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://funcionpublica.zacatecas.gob.mx/transparencia" className="text-none d-flex">
              {/* <i class="fa-brands fa-servicestack pe-2 fc"></i> */}
              <SearchCheck className="mr-1 text-primary1" />

              <p style={serviceTextStyle}>
                {texts[selectedLanguage].transparency}
              </p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fiscaliazacatecas.gob.mx/" className="text-none d-flex">
              {/* <i class="fa-solid fa-handcuffs pe-1 fc"></i> */}
              <ArrowRight className="mr-1 text-primary1" />
              <p style={serviceTextStyle}>{texts[selectedLanguage].pgje}</p>
            </a>

          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div style={titleStyle}>{texts[selectedLanguage].getInTouch}</div>
            <div
              style={{
                border: "1px solid #9e342d",
                width: "60px",
                marginBottom: "10px",
              }}
            ></div>
            <div style={phoneContainerStyle}>
              <FaPhone style={iconStyle1} />
              <span style={phoneTextStyle}>
                {texts[selectedLanguage].phone}
              </span>
            </div>
            <div style={phoneContainerStyle}>
              <FaEnvelope style={iconStyle1} />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${texts[selectedLanguage].email}`}
                style={{
                  fontSize: "14px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {texts[selectedLanguage].email}
              </a>
            </div>
            <div style={phoneContainerStyle}>
              <MapPin
                className="mr-2 text-primary1"
                style={{
                  width: "100px",
                  height: "100px",
                }} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Circuito+Cerro+del+Gato+s%2Fn%2C+Edificio+B%2C+Primer+Piso%2C+Colonia+Ciudad+Administrativa%2C+C.P.+98160"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {texts[selectedLanguage].address}
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-9 col-md-12 col-sm-6 d-flex align-items-center justify-content-center"
          style={{ marginTop: "50px", margin: "auto" }}
        >
          <div style={centeredTextWithLines}>
            <div style={lineStyle}></div>
            <span style={textStyle}>{texts[selectedLanguage].footerText}</span>
            <div style={lineStyle}></div>
          </div>
          <div
            className="uparrow-button"
            style={{
              backgroundColor: "#9e342d",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "16px",
              marginLeft: "-50px",
              padding: "3px",
            }}
          >
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: "#9e342d",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "16px",
                border: "1px solid #fff",
              }}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
