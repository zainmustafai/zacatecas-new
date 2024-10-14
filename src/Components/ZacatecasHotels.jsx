import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Cookies from 'js-cookie';

const texts = {
  en: {
    heading: "ZACATECAS HOTELS",
    description:
      "Zacatecas is a world-class tourist destination, explore its wonderful hotels",
  },
  es: {
    heading: "HOTELES EN ZACATECAS",
    description:
      "Zacatecas es un destino turístico de clase mundial, explora sus maravillosos hoteles",
  },
  de: {
    heading: "HOTELS IN ZACATECAS",
    description:
      "Zacatecas ist ein erstklassiges Touristenziel, erkunden Sie seine wunderbaren Hotels",
  },
  ja: {
    heading: "サカテカスのホテル",
    description:
      "サカテカスは世界クラスの観光地であり、その素晴らしいホテルを探索してください",
  },
  zh: {
    heading: "萨卡特卡斯酒店",
    description:
      "萨卡特卡斯是一个世界级的旅游目的地，探索其美妙的酒店",
  },
  ko: {
    heading: "자카테카스 호텔",
    description:
      "자카테카스는 세계적인 관광지로, 멋진 호텔들을 탐험해보세요",
  },
  zh_tw: {
    heading: "薩卡特卡斯酒店",
    description:
      "薩卡特卡斯是一個世界級的旅遊目的地，探索其美妙的酒店",
  },
  fr: {
    heading: "HÔTELS À ZACATECAS",
    description:
      "Zacatecas est une destination touristique de classe mondiale, explorez ses merveilleux hôtels",
  },
};

