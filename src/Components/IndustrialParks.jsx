// import React, { useContext,useState,useEffect } from "react";
// import Cookies from 'js-cookie'

// // Example context to manage language state
// const LanguageContext = React.createContext();

// const translations = {
//   en: {
//     title: "INDUSTRIAL PARKS",
//     rents: {
//       sierra: "Sierra de Alica Neighborhood: USD 750 - 2,000 per month.",
//       villas: "Villas del Carmen Neighborhood: USD 350 - 750 per month.",
//       lomas1: "Lomas de Galicia Community: USD 450 - 750 per month.",
//       lomas2: "Lomas de Galicia Community: USD 450 - 750 per month.",
//       tahona: "Tahona Community: USD 600 - 900 per month.",
//     },
//     buttonText: "LEARN MORE",
//   },
//   es: {
//     title: "PARQUES INDUSTRIALES",
//     rents: {
//       sierra: "Barrio Sierra de Alica: USD 750 - 2,000 por mes.",
//       villas: "Barrio Villas del Carmen: USD 350 - 750 por mes.",
//       lomas1: "Comunidad Lomas de Galicia: USD 450 - 750 por mes.",
//       lomas2: "Comunidad Lomas de Galicia: USD 450 - 750 por mes.",
//       tahona: "Comunidad Tahona: USD 600 - 900 por mes.",
//     },
//     buttonText: "APRENDE MÁS",
//   },
//   de: {
//     title: "INDUSTRIEPARKS",
//     rents: {
//       sierra: "Sierra de Alica Viertel: USD 750 - 2,000 pro Monat.",
//       villas: "Villas del Carmen Viertel: USD 350 - 750 pro Monat.",
//       lomas1: "Lomas de Galicia Gemeinschaft: USD 450 - 750 pro Monat.",
//       lomas2: "Lomas de Galicia Gemeinschaft: USD 450 - 750 pro Monat.",
//       tahona: "Tahona Gemeinschaft: USD 600 - 900 pro Monat.",
//     },
//     buttonText: "ERFAHREN SIE MEHR",
//   },
//   ja: {
//     title: "工業団地",
//     rents: {
//       sierra: "シエラ・デ・アリカ地区：月額USD 750 - 2,000。",
//       villas: "ビジャス・デル・カルメン地区：月額USD 350 - 750。",
//       lomas1: "ロマス・デ・ガリシアコミュニティ：月額USD 450 - 750。",
//       lomas2: "ロマス・デ・ガリシアコミュニティ：月額USD 450 - 750。",
//       tahona: "タホナコミュニティ：月額USD 600 - 900。",
//     },
//     buttonText: "もっと詳しく",
//   },
//   zh: {
//     title: "工业园区",
//     rents: {
//       sierra: "阿利卡山社区：每月USD 750 - 2,000。",
//       villas: "卡门别墅社区：每月USD 350 - 750。",
//       lomas1: "加利西亚社区：每月USD 450 - 750。",
//       lomas2: "加利西亚社区：每月USD 450 - 750。",
//       tahona: "塔霍纳社区：每月USD 600 - 900。",
//     },
//     buttonText: "了解更多",
//   },
//   ko: {
//     title: "산업 공원",
//     rents: {
//       sierra: "시에라 데 알리카 지역: 월 USD 750 - 2,000.",
//       villas: "빌라스 델 카르멘 지역: 월 USD 350 - 750.",
//       lomas1: "로마스 데 갈리시아 커뮤니티: 월 USD 450 - 750.",
//       lomas2: "로마스 데 갈리시아 커뮤니티: 월 USD 450 - 750.",
//       tahona: "타호나 커뮤니티: 월 USD 600 - 900.",
//     },
//     buttonText: "더 알아보기",
//   },
//   zh_tw: {
//     title: "工業園區",
//     rents: {
//       sierra: "阿利卡山社區：每月USD 750 - 2,000。",
//       villas: "卡門別墅社區：每月USD 350 - 750。",
//       lomas1: "加利西亞社區：每月USD 450 - 750。",
//       lomas2: "加利西亞社區：每月USD 450 - 750。",
//       tahona: "塔霍納社區：每月USD 600 - 900。",
//     },
//     buttonText: "了解更多",
//   },
//   fr: {
//     title: "PARCS INDUSTRIELS",
//     rents: {
//       sierra: "Quartier Sierra de Alica : USD 750 - 2,000 par mois.",
//       villas: "Quartier Villas del Carmen : USD 350 - 750 par mois.",
//       lomas1: "Communauté Lomas de Galicia : USD 450 - 750 par mois.",
//       lomas2: "Communauté Lomas de Galicia : USD 450 - 750 par mois.",
//       tahona: "Communauté Tahona : USD 600 - 900 par mois.",
//     },
//     buttonText: "EN SAVOIR PLUS",
//   },
// };

