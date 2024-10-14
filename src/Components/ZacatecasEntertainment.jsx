import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const translations = {
  en: {
    heading: "ZACATECAS ENTERTAINMENT",
    description: "The following places are recommended:",
  },
  es: {
    heading: "ENTRETENIMIENTO EN ZACATECAS",
    description: "Se recomiendan los siguientes lugares:",
  },
  de: {
    heading: "UNTERHALTUNG IN ZACATECAS",
    description: "Folgende Orte werden empfohlen:",
  },
  ja: {
    heading: "サカテカスのエンターテイメント",
    description: "以下の場所がおすすめです：",
  },
  zh: {
    heading: "萨卡特卡斯的娱乐活动",
    description: "推荐以下地方：",
  },
  ko: {
    heading: "자카테카스의 엔터테인먼트",
    description: "다음 장소를 추천합니다:",
  },
  zh_tw: {
    heading: "薩卡特卡斯的娛樂活動",
    description: "推薦以下地方：",
  },
  fr: {
    heading: "DIVERTISSEMENT À ZACATECAS",
    description: "Les endroits suivants sont recommandés :",
  },
};

const dissTranslations = {
  en: [
    { title: "Galerías Zacatecas Mall", subtitle: "Shopping Mall" },
    { title: "El Edén tourist mine", subtitle: "Tourist Mine" },
    { title: "La Bufa Hill", subtitle: "Scenic Hill" },
    { title: "Coronel Museum", subtitle: "Local Museum" },
    { title: "Manuel Felguerez Art Museum", subtitle: "Art Museum" },
    { title: "Zacatecano Museum", subtitle: "Local Museum" },
    { title: "Playmo Historia Museum", subtitle: "Historical Museum" },
    { title: "Zig Zag Interactive Museum", subtitle: "Interactive Museum" },
    { title: "Tierra Adentro Vineyard", subtitle: "Vineyard" },
    { title: "La Quemada Archaeological", subtitle: "Archaeological Site" },
    { title: "La Encantada Park", subtitle: "Park" },
    { title: "Zacatecas Thr cable car", subtitle: "Cable Car Ride" },
  ],
  es: [
    { title: "Centro comercial Galerías Zacatecas", subtitle: "Centro comercial" },
    { title: "Mina turística El Edén", subtitle: "Mina turística" },
    { title: "Colina escénica La Bufa", subtitle: "Colina escénica" },
    { title: "Museo local Coronel", subtitle: "Museo local" },
    { title: "Museo de arte Manuel Felguerez", subtitle: "Museo de arte" },
    { title: "Museo local Zacatecano", subtitle: "Museo local" },
    { title: "Museo histórico Playmo Historia", subtitle: "Museo histórico" },
    { title: "Museo interactivo Zig Zag", subtitle: "Museo interactivo" },
    { title: "Viñedo Tierra Adentro", subtitle: "Viñedo" },
    { title: "Sitio arqueológico La Quemada", subtitle: "Sitio arqueológico" },
    { title: "Parque La Encantada", subtitle: "Parque" },
    { title: "Viaje en teleférico Zacatecas Thr", subtitle: "Viaje en teleférico" },
  ],
  de: [
    { title: "Einkaufszentrum Galerías Zacatecas", subtitle: "Einkaufszentrum" },
    { title: "Touristenmine El Edén", subtitle: "Touristenmine" },
    { title: "Aussichtsberg La Bufa", subtitle: "Aussichtsberg" },
    { title: "Lokales Museum Coronel", subtitle: "Lokales Museum" },
    { title: "Kunstmuseum Manuel Felguerez", subtitle: "Kunstmuseum" },
    { title: "Lokales Museum Zacatecano", subtitle: "Lokales Museum" },
    { title: "Historisches Museum Playmo Historia", subtitle: "Historisches Museum" },
    { title: "Interaktives Museum Zig Zag", subtitle: "Interaktives Museum" },
    { title: "Weingut Tierra Adentro", subtitle: "Weingut" },
    { title: "Archäologische Stätte La Quemada", subtitle: "Archäologische Stätte" },
    { title: "Park La Encantada", subtitle: "Park" },
    { title: "Fahrt mit der Seilbahn Zacatecas Thr", subtitle: "Fahrt mit der Seilbahn" },
  ],
  ja: [
    { title: "ショッピングモール Galerías Zacatecas", subtitle: "ショッピングモール" },
    { title: "観光鉱山 El Edén", subtitle: "観光鉱山" },
    { title: "景勝地 La Bufa", subtitle: "景勝地" },
    { title: "地元の博物館 Coronel", subtitle: "地元の博物館" },
    { title: "美術館 Manuel Felguerez", subtitle: "美術館" },
    { title: "地元の博物館 Zacatecano", subtitle: "地元の博物館" },
    { title: "歴史博物館 Playmo Historia", subtitle: "歴史博物館" },
    { title: "インタラクティブミュージアム Zig Zag", subtitle: "インタラクティブミュージアム" },
    { title: "ワイナリー Tierra Adentro", subtitle: "ワイナリー" },
    { title: "考古学サイト La Quemada", subtitle: "考古学サイト" },
    { title: "公園 La Encantada", subtitle: "公園" },
    { title: "ケーブルカーの乗り物 Zacatecas Thr", subtitle: "ケーブルカーの乗り物" },
  ],
  zh: [
    { title: "购物中心 Galerías Zacatecas", subtitle: "购物中心" },
    { title: "旅游矿山 El Edén", subtitle: "旅游矿山" },
    { title: "景点山 La Bufa", subtitle: "景点山" },
    { title: "本地博物馆 Coronel", subtitle: "本地博物馆" },
    { title: "艺术博物馆 Manuel Felguerez", subtitle: "艺术博物馆" },
    { title: "本地博物馆 Zacatecano", subtitle: "本地博物馆" },
    { title: "历史博物馆 Playmo Historia", subtitle: "历史博物馆" },
    { title: "互动博物馆 Zig Zag", subtitle: "互动博物馆" },
    { title: "葡萄园 Tierra Adentro", subtitle: "葡萄园" },
    { title: "考古遗址 La Quemada", subtitle: "考古遗址" },
    { title: "公园 La Encantada", subtitle: "公园" },
    { title: "缆车 Zacatecas Thr", subtitle: "缆车" },
  ],
  ko: [
    { title: "쇼핑몰 Galerías Zacatecas", subtitle: "쇼핑몰" },
    { title: "관광 광산 El Edén", subtitle: "관광 광산" },
    { title: "경치 좋은 언덕 La Bufa", subtitle: "경치 좋은 언덕" },
    { title: "지역 박물관 Coronel", subtitle: "지역 박물관" },
    { title: "미술 박물관 Manuel Felguerez", subtitle: "미술 박물관" },
    { title: "지역 박물관 Zacatecano", subtitle: "지역 박물관" },
    { title: "역사 박물관 Playmo Historia", subtitle: "역사 박물관" },
    { title: "인터랙티브 박물관 Zig Zag", subtitle: "인터랙티브 박물관" },
    { title: "포도밭 Tierra Adentro", subtitle: "포도밭" },
    { title: "고고학 사이트 La Quemada", subtitle: "고고학 사이트" },
    { title: "공원 La Encantada", subtitle: "공원" },
    { title: "케이블카 Zacatecas Thr", subtitle: "케이블카" },
  ],
  zh_tw: [
    { title: "購物中心 Galerías Zacatecas", subtitle: "購物中心" },
    { title: "旅遊礦山 El Edén", subtitle: "旅遊礦山" },
    { title: "景點山 La Bufa", subtitle: "景點山" },
    { title: "本地博物館 Coronel", subtitle: "本地博物館" },
    { title: "藝術博物館 Manuel Felguerez", subtitle: "藝術博物館" },
    { title: "本地博物館 Zacatecano", subtitle: "本地博物館" },
    { title: "歷史博物館 Playmo Historia", subtitle: "歷史博物館" },
    { title: "互動博物館 Zig Zag", subtitle: "互動博物館" },
    { title: "葡萄園 Tierra Adentro", subtitle: "葡萄園" },
    { title: "考古遺址 La Quemada", subtitle: "考古遺址" },
    { title: "公園 La Encantada", subtitle: "公園" },
    { title: "纜車 Zacatecas Thr", subtitle: "纜車" },
  ],
  fr: [
    { title: "Centre commercial Galerías Zacatecas", subtitle: "Centre commercial" },
    { title: "Mine touristique El Edén", subtitle: "Mine touristique" },
    { title: "Colline pittoresque La Bufa", subtitle: "Colline pittoresque" },
    { title: "Musée local Coronel", subtitle: "Musée local" },
    { title: "Musée d'art Manuel Felguerez", subtitle: "Musée d'art" },
    { title: "Musée local Zacatecano", subtitle: "Musée local" },
    { title: "Musée historique Playmo Historia", subtitle: "Musée historique" },
    { title: "Musée interactif Zig Zag", subtitle: "Musée interactif" },
    { title: "Vignoble Tierra Adentro", subtitle: "Vignoble" },
    { title: "Site archéologique La Quemada", subtitle: "Site archéologique" },
    { title: "Parc La Encantada", subtitle: "Parc" },
    { title: "Trajet en téléphérique Zacatecas Thr", subtitle: "Trajet en téléphérique" },
  ],
};


