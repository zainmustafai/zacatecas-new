import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cookies from 'js-cookie'

// Language text objects
const texts = {
  en: {
    title: "SERVICES WE OFFER",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Investment advisory",
        des: "Specifically the Foreign Investment Department of the Government of the State of Zacatecas businessmen looking to invest in Mexico, and in our city, Zacatecas, to locate their companies.",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Networking With Local Partners",
        des: "Land parcels in the publicly owned industrial parks and zones can be assigned with “comodato”up to 10 years with possibility of extension.",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Soft Landing Assistance",
        des: "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in Zacatecas.",
      },
    ],
  },
  es: {
    title: "SERVICIOS QUE OFRECEMOS",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Asesoría de inversión",
        des: "Específicamente el Departamento de Inversión Extranjera del Gobierno del Estado de Zacatecas, empresarios que buscan invertir en México, y en nuestra ciudad, Zacatecas, para ubicar sus empresas.",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Networking con socios locales",
        des: "Los terrenos en los parques industriales y zonas de propiedad pública pueden ser asignados con “comodato” hasta 10 años con posibilidad de extensión.",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Asistencia de aterrizaje suave",
        des: "El director de promoción de inversiones y gestión lo acompañará personalmente en el proceso de establecer su empresa y lo apoyará con todos los trámites y permisos en Zacatecas.",
      },
    ],
  },
  de: {
    title: "DIENSTLEISTUNGEN, DIE WIR ANBIETEN",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Investitionsberatung",
        des: "Insbesondere die Abteilung für ausländische Investitionen der Regierung des Bundesstaates Zacatecas, Geschäftsleute, die in Mexiko investieren möchten, und in unserer Stadt Zacatecas, um ihre Unternehmen anzusiedeln.",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Vernetzung mit lokalen Partnern",
        des: "Grundstücke in öffentlich eigenen Industrieparks und Zonen können bis zu 10 Jahre mit Möglichkeit der Verlängerung „comodato“ zugewiesen werden.",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Unterstützung bei der sanften Landung",
        des: "Der Direktor für Investitionsförderung und -management begleitet Sie persönlich durch den Prozess der Gründung Ihres Unternehmens und unterstützt Sie bei allen Verfahren und Genehmigungen in Zacatecas.",
      },
    ],
  },
  ja: {
    title: "提供するサービス",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "投資アドバイザリー",
        des: "特にザカテカス州政府の外国投資部門は、メキシコに投資し、当社の都市ザカテカスに企業を設立しようとする事業者を対象としています。",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "地元パートナーとのネットワーキング",
        des: "公共所有の工業园地および地域における土地は、「comodato」で最大10年間、延長の可能性があります。",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "ソフトランディング支援",
        des: "投資促進および管理部門のディレクターが、企業設立のプロセスを直接サポートし、ザカテカス州内のすべての手続きと許可をサポートします。",
      },
    ],
  },
  zh: {
    title: "我们提供的服务",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "投资咨询",
        des: "特别是萨卡特卡斯州政府的外国投资部门，希望在墨西哥和我们的城市萨卡特卡斯州建立他们的公司的商人。",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "与当地合作伙伴的网络建设",
        des: "公共拥有的工业园区和区域的土地可以分配给“comodato”最长10年，可以延长。",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "软着陆援助",
        des: "投资促进和管理主任将亲自陪同您完成公司设立的过程，并在萨卡特卡斯州为您提供所有程序和许可的支持。",
      },
    ],
  },
  ko: {
    title: "우리가 제공하는 서비스",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "투자 상담",
        des: "특히 사카테카스 주 정부의 외국 투자 부서는 멕시코에 투자하고, 저희 도시 사카테카스에 기업을 설립하려는 사업가들을 대상으로 합니다.",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "지역 파트너와의 네트워킹",
        des: "공공 소유의 산업 공원 및 지역에서 토지는 최대 10년까지 ‘comodato’로 할당될 수 있으며 연장 가능합니다.",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "부드러운 착륙 지원",
        des: "투자 촉진 및 관리 디렉터는 개인적으로 회사 설립 과정을 도와주며, 자카테카스에서의 모든 절차와 허가를 지원합니다.",
      },
    ],
  },
  fr: {
    title: "LES SERVICES QUE NOUS OFFRONS",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Conseil en investissement",
        des: "Plus particulièrement, le Département des investissements étrangers du gouvernement de l'État de Zacatecas cible les hommes d'affaires qui souhaitent investir au Mexique et dans notre ville, Zacatecas, pour y implanter leurs entreprises.",
      },
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Réseautage avec des partenaires locaux",
        des: "Les terrains dans les parcs industriels et zones appartenant publiquement peuvent être assignés en « comodato » jusqu'à 10 ans avec possibilité d'extension.",
      },
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Assistance à l'atterrissage en douceur",
        des: "Le directeur de la promotion de l'investissement et de la gestion vous accompagnera personnellement tout au long du processus d'établissement de votre entreprise et vous soutiendra dans toutes les démarches et les permis à Zacatecas.",
      },
    ],
  },
};

