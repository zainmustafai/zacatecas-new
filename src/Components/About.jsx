import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const texts = {
  en: {
    aboutTitle: "ABOUT ZACATECAS",
    aboutText:
      "Zacatecas is strategically located in the industrial heart of Mexico. We offer the human capital and economic infrastructure ideal for companies of the mining, manufacturing, and automotive industries. Zacatecas’ economy and industries are integrated into the global economy and supply chains.",
    contactButton: "CONTACT US",
  },
  es: {
    aboutTitle: "ACERCA DE ZACATECAS",
    aboutText:
      "Zacatecas está estratégicamente ubicado en el corazón industrial de México. Ofrecemos el capital humano e infraestructura económica ideal para empresas de las industrias minera, manufacturera y automotriz. La economía e industrias de Zacatecas están integradas en la economía global y cadenas de suministro.",
    contactButton: "CONTÁCTANOS",
  },
  de: {
    aboutTitle: "ÜBER ZACATECAS",
    aboutText:
      "Zacatecas liegt strategisch günstig im industriellen Herzen Mexikos. Wir bieten das ideale Humankapital und die wirtschaftliche Infrastruktur für Unternehmen der Bergbau-, Fertigungs- und Automobilindustrie. Die Wirtschaft und Industrie Zacatecas sind in die globale Wirtschaft und Lieferketten integriert.",
    contactButton: "KONTAKTIERE UNS",
  },
  ja: {
    aboutTitle: "ザカテカスについて",
    aboutText:
      "ザカテカスはメキシコの産業の中心地に戦略的に位置しています。私たちは、鉱業、製造業、自動車産業の企業に最適な人的資本と経済インフラを提供しています。ザカテカスの経済と産業は、世界経済とサプライチェーンに統合されています。",
    contactButton: "お問い合わせ",
  },
  zh: {
    aboutTitle: "关于萨卡特卡斯",
    aboutText:
      "萨卡特卡斯地理位置优越，位于墨西哥工业中心地带。我们为采矿、制造和汽车行业的公司提供理想的人力资本和经济基础设施。萨卡特卡斯的经济和产业融入了全球经济和供应链。",
    contactButton: "联系我们",
  },
  ko: {
    aboutTitle: "자카테카스에 관하여",
    aboutText:
      "자카테카스는 멕시코 산업 중심지에 전략적으로 위치하고 있습니다. 우리는 광업, 제조 및 자동차 산업의 기업들에게 이상적인 인적 자본과 경제 인프라를 제공합니다. 자카테카스의 경제와 산업은 전 세계 경제와 공급망에 통합되어 있습니다.",
    contactButton: "문의하기",
  },
  zh_CN: {
    aboutTitle: "关于萨卡特卡斯",
    aboutText:
      "萨卡特卡斯地理位置优越，位于墨西哥工业中心地带。我们为采矿、制造和汽车行业的公司提供理想的人力资本和经济基础设施。萨卡特卡斯的经济和产业融入了全球经济和供应链。",
    contactButton: "联系我们",
  },
  zh_TW: {
    aboutTitle: "關於薩卡特卡斯",
    aboutText:
      "薩卡特卡斯地理位置優越，位於墨西哥工業中心地帶。我們為採礦、製造和汽車行業的公司提供理想的人力資本和經濟基礎設施。薩卡特卡斯的經濟和產業融入了全球經濟和供應鏈。",
    contactButton: "聯繫我們",
  },
  fr: {
    aboutTitle: "À PROPOS DE ZACATECAS",
    aboutText:
      "Zacatecas est stratégiquement situé au cœur industriel du Mexique. Nous offrons le capital humain et l'infrastructure économique idéale pour les entreprises des industries minière, manufacturière et automobile. L'économie et les industries de Zacatecas sont intégrées à l'économie mondiale et aux chaînes d'approvisionnement.",
    contactButton: "NOUS CONTACTER",
  },
};


export default function About() {
  const [language, setLanguage] = useState("en");

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

  const { aboutTitle, aboutText, contactButton } = texts[language] || texts.en;

  return (
    <div
      data-aos="slide-up"
      className="row d-flex justify-content-center" style={{ margin: "50px 10px" }}>
      <div className="col-lg-5 col-md-6" style={{ padding: "30px" }}>
        <img
          data-aos="fade-in"
          src="../assets/about.png" alt="" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="col-lg-5 col-md-6" style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3
          data-aos="fade-left"
          style={{ fontWeight: "bold" }}>
          <span style={{ borderBottom: "3px solid #571517", paddingBottom: "5px" }}>{aboutTitle}</span>
        </h3>
        <p style={{ fontWeight: "500", marginTop: "20px" }}>{aboutText}</p>
        <a
          href="mailto:yannick.berchtold@zacatecas.gob.mx"
          style={{ textDecoration: "none" }}
        >
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
              marginTop: "20px",
              width: "150px",
            }}
          >
            {contactButton}
            <img
              src={"../assets/contactus.png"}
              alt="icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </button>
        </a>
      </div>
    </div>
  );
}