export default function ZacatecasEntertainment() {
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
    <div
      data-aos="fade-in"
      className="text-white strategic-border row d-flex justify-content-center"
      style={{
        backgroundColor: `#f1f1f1`,
        width: "100%",
        display: "flex",
        paddingTop: "50px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderTop: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3 style={{ fontWeight: "bold", textAlign: "center", color: 'white' }}>
          {translations[language].heading}
        </h3>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            textAlign: "center",
            color: 'white'
          }}
        >
          {translations[language].description}
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(../assets/entertainment.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          position: "relative",
        }}
      >

        <div className=" col-lg-10 col-md-12 d-flex align-items-center justify-content-center">
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{
              marginTop: "20px",
              marginLeft: "0px",
              marginRight: "0px",
              marginBottom: "100px",
              width: "100%",
            }}
          >
            {dissTranslations[language].map((dis, index) => (
              <div
                key={index}
                className="relative col-lg-3 col-md-4 col-sm-6"
                style={{
                  // backgroundImage: `url(${`../assets/e${index + 1}.png`})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "250px",
                  height: "250px",
                  display: "flex",
                  margin: "10px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="cursor-pointer scale_on_hover hover:scale-110"

                  style={{
                    backgroundImage: `url(${`../assets/e${index + 1}.png`})`,
                    // backgroundColor: "#000",
                    // opacity: "0.5",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                ></div>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "0px",
                    textAlign: "center",
                    zIndex: 100,
                  }}
                >
                  {dis.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