const hotelsData = {
  en: [
    { img: "../assets/h1.png", title: "Hotel  Real Zacatecas" },
    { img: "../assets/h2.png", title: "Hotel Baruk Teleférico Mina" },
    { img: "../assets/h2.png", title: "Hotel & SPA Hacienda Baruk" },
    { img: "../assets/h3.png", title: "Hotel Meson de Jobito" },
    { img: "../assets/h4.png", title: "Santa Rita Hotel del arte" },
    { img: "../assets/h5.png", title: "Hotel Emporio" },
    { img: "../assets/h6.png", title: "Hotel Casa Faroles" },
    { img: "../assets/h7.png", title: "Casa Cuarzo Hotel Boutique" },
    { img: "../assets/h8.png", title: "Hotel Hampton Inn" },
    { img: "../assets/h9.png", title: "Hotel Fiesta Inn" },
  ],
  es: [
    { img: "../assets/h1.png", title: "Hotel Quinta Real Zacatecas" },
    { img: "../assets/h2.png", title: "Hotel Baruk Teleférico Mina" },
    { img: "../assets/h2.png", title: "Hotel & SPA Hacienda Baruk" },
    { img: "../assets/h3.png", title: "Hotel Meson de Jobito" },
    { img: "../assets/h4.png", title: "Santa Rita Hotel del arte" },
    { img: "../assets/h5.png", title: "Hotel Emporio" },
    { img: "../assets/h6.png", title: "Hotel Casa Faroles" },
    { img: "../assets/h7.png", title: "Casa Cuarzo Hotel Boutique" },
    { img: "../assets/h8.png", title: "Hotel Hampton Inn" },
    { img: "../assets/h9.png", title: "Hotel Fiesta Inn" },
  ],
  de: [
    { img: "../assets/h1.png", title: "Hotel Quinta Real Zacatecas" },
    { img: "../assets/h2.png", title: "Hotel Baruk Teleférico Mina" },
    { img: "../assets/h2.png", title: "Hotel & SPA Hacienda Baruk" },
    { img: "../assets/h3.png", title: "Hotel Meson de Jobito" },
    { img: "../assets/h4.png", title: "Santa Rita Hotel del arte" },
    { img: "../assets/h5.png", title: "Hotel Emporio" },
    { img: "../assets/h6.png", title: "Hotel Casa Faroles" },
    { img: "../assets/h7.png", title: "Casa Cuarzo Hotel Boutique" },
    { img: "../assets/h8.png", title: "Hotel Hampton Inn" },
    { img: "../assets/h9.png", title: "Hotel Fiesta Inn" },
  ],
  ja: [
    { img: "../assets/h1.png", title: "ホテル・キンタ・リアル・サカテカス" },
    { img: "../assets/h2.png", title: "ホテル・バルク・テレフェリコ・ミナ" },
    { img: "../assets/h2.png", title: "ホテル＆SPAアシエンダバルク" },
    { img: "../assets/h3.png", title: "ホテル・メソン・デ・ホビト" },
    { img: "../assets/h4.png", title: "サンタ・リタ・ホテル・デル・アルテ" },
    { img: "../assets/h5.png", title: "ホテル・エンポリオ" },
    { img: "../assets/h6.png", title: "ホテル・カサ・ファロレス" },
    { img: "../assets/h7.png", title: "カサ・クアルゾ・ホテル・ブティック" },
    { img: "../assets/h8.png", title: "ホテル・ハンプトン・イン" },
    { img: "../assets/h9.png", title: "ホテル・フィエスタ・イン" },
  ],
  zh: [
    { img: "../assets/h1.png", title: "萨卡特卡斯皇家大酒店" },
    { img: "../assets/h2.png", title: "巴鲁克电车矿山酒店" },
    { img: "../assets/h2.png", title: "哈西恩达巴鲁克酒店及SPA" },
    { img: "../assets/h3.png", title: "赫若酒店" },
    { img: "../assets/h4.png", title: "圣达丽塔艺术酒店" },
    { img: "../assets/h5.png", title: "恩波里奥酒店" },
    { img: "../assets/h6.png", title: "卡萨法洛莱斯酒店" },
    { img: "../assets/h7.png", title: "瓦卡罗宾托酒店" },
    { img: "../assets/h8.png", title: "汉普顿酒店" },
    { img: "../assets/h9.png", title: "菲斯塔酒店" },
  ],
  ko: [
    { img: "../assets/h1.png", title: "호텔 퀸타 리얼 자카테카스" },
    { img: "../assets/h2.png", title: "호텔 바루크 텔레페리코 미나" },
    { img: "../assets/h2.png", title: "호텔 & SPA 하시에나다 바루크" },
    { img: "../assets/h3.png", title: "호텔 메손 데 호비토" },
    { img: "../assets/h4.png", title: "산타 리타 아르테 호텔" },
    { img: "../assets/h5.png", title: "호텔 엠포리오" },
    { img: "../assets/h6.png", title: "호텔 카사 파롤레스" },
    { img: "../assets/h7.png", title: "카사 쿠아르조 호텔 부티크" },
    { img: "../assets/h8.png", title: "햄프턴 인 호텔" },
    { img: "../assets/h9.png", title: "피에스타 인 호텔" },
  ],
  zh_tw: [
    { img: "../assets/h1.png", title: "薩卡特卡斯皇家大酒店" },
    { img: "../assets/h2.png", title: "巴魯克電車礦山酒店" },
    { img: "../assets/h2.png", title: "哈西恩達巴魯克酒店及SPA" },
    { img: "../assets/h3.png", title: "赫若酒店" },
    { img: "../assets/h4.png", title: "聖達麗塔藝術酒店" },
    { img: "../assets/h5.png", title: "恩波裡奧酒店" },
    { img: "../assets/h6.png", title: "卡薩法洛萊斯酒店" },
    { img: "../assets/h7.png", title: "瓦卡羅宾托酒店" },
    { img: "../assets/h8.png", title: "漢普頓酒店" },
    { img: "../assets/h9.png", title: "菲耶斯塔酒店" },
  ],
  fr: [
    { img: "../assets/h1.png", title: "Hôtel Quinta Real Zacatecas" },
    { img: "../assets/h2.png", title: "Hôtel Baruk Téléphérique Mina" },
    { img: "../assets/h2.png", title: "Hôtel & SPA Hacienda Baruk" },
    { img: "../assets/h3.png", title: "Hôtel Meson de Jobito" },
    { img: "../assets/h4.png", title: "Santa Rita Hôtel del arte" },
    { img: "../assets/h5.png", title: "Hôtel Emporio" },
    { img: "../assets/h6.png", title: "Hôtel Casa Faroles" },
    { img: "../assets/h7.png", title: "Casa Cuarzo Hôtel Boutique" },
    { img: "../assets/h8.png", title: "Hôtel Hampton Inn" },
    { img: "../assets/h9.png", title: "Hôtel Fiesta Inn" },
  ],
};

export default function ZacatecasHotels() {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, description } = texts[language];
  const hotels = hotelsData[language];

  return (
    <div
      data-aos="fade-in"
      className="distance-border"
      style={{
        backgroundImage: `url(../assets/distance.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
          {heading}
        </h3>

        <div className="col-lg-7 col-md-9 col-sm-6">
          <p
            style={{
              fontWeight: "500",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {description}
          </p>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginBottom: "50px", width: "100%" }}
        >
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-3 hotel-card"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                margin: "10px",
                marginTop: "40px",
                borderRadius: "300px",
                border: "3px solid #ccc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "180px",
                position: "relative", // Add relative positioning to the parent div
              }}
            >
              <img
                src={hotel.img}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginTop: "10px",
                  textAlign: "center",
                  color: "#000",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  minHeight: "60px",
                }}
              >
                {hotel.title}
              </p>

              <button
                style={{
                  backgroundColor: "rgba(180, 66, 62,0.5)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "16px",
                  position: "absolute",
                  bottom: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  style={{
                    width: "33px",
                    height: "33px",
                    borderRadius: "50%",
                    backgroundColor: "#B4423E",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: "#9e342d",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaArrowRight />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
