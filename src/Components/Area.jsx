import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import "./Area.css";

const texts = {
  en: {
    heading: "Zacatecas Industrial",
    subheading: "Real Estate",
    paragraph:
      "Zacatecas has top notch industrial infrastructure, ideally located in Mexico, with highly competitive conditions and attractive incentives.",
    paragraph1: "competitive conditions and attractive incentives.",
  },
  es: {
    heading: "Industria en Zacatecas",
    subheading: "Bienes raíces",
    paragraph:
      "Zacatecas cuenta con una infraestructura industrial de primera categoría, idealmente ubicada en México, con condiciones altamente competitivas e incentivos atractivos.",
    paragraph1: "condiciones competitivas e incentivos atractivos.",
  },
  fr: {
    heading: "Industrie à Zacatecas",
    subheading: "Immobilier",
    paragraph:
      "Zacatecas dispose d'une infrastructure industrielle de premier ordre, idéalement située au Mexique, avec des conditions hautement compétitives et des incitations attrayantes.",
    paragraph1: "conditions compétitives et des incitations attrayantes.",
  },
  de: {
    heading: "Industrie in Zacatecas",
    subheading: "Immobilien",
    paragraph:
      "Zacatecas verfügt über erstklassige industrielle Infrastruktur, ideal gelegen in Mexiko, mit hoch konkurrenzfähigen Bedingungen und attraktiven Anreizen.",
    paragraph1: "konkurrenzfähigen Bedingungen und attraktiven Anreizen.",
  },
  ja: {
    heading: "サカテカスの産業",
    subheading: "不動産",
    paragraph:
      "サカテカスは、メキシコに理想的に位置し、非常に競争力のある条件と魅力的なインセンティブを備えた、一流の産業インフラを有しています。",
    paragraph1: "競争力のある条件と魅力的なインセンティブを備えています。",
  },
  zh: {
    heading: "萨卡特卡斯的工业",
    subheading: "房地产",
    paragraph:
      "萨卡特卡斯拥有一流的工业基础设施，地理位置理想，条件竞争力强，激励措施吸引人。",
    paragraph1: "竞争力强，激励措施吸引人。",
  },
  ko: {
    heading: "자카테카스 산업",
    subheading: "부동산",
    paragraph:
      "자카테카스는 멕시코에 이상적으로 위치한 일류 산업 인프라를 갖추고 있으며, 매우 경쟁력 있는 조건과 매력적인 인센티브를 제공합니다.",
    paragraph1: "경쟁력 있는 조건과 매력적인 인센티브를 제공합니다.",
  },
};

export default function Area() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang, setlang] = useState(Cookies.get("language") || "en");

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

  const { heading, subheading, paragraph, paragraph1 } = texts[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div
      className="area-border"
      style={{
        background: "black",
        width: "100%",
        height: "max-content",
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
        borderBottom: "5px solid #efbcbc",
        position: "relative",
        zIndex: "100",
      }}
    >
      <div>
        <h1 className="mt-5">Industrial Park</h1>
      </div>

      <div className="container">
        <div
          data-aos="fade-in"
          className="mt-5 row">
          <div className="relative col-6 col-md-6">
            <img src="../assets/Air1.png" alt="" />
            <div className="Airport">Airport Industrail Park 1+11</div>
            <Link to="/Park4" style={{ textDecoration: 'none' }} onClick={scrollToTop}><div className="text-white arrow-button">&#8594;</div></Link>

          </div>

          <div className="relative col-6 col-md-6">
            <img src="../assets/Air2.png" alt="" />
            <div className="Airport">Guadalupe Industrial Area</div>
            <Link to="/Park1" style={{ textDecoration: 'none' }} onClick={scrollToTop}><div className="text-white arrow-button">&#8594;</div></Link>
          </div>
        </div>

        <div
          data-aos="fade-in"
          className="mt-3 mb-5 row ">
          <div className="relative col-6 col-md-6">
            <img src="../assets/Air3.png" alt="" />
            <div className="Airport">Osiris Industrial Park</div>
            <Link to="/Park2" style={{ textDecoration: 'none' }} onClick={scrollToTop}><div className="text-white arrow-button">&#8594;</div></Link>
          </div>
          <div className="relative col-6 col-md-6">
            <img src="../assets/Air4.png" alt="" />
            <div className="Airport">Fresnillo Industrial Park II</div>
            <Link to="/Park3" style={{ textDecoration: 'none' }} onClick={scrollToTop}><div className="text-white arrow-button">&#8594;</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
