import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import "./About1.css";

const translations = {
  en: {
    title: "ABOUT ZACATECAS",
    content:
      "A combination of culture and history meet innovation and industry. The State of Zacatecas is renowned for its European-style historical, religious, civic, and cultural buildings that are found throughout the city, even among its narrow streets, alleys, and plazas. However, this entity offers a wide range of business and investment opportunities. Currently, Zacatecas has a comprehensive strategy for economic expansion. With attractive investment plans, a privileged geographical location, logistical connectivity...",
    learnMore: "LEARN MORE",
  },
  es: {
    title: "SOBRE ZACATECAS",
    content:
      "Una combinación de cultura e historia se encuentra con innovación e industria. El Estado de Zacatecas es conocido por sus edificaciones históricas, religiosas, cívicas y culturales de estilo europeo que se encuentran a lo largo de la ciudad, incluso entre sus calles estrechas, callejones y plazas. Sin embargo, esta entidad ofrece una amplia gama de oportunidades de negocio e inversión. Actualmente, Zacatecas cuenta con una estrategia integral para la expansión económica. Con planes de inversión atractivos, una ubicación geográfica privilegiada, conectividad logística...",
    learnMore: "SABER MÁS",
  },
  de: {
    title: "ÜBER ZACATECAS",
    content:
      "Eine Kombination aus Kultur und Geschichte trifft auf Innovation und Industrie. Der Staat Zacatecas ist bekannt für seine historischen, religiösen, bürgerlichen und kulturellen Gebäude im europäischen Stil, die sich über die gesamte Stadt erstrecken, selbst in ihren engen Gassen, Gassen und Plätzen. Diese Region bietet jedoch eine Vielzahl von Geschäfts- und Investitionsmöglichkeiten. Derzeit verfolgt Zacatecas eine umfassende Strategie zur wirtschaftlichen Expansion. Mit attraktiven Investitionsplänen, einer privilegierten geografischen Lage, logistischer Anbindung...",
    learnMore: "MEHR ERFAHREN",
  },
  ja: {
    title: "ザカテカスについて",
    content:
      "文化と歴史が革新と産業と出会う場所。ザカテカス州は、市内全体にわたって見られるヨーロッパ風の歴史的、宗教的、市民的、文化的建物で知られています。狭い通りや路地、広場の中にさえ、その存在が確認できます。しかしながら、この地域は多岐にわたるビジネスと投資の機会を提供しています。現在、ザカテカス州は経済拡張の包括的な戦略を持ち、魅力的な投資計画、特権的な地理的位置、物流の連結性を有しています。",
    learnMore: "もっと詳しく",
  },
  zh: {
    title: "关于萨卡特卡斯",
    content:
      "文化与历史相遇创新与产业。萨卡特卡斯州以其遍布城市的欧式历史、宗教、市民和文化建筑而闻名，即使在其狭窄的街道、小巷和广场之间也是如此。然而，这个地区提供了广泛的商业和投资机会。目前，萨卡特卡斯州制定了全面的经济扩展战略，拥有诱人的投资计划、特权地理位置和物流连接。",
    learnMore: "了解更多",
  },
  ko: {
    title: "자카테카스에 대해",
    content:
      "문화와 역사가 혁신과 산업을 만나는 곳. 자카테카스 주는 그 도시 전역에 걸쳐 유럽식의 역사적, 종교적, 시민적, 문화적 건물로 유명합니다. 좁은 거리, 골목길, 광장 사이에서도 이들 건물들을 발견할 수 있습니다. 그러나 이 지역은 다양한 비즈니스와 투자 기회를 제공합니다. 현재 자카테카스는 경제 확장을 위한 포괄적인 전략을 가지고 있으며, 매력적인 투자 계획, 특권 있는 지리적 위치, 물류 연결성을 자랑합니다.",
    learnMore: "더 알아보기",
  },
  zh_CN: {
    title: "关于萨卡特卡斯",
    content:
      "文化与历史相遇创新与产业。萨卡特卡斯州以其遍布城市的欧式历史、宗教、市民和文化建筑而闻名，即使在其狭窄的街道、小巷和广场之间也是如此。然而，这个地区提供了广泛的商业和投资机会。目前，萨卡特卡斯州制定了全面的经济扩展战略，拥有诱人的投资计划、特权地理位置和物流连接。",
    learnMore: "了解更多",
  },
  fr: {
    title: "À PROPOS DE ZACATECAS",
    content:
      "Une combinaison de culture et d'histoire rencontre l'innovation et l'industrie. L'État de Zacatecas est renommé pour ses bâtiments historiques, religieux, civiques et culturels de style européen qui parsèment la ville, même parmi ses rues étroites, ses ruelles et ses places. Cependant, cette région offre une large gamme d'opportunités d'affaires et d'investissement. Actuellement, Zacatecas a une stratégie complète pour l'expansion économique. Avec des plans d'investissement attractifs, un emplacement géographique privilégié, une connectivité logistique...",
    learnMore: "EN SAVOIR PLUS",
  },
};

const handleClick = () => {
  window.scrollTo(0, 0);
};


export default function About1() {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      // console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { title, content, learnMore } = translations[language];

  return (
    <div data-aos="slide-up" className="strategic-border row">
      <div className="col-lg-5 col-md-6 img-container">
        <img data-aos="slide-right" src="../assets/about3.png" alt="" className="responsive-img" />
      </div>
      <div data-aos="slide-left" className="col-lg-5 col-md-6 content-container">
        <h3 className="title">
          <span className="title-underline">{title}</span>
        </h3>
        <p className="content">{content}</p>
        <Link to="/QualityOfLife" onClick={handleClick}>
          <a href="mailto:yannick.berchtold@zacatecas.gob.mx" className="email-link">
            <button className="buttonn d-flex align-items-center">
              {learnMore}
              <img src={"../assets/contactus.png"} alt="icon" className="button-icon" />
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}