// export default function IndustrialParks() {
//   const [language,setlanguage] = useState(Cookies.get("language") || "en");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const savedLanguage = Cookies.get("language");
//       if (savedLanguage) {
//         setlanguage(savedLanguage);
//       }
//       console.log(language);
//     }, 1); // Check every 1 second

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div
//       className="row d-flex justify-content-center"
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//         color: "black",
//       }}
//     >
//       <div className="col-lg-5 col-md-6 col-sm-12" style={{ padding: "30px" }}>
//         <img
//           src="../assets/industrial.png"
//           alt=""
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//       <div
//         className="col-lg-5 col-md-6 col-sm-6"
//         style={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h3 style={{ fontWeight: "bold" }}>
//           {" "}
//           <span
//             style={{ borderBottom: "3px solid #efbcbc", paddingBottom: "5px" }}
//           >
//             {translations[language].title.split(" ")[0]}
//           </span>
//           {translations[language].title.split(" ")[1]}
//         </h3>
//         <p className="rent-example" style={{marginTop:'10px'}}>
//           {translations[language].rents.sierra}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.villas}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.lomas1}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.lomas2}
//         </p>
//         <p className="rent-example">
//           {translations[language].rents.tahona}
//         </p>
//         <button
//             className="buttonn d-flex align-items-center"
//             style={{
//               backgroundColor: "#571517",
//               color: "#fff",
//               fontSize: "14px",
//               fontWeight: "500",
//               padding: "5px 20px",
//               paddingRight: "5px",
//               width:'150px',
//               borderRadius: "30px",
//               border: "3px solid #efbcbc",
//               marginBottom: "10px",
//             }}
//           >
//             {translations[language].buttonText}
//             <img
//               src={"../assets/contactus.png"}
//               alt="icon"
//               style={{ width: "20px", height: "20px", marginLeft: "10px" }}
//             />
//           </button>
//       </div>
//     </div>
//   );
// }

// // Example provider component to wrap around your app
// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState("en"); // Default language is English

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }



import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import "../Components/IndustrialParks.css"

