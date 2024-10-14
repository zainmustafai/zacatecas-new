import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const texts = {
  en: {
    heading: "HOUSING",
    description:
      "Zacatecas offers a variety of medium to high-end living offerings.",
    rentExamples: [
      {
        location: "Zacatecas Downtown:",
        price: "USD 500 - 800 per month.",
      },
      {
        location: "Suburbs:",
        price: "USD 600 - 800 per month.",
      },
      {
        location:
          "Bernardez Community with Golf Club:",
        price: "USD 1,250 - 2,000 per month.",
      },
      {
        location:
          "Conde Santiago de la Laguna Community:",
        price: "USD 750 - 900 per month.",
      },
      {
        location: "Sierra de Alica Neighborhood:",
        price: "USD 750 - 2,000 per month.",
      },
      {
        location: "Villas del Carmen Neighborhood:",
        price: "USD 350 - 750 per month.",
      },
      {
        location: "Lomas de Galicia Community:",
        price: "USD 450 - 750 per month.",
      },
      {
        location: "Tahona Community:",
        price: "USD 600 - 900 per month.",
      },
    ],
  },
  es: {
    heading: "VIVIENDA",
    description:
      "Zacatecas ofrece una variedad de opciones de vivienda de medio a alto nivel.",
    rentExamples: [
      {
        location: "Centro de Zacatecas:",
        price: "USD 500 - 800 por mes.",
      },
      {
        location: "Suburbios:",
        price: "USD 600 - 800 por mes.",
      },
      {
        location:
          "Comunidad Bernardez con Club de Golf:",
        price: "USD 1,250 - 2,000 por mes.",
      },
      {
        location:
          "Comunidad Conde Santiago de la Laguna:",
        price: "USD 750 - 900 por mes.",
      },
      {
        location: "Barrio Sierra de Alica:",
        price: "USD 750 - 2,000 por mes.",
      },
      {
        location: "Barrio Villas del Carmen:",
        price: "USD 350 - 750 por mes.",
      },
      {
        location: "Comunidad Lomas de Galicia:",
        price: "USD 450 - 750 por mes.",
      },
      {
        location: "Comunidad Tahona:",
        price: "USD 600 - 900 por mes.",
      },
    ],
  },
  de: {
    heading: "WOHNEN",
    description:
      "Zacatecas bietet eine Vielzahl von Wohnmöglichkeiten im mittleren bis gehobenen Bereich.",
    rentExamples: [
      {
        location: "Zentrum von Zacatecas:",
        price: "USD 500 - 800 pro Monat.",
      },
      {
        location: "Vororte:",
        price: "USD 600 - 800 pro Monat.",
      },
      {
        location:
          "Bernardez Community mit Golf Club:",
        price: "USD 1.250 - 2.000 pro Monat.",
      },
      {
        location:
          "Conde Santiago de la Laguna Community:",
        price: "USD 750 - 900 pro Monat.",
      },
      {
        location: "Sierra de Alica Nachbarschaft:",
        price: "USD 750 - 2.000 pro Monat.",
      },
      {
        location: "Villas del Carmen Nachbarschaft:",
        price: "USD 350 - 750 pro Monat.",
      },
      {
        location: "Lomas de Galicia Community:",
        price: "USD 450 - 750 pro Monat.",
      },
      {
        location: "Tahona Community:",
        price: "USD 600 - 900 pro Monat.",
      },
    ],
  },
  ja: {
    heading: "住宅",
    description:
      "ザカテカスは、中から高級まで様々な住宅オプションを提供しています。",
    rentExamples: [
      {
        location: "ザカテカス市内:",
        price: "月額 USD 500 - 800",
      },
      {
        location: "郊外:",
        price: "月額 USD 600 - 800",
      },
      {
        location: "ゴルフクラブ付きのBernardezコミュニティ:",
        price: "月額 USD 1,250 - 2,000",
      },
      {
        location: "Conde Santiago de la Lagunaコミュニティ:",
        price: "月額 USD 750 - 900",
      },
      {
        location: "Sierra de Alica地区:",
        price: "月額 USD 750 - 2,000",
      },
      {
        location: "Villas del Carmen地区:",
        price: "月額 USD 350 - 750",
      },
      {
        location: "Lomas de Galiciaコミュニティ:",
        price: "月額 USD 450 - 750",
      },
      {
        location: "Tahonaコミュニティ:",
        price: "月額 USD 600 - 900",
      },
    ],
  },
  zh: {
    heading: "住房",
    description:
      "萨卡特卡斯提供中高档住房选择。",
    rentExamples: [
      {
        location: "萨卡特卡斯市中心:",
        price: "每月 USD 500 - 800",
      },
      {
        location: "郊区:",
        price: "每月 USD 600 - 800",
      },
      {
        location: "带高尔夫俱乐部的Bernardez社区:",
        price: "每月 USD 1,250 - 2,000",
      },
      {
        location: "Conde Santiago de la Laguna社区:",
        price: "每月 USD 750 - 900",
      },
      {
        location: "Sierra de Alica社区:",
        price: "每月 USD 750 - 2,000",
      },
      {
        location: "Villas del Carmen社区:",
        price: "每月 USD 350 - 750",
      },
      {
        location: "Lomas de Galicia社区:",
        price: "每月 USD 450 - 750",
      },
      {
        location: "Tahona社区:",
        price: "每月 USD 600 - 900",
      },
    ],
  },
  ko: {
    heading: "주거",
    description:
      "자카테카스는 중간에서 고급 주거 옵션을 다양하게 제공합니다.",
    rentExamples: [
      {
        location: "자카테카스 시내:",
        price: "월 USD 500 - 800",
      },
      {
        location: "근교:",
        price: "월 USD 600 - 800",
      },
      {
        location: "골프 클럽이 있는 Bernardez 커뮤니티:",
        price: "월 USD 1,250 - 2,000",
      },
      {
        location: "Conde Santiago de la Laguna 커뮤니티:",
        price: "월 USD 750 - 900",
      },
      {
        location: "Sierra de Alica 동네:",
        price: "월 USD 750 - 2,000",
      },
      {
        location: "Villas del Carmen 동네:",
        price: "월 USD 350 - 750",
      },
      {
        location: "Lomas de Galicia 커뮤니티:",
        price: "월 USD 450 - 750",
      },
      {
        location: "Tahona 커뮤니티:",
        price: "월 USD 600 - 900",
      },
    ],
  },
  fr: {
    heading: "LOGEMENT",
    description:
      "Zacatecas propose une variété d'options de logement de moyenne à haut de gamme.",
    rentExamples: [
      {
        location: "Centre de Zacatecas:",
        price: "USD 500 - 800 par mois.",
      },
      {
        location: "Banlieues:",
        price: "USD 600 - 800 par mois.",
      },
      {
        location:
          "Communauté Bernardez avec Club de Golf:",
        price: "USD 1,250 - 2,000 par mois.",
      },
      {
        location:
          "Communauté Conde Santiago de la Laguna:",
        price: "USD 750 - 900 par mois.",
      },
      {
        location: "Quartier Sierra de Alica:",
        price: "USD 750 - 2,000 par mois.",
      },
      {
        location: "Quartier Villas del Carmen:",
        price: "USD 350 - 750 par mois.",
      },
      {
        location: "Communauté Lomas de Galicia:",
        price: "USD 450 - 750 par mois.",
      },
      {
        location: "Communauté Tahona:",
        price: "USD 600 - 900 par mois.",
      },
    ],
  },
};

export default function Housing() {
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

  const { heading, description, rentExamples } = texts[language];

  return (
    <div
      className="text-white strategic-border row d-flex justify-content-center"
      style={{
        backgroundColor: `#f1f1f1`,
        width: "100%",
        display: "flex",
        padding: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderBottom: "5px solid #efbcbc",
        borderTop: "5px solid #efbcbc",
      }}
    >
      <div
        className="col-lg-5 col-md-6 col-sm-6"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h3 style={{ fontWeight: "bold" ,color: "white",}}>
          {" "}
          <span
            style={{ borderBottom: "3px solid #571517", paddingBottom: "5px",color: "white", }}
          >
            {heading.slice(0, 5)}
          </span>
          {heading.slice(5)}
        </h3>
        <p style={{ marginTop: "20px", fontSize: "14px", marginBottom: "10px",color: "white", }}>
          {description}
        </p>
        {rentExamples.map((example, index) => (
          <p
            className="text-white rent-example" key={index}>
            {example.location} <span style={{ fontWeight: "bold",color: "white", }}>{example.price}</span>
          </p>
        ))}
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12" style={{ padding: "30px",color: "white", }}>
        <img
          src="../assets/housing.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