const texts2 = {
  en: {
    title: "SERVICES WE OFFER",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Investment advisory",
        des: "Specifically the Foreign Investment Department of the Government of the State of Zacatecas businessmen looking to invest in Mexico, and in our city, Zacatecas, to locate their companies.",
      },

    ],
  },
  es: {
    title: "SERVICIOS QUE OFRECEMOS",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Asesoría de inversión",
        des: "Específicamente el Departamento de Inversión Extranjera del Gobierno del Estado de Zacatecas, empresarios que buscan invertir en México, y en nuestra ciudad, Zacatecas, para ubicar sus empresas.",
      },

    ],
  },
  de: {
    title: "DIENSTLEISTUNGEN, DIE WIR ANBIETEN",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Investitionsberatung",
        des: "Insbesondere die Abteilung für ausländische Investitionen der Regierung des Bundesstaates Zacatecas, Geschäftsleute, die in Mexiko investieren möchten, und in unserer Stadt Zacatecas, um ihre Unternehmen anzusiedeln.",
      },

    ],
  },
  ja: {
    title: "提供するサービス",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "投資アドバイザリー",
        des: "特にザカテカス州政府の外国投資部門は、メキシコに投資し、当社の都市ザカテカスに企業を設立しようとする事業者を対象としています。",
      },

    ],
  },
  zh: {
    title: "我们提供的服务",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "投资咨询",
        des: "特别是萨卡特卡斯州政府的外国投资部门，希望在墨西哥和我们的城市萨卡特卡斯州建立他们的公司的商人。",
      },

    ],
  },
  ko: {
    title: "우리가 제공하는 서비스",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "투자 상담",
        des: "특히 사카테카스 주 정부의 외국 투자 부서는 멕시코에 투자하고, 저희 도시 사카테카스에 기업을 설립하려는 사업가들을 대상으로 합니다.",
      },

    ],
  },
  fr: {
    title: "LES SERVICES QUE NOUS OFFRONS",
    diss: [
      {
        img1: "../assets/1.png",
        img2: "../assets/so3 (2).png",
        title: "Conseil en investissement",
        des: "Plus particulièrement, le Département des investissements étrangers du gouvernement de l'État de Zacatecas cible les hommes d'affaires qui souhaitent investir au Mexique et dans notre ville, Zacatecas, pour y implanter leurs entreprises.",
      },

    ],
  },
};

const texts3 = {
  en: {
    title: "SERVICES WE OFFER",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Networking With Local Partners",
        des: "Land parcels in the publicly owned industrial parks and zones can be assigned with “comodato”up to 10 years with possibility of extension.",
      },
    ],
  },
  es: {
    title: "SERVICIOS QUE OFRECEMOS",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Networking con socios locales",
        des: "Los terrenos en los parques industriales y zonas de propiedad pública pueden ser asignados con “comodato” hasta 10 años con posibilidad de extensión.",
      },
    ],
  },
  de: {
    title: "DIENSTLEISTUNGEN, DIE WIR ANBIETEN",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Vernetzung mit lokalen Partnern",
        des: "Grundstücke in öffentlich eigenen Industrieparks und Zonen können bis zu 10 Jahre mit Möglichkeit der Verlängerung „comodato“ zugewiesen werden.",
      },
    ],
  },
  ja: {
    title: "提供するサービス",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "地元パートナーとのネットワーキング",
        des: "公共所有の工業园地および地域における土地は、「comodato」で最大10年間、延長の可能性があります。",
      },
    ],
  },
  zh: {
    title: "我们提供的服务",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "与当地合作伙伴的网络建设",
        des: "公共拥有的工业园区和区域的土地可以分配给“comodato”最长10年，可以延长。",
      },
    ],
  },
  ko: {
    title: "우리가 제공하는 서비스",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "지역 파트너와의 네트워킹",
        des: "공공 소유의 산업 공원 및 지역에서 토지는 최대 10년까지 ‘comodato’로 할당될 수 있으며 연장 가능합니다.",
      },
    ],
  },
  fr: {
    title: "LES SERVICES QUE NOUS OFFRONS",
    diss: [
      {
        img1: "../assets/2.png",
        img2: "../assets/so3 (3).png",
        title: "Réseautage avec des partenaires locaux",
        des: "Les terrains dans les parcs industriels et zones appartenant publiquement peuvent être assignés en « comodato » jusqu'à 10 ans avec possibilité d'extension.",
      },
    ],
  },
};