const translations = {
  en: {
    title: "INDUSTRIAL PARKS",
    content: "11 Parks and industrial zones",
    content1: "101 hectares available in developed parks and areas",
    content2: "335 hectares available in 4 parks under development",
    content3: "376 hectares already occupied",
    content4: "More than 50 companies already installed in the most important parks",
    learnMore: "LEARN MORE",
  },
  es: {
    title: "PARQUES INDUSTRIALES",
    content: "11 Parques y zonas industriales",
    content1: "101 hectáreas disponibles en parques y áreas desarrolladas",
    content2: "335 hectáreas disponibles en 4 parques en desarrollo",
    content3: "376 hectáreas ya ocupadas",
    content4: "Más de 50 empresas ya instaladas en los parques más importantes",
    learnMore: "SABER MÁS",
  },
  de: {
    title: "INDUSTRIEPARKS",
    content: "11 Parks und Industriegebiete",
    content1: "101 Hektar verfügbar in entwickelten Parks und Gebieten",
    content2: "335 Hektar verfügbar in 4 Parks in Entwicklung",
    content3: "376 Hektar bereits belegt",
    content4: "Mehr als 50 Unternehmen bereits in den wichtigsten Parks installiert",
    learnMore: "ERFAHREN SIE MEHR",
  },
  ja: {
    title: "工業団地",
    content: "11つの公園と産業地域",
    content1: "開発された公園と地域で利用可能な101ヘクタール",
    content2: "開発中の4つの公園で335ヘクタール利用可能",
    content3: "すでに376ヘクタールが占有されています",
    content4: "最も重要な公園には50以上の企業がすでに設置されています",
    learnMore: "もっと詳しく",
  },
  zh: {
    title: "工业园区",
    content: "11个公园和工业区",
    content1: "101公顷在开发的公园和地区可用",
    content2: "4个正在开发中的公园中有335公顷可用",
    content3: "已有376公顷被占用",
    content4: "已有50多家公司入驻最重要的园区",
    learnMore: "了解更多",
  },
  ko: {
    title: "산업 공원",
    content: "11개의 공원과 산업 지역",
    content1: "개발된 공원 및 지역에서 이용 가능한 101헥타르",
    content2: "개발 중인 4개 공원에서 335헥타르 이용 가능",
    content3: "이미 376헥타르가 점유 중",
    content4: "가장 중요한 공원에 이미 50개 이상의 기업이 설치되어 있습니다",
    learnMore: "더 알아보기",
  },
  zh_tw: {
    title: "工業園區",
    content: "11個公園和工業區",
    content1: "101公頃在開發的公園和地區可用",
    content2: "4個正在開發中的公園中有335公頃可用",
    content3: "已有376公頃被佔用",
    content4: "已有50多家公司入駐最重要的園區",
    learnMore: "了解更多",
  },
  fr: {
    title: "PARCS INDUSTRIELS",
    content: "11 Parcs et zones industrielles",
    content1: "101 hectares disponibles dans les parcs et zones développés",
    content2: "335 hectares disponibles dans 4 parcs en développement",
    content3: "376 hectares déjà occupés",
    content4: "Plus de 50 entreprises déjà installées dans les parcs les plus importants",
    learnMore: "EN SAVOIR PLUS",
  },
};



const handleClick = () => {
  window.scrollTo(0, 0);
};

export default function About1() {
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

  const { title, content, content1, content2, content3, content4, learnMore } = translations[language];

  return (
    <div
      data-aos="fade-in-up"
      className=" strategic-border row"
      style={{
        // backgroundImage: `url(../assets/about1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        // borderTop: "5px solid #efbcbc",
        // borderBottom: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-5 col-md-6" style={{ padding: "30px" }}>
        <img
          data-aos="slide-right"
          src="../assets/about4.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        data-aos="slide-left"
        className="col-lg-5 col-md-6"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3 
        data-aos="fade-in-up"
        style={{ fontWeight: "bold" }}>
          {" "}
          <span
            style={{ borderBottom: "3px solid #fff", paddingBottom: "5px" }}
          >
            {title}
          </span>{" "}
          {/* ZACATECAS */}
        </h3>
        {/* <div class="circle2"></div> */}
        <p 
        data-aos="fade-in-up"
        style={{ fontWeight: "500", marginTop: "20px" }}>
          {content}
        </p>
        <p 
        data-aos="fade-in-up"
        style={{ fontWeight: "500" }}>
          {content1}
        </p>
        <p 
        data-aos="fade-in-up"
        style={{ fontWeight: "500" }}>
          {content2}
        </p>
        <p 
        data-aos="fade-in-up"
        style={{ fontWeight: "500" }}>
          {content3}
        </p>
        <p 
        data-aos="fade-in-up"
        style={{ fontWeight: "500" }}>
          {content4}
        </p>
        <Link to="/invest" onClick={handleClick}>
          <button

            className="buttonn d-flex align-items-center"
            style={{
              backgroundColor: "#571517",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              padding: "5px 20px",
              paddingRight: "5px",
              borderRadius: "30px",
              border: "1px solid #efbcbc",
              marginTop: "20px",
              width: "150px",
            }}
          >
            {learnMore}
            <img
              src={"../assets/contactus.png"}
              alt="icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}





