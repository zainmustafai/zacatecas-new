import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'
// Language text objects
const texts = {
  en: {
    title: "STRATEGIC LOCATION",
    paragraph:
      "The geographic location has converted Zacatecas in the center of Mexico’s automotive industry and on top it is a hub for mining and mining technology.",
    neighboringStates: "Neighbouring States",
    locations: [
      { src: "../assets/Coahuila.png", title: "Coahuila" },
      { src: "../assets/Nuevo.png", title: "Nuevo León" },
      { src: "../assets/Durango.png", title: "Durango" },
      { src: "../assets/Jalisco.png", title: "Jalisco" },
      { src: "../assets/San.png", title: "San Luis Potosí" },
      { src: "../assets/Aguascalientes.png", title: "Aguascalientes" },
      { src: "../assets/Guanajuato.png", title: "Guanajuato" },
    ],
  },
  es: {
    title: "UBICACIÓN ESTRATÉGICA",
    paragraph:
      "La ubicación geográfica ha convertido a Zacatecas en el centro de la industria automotriz de México y además es un centro para la minería y tecnología minera.",
    neighboringStates: "Estados Vecinos",
    locations: [
      { src: "../assets/Coahuila.png", title: "Coahuila" },
      { src: "../assets/Nuevo.png", title: "Nuevo León" },
      { src: "../assets/Durango.png", title: "Durango" },
      { src: "../assets/Jalisco.png", title: "Jalisco" },
      { src: "../assets/San.png", title: "San Luis Potosí" },
      { src: "../assets/Aguascalientes.png", title: "Aguascalientes" },
      { src: "../assets/Guanajuato.png", title: "Guanajuato" },
    ],
  },
  de: {
    title: "STRATEGISCHE LAGE",
    paragraph:
      "Die geografische Lage hat Zacatecas zum Zentrum der Automobilindustrie Mexikos gemacht und ist zudem ein Zentrum für Bergbau und Bergbautechnologie.",
    neighboringStates: "Nachbarstaaten",
    locations: [
      { src: "../assets/Coahuila.png", title: "Coahuila" },
      { src: "../assets/Nuevo.png", title: "Nuevo León" },
      { src: "../assets/Durango.png", title: "Durango" },
      { src: "../assets/Jalisco.png", title: "Jalisco" },
      { src: "../assets/San.png", title: "San Luis Potosí" },
      { src: "../assets/Aguascalientes.png", title: "Aguascalientes" },
      { src: "../assets/Guanajuato.png", title: "Guanajuato" },
    ],
  },
  ja: {
    title: "戦略的位置",
    paragraph:
      "地理的な位置はザカテカスをメキシコの自動車産業の中心地にし、また鉱業と鉱業技術の中心地にもしています。",
    neighboringStates: "隣接州",
    locations: [
      { src: "../assets/Coahuila.png", title: "コアウイラ" },
      { src: "../assets/Nuevo.png", title: "ヌエボレオン" },
      { src: "../assets/Durango.png", title: "ドゥランゴ" },
      { src: "../assets/Jalisco.png", title: "ハリスコ" },
      { src: "../assets/San.png", title: "サンルイスポトシ" },
      { src: "../assets/Aguascalientes.png", title: "アグアスカリエンテス" },
      { src: "../assets/Guanajuato.png", title: "グアナフアト" },
    ],
  },
  zh: {
    title: "战略位置",
    paragraph:
      "地理位置使萨卡特卡斯成为墨西哥汽车工业的中心，并且是采矿和采矿技术的中心。",
    neighboringStates: "邻近州",
    locations: [
      { src: "../assets/Coahuila.png", title: "科阿韦拉" },
      { src: "../assets/Nuevo.png", title: "新莱昂" },
      { src: "../assets/Durango.png", title: "杜兰戈" },
      { src: "../assets/Jalisco.png", title: "哈利斯科" },
      { src: "../assets/San.png", title: "圣路易斯波托西" },
      { src: "../assets/Aguascalientes.png", title: "阿瓜斯卡连特斯" },
      { src: "../assets/Guanajuato.png", title: "瓜纳华托" },
    ],
  },
  ko: {
    title: "전략적 위치",
    paragraph:
      "지리적 위치로 인해 자카테카스는 멕시코의 자동차 산업의 중심지로 자리 잡고 있으며, 광업과 광업 기술의 중심지로도 자리 잡고 있습니다.",
    neighboringStates: "인접 주",
    locations: [
      { src: "../assets/Coahuila.png", title: "코아휼라" },
      { src: "../assets/Nuevo.png", title: "누에보레온" },
      { src: "../assets/Durango.png", title: "두랑고" },
      { src: "../assets/Jalisco.png", title: "할리스코" },
      { src: "../assets/San.png", title: "산루이스포토시" },
      { src: "../assets/Aguascalientes.png", title: "아과스칼리엔테스" },
      { src: "../assets/Guanajuato.png", title: "과나후아토" },
    ],
  },
  zh_CN: {
    title: "战略位置",
    paragraph:
      "地理位置使萨卡特卡斯成为墨西哥汽车工业的中心，并且是采矿和采矿技术的中心。",
    neighboringStates: "邻近州",
    locations: [
      { src: "../assets/Coahuila.png", title: "科阿韦拉" },
      { src: "../assets/Nuevo.png", title: "新莱昂" },
      { src: "../assets/Durango.png", title: "杜兰戈" },
      { src: "../assets/Jalisco.png", title: "哈利斯科" },
      { src: "../assets/San.png", title: "圣路易斯波托西" },
      { src: "../assets/Aguascalientes.png", title: "阿瓜斯卡连特斯" },
      { src: "../assets/Guanajuato.png", title: "瓜纳华托" },
    ],
  },
  zh_TW: {
    title: "戰略位置",
    paragraph:
      "地理位置使薩卡特卡斯成為墨西哥汽車工業的中心，並且是採礦和採礦技術的中心。",
    neighboringStates: "鄰近州",
    locations: [
      { src: "../assets/Coahuila.png", title: "科阿韋拉" },
      { src: "../assets/Nuevo.png", title: "新萊昂" },
      { src: "../assets/Durango.png", title: "杜蘭戈" },
      { src: "../assets/Jalisco.png", title: "哈利斯科" },
      { src: "../assets/San.png", title: "聖路易斯波托西" },
      { src: "../assets/Aguascalientes.png", title: "阿瓜斯卡連特斯" },
      { src: "../assets/Guanajuato.png", title: "瓜納華托" },
    ],
  },
  fr: {
    title: "EMPLACEMENT STRATÉGIQUE",
    paragraph:
      "L'emplacement géographique a fait de Zacatecas le centre de l'industrie automobile du Mexique et est également un centre pour l'exploitation minière et la technologie minière.",
    neighboringStates: "États voisins",
    locations: [
      { src: "../assets/Coahuila.png", title: "Coahuila" },
      { src: "../assets/Nuevo.png", title: "Nuevo León" },
      { src: "../assets/Durango.png", title: "Durango" },
      { src: "../assets/Jalisco.png", title: "Jalisco" },
      { src: "../assets/San.png", title: "San Luis Potosí" },
      { src: "../assets/Aguascalientes.png", title: "Aguascalientes" },
      { src: "../assets/Guanajuato.png", title: "Guanajuato" },
    ],
  },
};

