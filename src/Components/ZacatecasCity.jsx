import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Cookies from "js-cookie";

const texts = {
  en: {
    heading: "ZACATECAS CITY IS UNESCO WORLD HERITAGE",
    description:
      "It has 5 Stars Hotels and other Boutique & Luxury Accommodations. Haute cuisine restaurants.",
    buttons: {
      learnMore: "LEARN MORE",
    },
    diss: [
      { title: "First Class Museums" },
      { title: "High Quality Schools And Universities" },
      { title: "International Festivals" },
      { title: "Average Commute Time Less Than 20 Minutes" },
      { title: "Plazas And Shopping Centers" },
      { title: "Golf Club With HighEnd Neighbourhood" },
    ],
  },
  es: {
    heading: "ZACATECAS CITY ES PATRIMONIO MUNDIAL DE LA UNESCO",
    description:
      "Cuenta con hoteles de 5 estrellas y otros alojamientos Boutique y de lujo. Restaurantes de alta cocina.",
    buttons: {
      learnMore: "APRENDE MÁS",
    },
    diss: [
      { title: "Museos de Primera Clase" },
      { title: "Escuelas y Universidades de Alta Calidad" },
      { title: "Festivales Internacionales" },
      { title: "Tiempo Promedio de Traslado Menos de 20 Minutos" },
      { title: "Plazas y Centros Comerciales" },
      { title: "Club de Golf con Vecindario de Alta Gama" },
    ],
  },
  de: {
    heading: "ZACATECAS CITY IST UNESCO-WELTERBE",
    description:
      "Es verfügt über 5-Sterne-Hotels und andere Boutique- und Luxusunterkünfte. Restaurants mit Haute Cuisine.",
    buttons: {
      learnMore: "MEHR ERFAHREN",
    },
    diss: [
      { title: "Erstklassige Museen" },
      { title: "Hochwertige Schulen und Universitäten" },
      { title: "Internationale Festivals" },
      { title: "Durchschnittliche Pendelzeit unter 20 Minuten" },
      { title: "Plätze und Einkaufszentren" },
      { title: "Golfclub mit gehobenem Viertel" },
    ],
  },
  ja: {
    heading: "ザカテカス市はユネスコ世界遺産です",
    description:
      "5つ星ホテルや他のブティック・高級宿泊施設、ホートキュイジーヌのレストランがあります。",
    buttons: {
      learnMore: "もっと詳しく",
    },
    diss: [
      { title: "一流の美術館" },
      { title: "高品質な学校と大学" },
      { title: "国際的な祭り" },
      { title: "平均通勤時間は20分未満" },
      { title: "広場とショッピングセンター" },
      { title: "ハイエンドな近隣のゴルフクラブ" },
    ],
  },
  zh: {
    heading: "萨卡特卡斯市是联合国教科文组织世界遗产",
    description: "拥有五星级酒店和其他精品和豪华住宿。高级料理餐厅。",
    buttons: {
      learnMore: "了解更多",
    },
    diss: [
      { title: "一流博物馆" },
      { title: "高质量的学校和大学" },
      { title: "国际节庆" },
      { title: "平均通勤时间少于20分钟" },
      { title: "广场和购物中心" },
      { title: "高档社区的高尔夫俱乐部" },
    ],
  },
  ko: {
    heading: "자카테카스 시는 유네스코 세계유산입니다",
    description:
      "5성급 호텔과 기타 부티크 및 고급 숙박시설. 오뜨 쿠이진 레스토랑.",
    buttons: {
      learnMore: "더 알아보기",
    },
    diss: [
      { title: "일류 박물관" },
      { title: "고급 학교 및 대학" },
      { title: "국제 축제" },
      { title: "평균 통근 시간 20분 미만" },
      { title: "광장과 쇼핑 센터" },
      { title: "하이엔드 이웃과 골프 클럽" },
    ],
  },
  fr: {
    heading: "LA VILLE DE ZACATECAS EST UN PATRIMOINE MONDIAL DE L'UNESCO",
    description:
      "Elle dispose d'hôtels 5 étoiles et d'autres hébergements de luxe et de charme. Restaurants de haute cuisine.",
    buttons: {
      learnMore: "EN SAVOIR PLUS",
    },
    diss: [
      { title: "Musées de Premier Ordre" },
      { title: "Écoles et Universités de Haute Qualité" },
      { title: "Festivals Internationaux" },
      { title: "Temps Moyen de Trajet Moins de 20 Minutes" },
      { title: "Places et Centres Commerciaux" },
      { title: "Club de Golf avec Quartier Haut de Gamme" },
    ],
  },
};

export default function ZacatecasCity() {
  const [lang, setlang] = useState(Cookies.get("language") || "en"); // Default language is English

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
      // console.log(lang);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, description, buttons, diss } = texts[lang];

  return (
    <div
      data-aos="fade-in"
      className="row d-flex justify-content-center"
      style={{ margin: "50px 10px" }}
    >
      <div className="col-lg-10 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <div className="col-lg-5 col-md-12 col-sm-6">
          <h3
            style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}
          >
            {heading}
          </h3>
        </div>

        <p
          data-aos="zoom-in"
          style={{
            fontWeight: "500",
            fontSize: "14px",
            color: "#000",
            textAlign: "center",
          }}
        >
          {description}
        </p>
      </div>

      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ marginTop: "20px", width: "100%" }}
      >
        {diss.map((dis, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-5 col-sm-6"
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              margin: "10px",
              marginTop: "40px",
              display: "flex",
              padding: "0px",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderRadius: "10px",
            }}
          >
            <img
              src={`../assets/w${index + 1}.png`}
              alt=""
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />

            <div
              style={{
                borderBottomRightRadius: "47%",
                padding: "5px",
                width: "90px",
                height: "90px",
                borderBottomLeftRadius: "47%",
                border: "3px solid #ccc",
                zIndex: "10",
                marginTop: "-45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#9e342d",
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
                  src={`../assets/ww${index + 1}.png`}
                  style={{ padding: "10px", width: "auto", height: "100%" }}
                  alt=""
                />
              </div>
            </div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "17px",
                marginTop: "10px",
                textAlign: "center",
                margin: "20px",
                minHeight: "60px",
              }}
            >
              {dis.title}
            </p>
          </div>
        ))}
      </div>

      <a href="#top" style={{ textDecoration: "none" }} className="d-flex justify-content-center">
        <button
          className="buttonn d-flex align-items-center"
          style={{
            backgroundColor: "#571517",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            padding: "5px 20px",
            paddingRight: "5px",
            borderRadius: "30px",
            border: "3px solid #efbcbc",
            marginBottom: "10px",
            width: "150px",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {buttons.learnMore}
          <img
            src={"../assets/contactus.png"}
            alt="icon"
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
        </button>
      </a>
    </div>
  );
}