const texts4 = {
  en: {
    title: "SERVICES WE OFFER",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Soft Landing Assistance",
        des: "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in Zacatecas.",
      },
    ],
  },
  es: {
    title: "SERVICIOS QUE OFRECEMOS",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Asistencia de aterrizaje suave",
        des: "El director de promoción de inversiones y gestión lo acompañará personalmente en el proceso de establecer su empresa y lo apoyará con todos los trámites y permisos en Zacatecas.",
      },
    ],
  },
  de: {
    title: "DIENSTLEISTUNGEN, DIE WIR ANBIETEN",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Unterstützung bei der sanften Landung",
        des: "Der Direktor für Investitionsförderung und -management begleitet Sie persönlich durch den Prozess der Gründung Ihres Unternehmens und unterstützt Sie bei allen Verfahren und Genehmigungen in Zacatecas.",
      },
    ],
  },
  ja: {
    title: "提供するサービス",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "ソフトランディング支援",
        des: "投資促進および管理部門のディレクターが、企業設立のプロセスを直接サポートし、ザカテカス州内のすべての手続きと許可をサポートします。",
      },
    ],
  },
  zh: {
    title: "我们提供的服务",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "软着陆援助",
        des: "投资促进和管理主任将亲自陪同您完成公司设立的过程，并在萨卡特卡斯州为您提供所有程序和许可的支持。",
      },
    ],
  },
  ko: {
    title: "우리가 제공하는 서비스",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "부드러운 착륙 지원",
        des: "투자 촉진 및 관리 디렉터는 개인적으로 회사 설립 과정을 도와주며, 자카테카스에서의 모든 절차와 허가를 지원합니다.",
      },
    ],
  },
  fr: {
    title: "LES SERVICES QUE NOUS OFFRONS",
    diss: [
      {
        img1: "../assets/3.png",
        img2: "../assets/so3 (1).png",
        title: "Assistance à l'atterrissage en douceur",
        des: "Le directeur de la promotion de l'investissement et de la gestion vous accompagnera personnellement tout au long du processus d'établissement de votre entreprise et vous soutiendra dans toutes les démarches et les permis à Zacatecas.",
      },
    ],
  },
};

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [desktop, setDesktop] = useState(true);
  const [mob, setMob] = useState(1);
  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 992;
      setIsMobile(window.innerWidth < mobileWidth);
      //   console.log(isMobile)
    };
    checkIfMobile();
    const intervalId = setInterval(checkIfMobile, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const diss = [
    {
      img1: "../assets/1.png",
      img2: "../assets/so3 (2).png",
      title: "Investment advisory",
      des: "Specifically the Foreign Investment Department of the Government of the State of Zacatecas businessmen looking to invest in Mexico, and in our city, Zacatecas, to locate their companies.",
    },
    {
      img1: "../assets/2.png",
      img2: "../assets/so3 (3).png",
      title: "Networking With Local Partners",
      des: "Land parcels in the publicly owned industrial parks and zones can be assigned with “comodato”up to 10 years with possibility of extension.",
    },
    {
      img1: "../assets/3.png",
      img2: "../assets/so3 (1).png",
      title: "Soft Landing Assistance",
      des: "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in zacatecas.",
    },
  ];
  const diss1 = [
    {
      img1: "../assets/2.png",
      img2: "../assets/so3 (3).png",
      title: "Networking With Local Partners",
      des: "Land parcels in the publicly owned industrial parks and zones can be assigned with “comodato”up to 10 years with possibility of extension.",
    },

    {
      img1: "../assets/3.png",
      img2: "../assets/so3 (1).png",
      title: "Soft Landing Assistance",
      des: "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in zacatecas.",
    },
    {
      img1: "../assets/1.png",
      img2: "../assets/so3 (2).png",
      title: "Investment advisory",
      des: "Specifically the Foreign Investment Department of the Government of the State of Zacatecas businessmen looking to invest in Mexico, and in our city, Zacatecas, to locate their companies.",
    },
  ];
  const diss2 = [
    {
      img1: "../assets/2.png",
      img2: "../assets/so3 (3).png",
      title: "Networking With Local Partners",
      des: "Land parcels in the publicly owned industrial parks and zones can be assigned with “comodato”up to 10 years with possibility of extension.",
    },
  ];

  const diss3 = [
    {
      img1: "../assets/3.png",
      img2: "../assets/so3 (1).png",
      title: "Soft Landing Assistance",
      des: "The director for investment promotion and management will personally accompany you through the process of establishing your company and support you with all procedures and permits in zacatecas.",
    },
  ];

  const diss4 = [
    {
      img1: "../assets/1.png",
      img2: "../assets/so3 (2).png",
      title: "Investment advisory",
      des: "Specifically the Foreign Investment Department of the Government of the State of Zacatecas businessmen looking to invest in Mexico, and in our city, Zacatecas, to locate their companies.",
    },
  ];

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
      data-aos="slide-right"
      className="distance-border"
      style={{
        backgroundImage: `url(../assets/services.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // color: "white",
        borderTop: "5px solid #efbcbc",
        borderBottom: "5px solid #efbcbc",
        color: "#000",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="2000"

          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {texts[language].title}
        </h3>
        <div className="d-flex align-items-center justify-content-center">
          <button
            style={{
              backgroundColor: "rgba(180, 66, 62,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "33px",
              height: "33px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "30px",
              marginLeft: "-30px",
            }}
            onClick={() => {
              setDesktop(!desktop);
              setMob(mob - 1);
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
                  backgroundColor: "#ee9a94",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaArrowLeft />
              </div>
            </div>
          </button>
          {isMobile ? (
            <div>
              {mob % 3 === 1 ? (
                <div
                  data-aos="fade-in"
                  data-aos-delay="100"
                  className="row d-flex justify-content-center align-items-center"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  {texts2[language].diss.map((dis, index) => (
                    <div
                      data-aos="fade-in"
                      data-aos-delay={index * 100}
                      className="col-lg-3 col-md-5 col-sm-6"
                      style={{
                        backgroundColor: "#fff",
                        // borderRadius: "5px",
                        padding: "20px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        margin: "10px",
                        marginTop: "40px",
                        borderRadius: "300px",
                        border: "3px solid #ccc",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: "88vh",
                        position: "relative", // Add relative positioning to the parent div
                      }}
                    >
                      <img
                        data-aos="fade-in"
                        data-aos-delay="100"
                        src={dis.img1}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />

                      <div
                        style={{
                          borderTopRightRadius: "47%",
                          padding: "5px",
                          width: "90px",
                          height: "90px",
                          borderTopLeftRadius: "47%",
                          border: "3px solid #fff",
                          zIndex: "10",
                          marginTop: "-60px",
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
                            borderTopRightRadius: "46%",
                            borderTopLeftRadius: "46%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            data-aos="fade-in"
                            data-aos-delay="100"
                            src={dis.img2}
                            style={{
                              padding: "10px",
                              width: "auto",
                              height: "100%",
                            }}
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
                        }}
                      >
                        {dis.title}
                      </p>
                      <p
                        data-aos="fade-in"
                        data-aos-delay="100"
                        style={{ fontSize: "14px", textAlign: "center" }}>
                        {dis.des}
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
              ) : (
                <div>
                  {mob % 3 === 2 ? (
                    <div
                      className="row d-flex justify-content-center align-items-center"
                      style={{ marginTop: "20px", width: "100%" }}
                    >
                      {texts3[language].diss.map((dis, index) => (
                        <div
                          className="col-lg-3 col-md-5 col-sm-6"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            padding: "20px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                            margin: "10px",
                            marginTop: "40px",
                            borderRadius: "300px",
                            border: "3px solid #ccc",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minHeight: "88vh",
                            position: "relative", // Add relative positioning to the parent div
                          }}
                        >
                          <img
                            src={dis.img1}
                            alt=""
                            style={{ width: "100%", height: "auto" }}
                          />

                          <div
                            style={{
                              borderTopRightRadius: "47%",
                              padding: "5px",
                              width: "90px",
                              height: "90px",
                              borderTopLeftRadius: "47%",
                              border: "3px solid #fff",
                              zIndex: "10",
                              marginTop: "-60px",
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
                                borderTopRightRadius: "46%",
                                borderTopLeftRadius: "46%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={dis.img2}
                                style={{
                                  padding: "10px",
                                  width: "auto",
                                  height: "100%",
                                }}
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
                            }}
                          >
                            {dis.title}
                          </p>
                          <p style={{ fontSize: "14px", textAlign: "center" }}>
                            {dis.des}
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
                  ) : (
                    <div
                      className="row d-flex justify-content-center align-items-center"
                      style={{ marginTop: "20px", width: "100%" }}
                    >
                      {texts4[language].diss.map((dis, index) => (
                        <div
                          className="col-lg-3 col-md-5 col-sm-6"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            padding: "20px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                            margin: "10px",
                            marginTop: "40px",
                            borderRadius: "300px",
                            border: "3px solid #ccc",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minHeight: "88vh",
                            position: "relative", // Add relative positioning to the parent div
                          }}
                        >
                          <img
                            src={dis.img1}
                            alt=""
                            style={{ width: "100%", height: "auto" }}
                          />

                          <div
                            style={{
                              borderTopRightRadius: "47%",
                              padding: "5px",
                              width: "90px",
                              height: "90px",
                              borderTopLeftRadius: "47%",
                              border: "3px solid #fff",
                              zIndex: "10",
                              marginTop: "-60px",
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
                                borderTopRightRadius: "46%",
                                borderTopLeftRadius: "46%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={dis.img2}
                                style={{
                                  padding: "10px",
                                  width: "auto",
                                  height: "100%",
                                }}
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
                            }}
                          >
                            {dis.title}
                          </p>
                          <p style={{ fontSize: "14px", textAlign: "center" }}>
                            {dis.des}
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
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              {desktop ? (
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  {texts[language].diss.map((dis, index) => (
                    <div
                      className="col-lg-3 col-md-5 col-sm-6"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        padding: "20px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        margin: "10px",
                        marginTop: "40px",
                        borderRadius: "300px",
                        border: "3px solid #ccc",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: "88vh",
                        position: "relative", // Add relative positioning to the parent div
                      }}
                    >
                      <img
                        src={dis.img1}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />

                      <div
                        style={{
                          borderTopRightRadius: "47%",
                          padding: "5px",
                          width: "90px",
                          height: "90px",
                          borderTopLeftRadius: "47%",
                          border: "3px solid #fff",
                          zIndex: "10",
                          marginTop: "-60px",
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
                            borderTopRightRadius: "46%",
                            borderTopLeftRadius: "46%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={dis.img2}
                            style={{
                              padding: "10px",
                              width: "auto",
                              height: "100%",
                            }}
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
                        }}
                      >
                        {dis.title}
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "center" }}>
                        {dis.des}
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
              ) : (
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  {texts[language].diss.map((dis, index) => (
                    <div
                      className="col-lg-3 col-md-5 col-sm-6"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        padding: "20px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        margin: "10px",
                        marginTop: "40px",
                        borderRadius: "300px",
                        border: "3px solid #ccc",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: "88vh",
                        position: "relative", // Add relative positioning to the parent div
                      }}
                    >
                      <img
                        src={dis.img1}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />

                      <div
                        style={{
                          borderTopRightRadius: "47%",
                          padding: "5px",
                          width: "90px",
                          height: "90px",
                          borderTopLeftRadius: "47%",
                          border: "3px solid #fff",
                          zIndex: "10",
                          marginTop: "-60px",
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
                            borderTopRightRadius: "46%",
                            borderTopLeftRadius: "46%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={dis.img2}
                            style={{
                              padding: "10px",
                              width: "auto",
                              height: "100%",
                            }}
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
                        }}
                      >
                        {dis.title}
                      </p>
                      <p style={{ fontSize: "14px", textAlign: "center" }}>
                        {dis.des}
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
              )}
            </div>
          )}
          <button
            style={{
              backgroundColor: "rgba(180, 66, 62,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "33px",
              height: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "-30px",
              marginLeft: "30px",
            }}
            onClick={() => {
              setDesktop(!desktop);
              setMob(mob + 1);
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
                  backgroundColor: "#ee9a94",
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
      </div>
    </div>
  );
}