export default function StrategicLocation() {
  // Get selected language from cookies
  const [selectedLanguage, setselectedLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setselectedLanguage(savedLanguage);
      }
      // console.log(selectedLanguage);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Retrieve text based on selected language
  const { title, paragraph, neighboringStates, locations } = texts[selectedLanguage];

  return (
    <section
      className="overflow-hidden"
    >
      <div
        data-aos="slide-up"
        data-aos-duration="700"
        className="relative strategic-border"
        style={{
          backgroundImage: `url(../assets/strategic.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          padding: "50px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          // borderBottom: "5px solid #efbcbc",
          // borderTop: "5px solid #efbcbc",
        }}
      >

        <div className="col-lg-10 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h3
            data-aos="fade-in"
            style={{ fontWeight: "bold", color: "#000" }}>{title}</h3>
          <div className="col-lg-9 col-md-12 col-sm-6">
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#000",
                textAlign: "center",
              }}
            >
              {paragraph}
            </p>
          </div>
        </div>
        <p
          data-aos="fade-in"
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#000",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {neighboringStates}
        </p>
        <div className="col-lg-10 col-md-12">
          <div className="row d-flex justify-content-center align-items-center">
            {locations.map((location, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay={index * 100}
                key={index}
                className="col-lg-3 col-md-4 col-sm-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    borderBottomRightRadius: "47%",
                    padding: "5px",
                    width: "90px",
                    height: "90px",
                    borderBottomLeftRadius: "47%",
                    border: "3px solid #efbcbc",
                    zIndex: "10",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#efbcbc",
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
                      data-aos="zoom-in"
                      src={location.src}
                      style={{ padding: "10px", width: "auto", height: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: "230px",
                    minWidth: "200px",
                    height: "100px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-50px",
                  }}
                >
                  <p
                    data-aos="fade-in"
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#000",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    {location.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
