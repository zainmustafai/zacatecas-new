import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import CountUp from "react-countup";
import { useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const translations = {
  en: {
    diss: [
      { title: "Population", subtitle: 1632204, img1: "../assets/f1.png" },
      { title: "Active Workers", subtitle: 701031, img1: "../assets/f2.png" },
      {
        title: "Enrollment in Higher and Technical Education",
        subtitle: 57863,
        img1: "../assets/f3.png",
      },
      {
        title: "Engineering and Industrial Students",
        subtitle: 15000,
        img1: "../assets/f4.png",
      },
      {
        title: "Software and IT Students",
        subtitle: 4000,
        img1: "../assets/f5.png",
      },
    ],
    title: "Workforce Statistics",
    learnMore: "Learn More",
    buttonText: "Learn More",
    moreIcon: "../assets/more_icon.png",
    specialText: "Find out more about our workforce!",
  },
  es: {
    diss: [
      { img1: "../assets/f1.png", title: "Población", subtitle: "1632204" },
      {
        img1: "../assets/f2.png",
        title: "Trabajadores Activos",
        subtitle: "701031",
      },
      {
        img1: "../assets/f3.png",
        title: "Inscripción en Educación Técnica y Superior",
        subtitle: "57863",
      },
      {
        img1: "../assets/f4.png",
        title: "Estudiantes de Ingeniería e Industria",
        subtitle: "15000",
      },
      {
        img1: "../assets/f5.png",
        title: "Estudiantes de Software e IT",
        subtitle: "4000",
      },
    ],
    title: "Fuerza Laboral y Talento",
    learnMore: "Saber Más",
    buttonText: "Saber Más",
    moreIcon: "../assets/contactus.png",
    specialText: "Las Personas Más Competitivas en el Lugar Correcto",
  },
  de: {
    diss: [
      { img1: "../assets/f1.png", title: "Bevölkerung", subtitle: "1632204" },
      {
        img1: "../assets/f2.png",
        title: "Aktive Arbeitskräfte",
        subtitle: "701031",
      },
      {
        img1: "../assets/f3.png",
        title: "Einschreibung in Technische und Höhere Bildung",
        subtitle: "57863",
      },
      {
        img1: "../assets/f4.png",
        title: "Ingenieur- und Industriestudenten",
        subtitle: "15000",
      },
      {
        img1: "../assets/f5.png",
        title: "Software- und IT-Studenten",
        subtitle: "4000",
      },
    ],
    title: "Arbeitskraft und Talent",
    learnMore: "Mehr Erfahren",
    buttonText: "Mehr Erfahren",
    moreIcon: "../assets/contactus.png",
    specialText: "Die Wettbewerbsfähigsten am Richtigen Ort",
  },
  ja: {
    diss: [
      { img1: "../assets/f1.png", title: "人口", subtitle: "1632204" },
      { img1: "../assets/f2.png", title: "活動する労働者", subtitle: "701031" },
      {
        img1: "../assets/f3.png",
        title: "技術および高等教育への入学者",
        subtitle: "57863",
      },
      {
        img1: "../assets/f4.png",
        title: "工学および産業学生",
        subtitle: "15000",
      },
      {
        img1: "../assets/f5.png",
        title: "ソフトウェアおよびIT学生",
        subtitle: "4000",
      },
    ],
    title: "労働力と才能",
    learnMore: "もっと知る",
    buttonText: "もっと知る",
    moreIcon: "../assets/contactus.png",
    specialText: "最も競争力のある人々が適切な場所にいます",
  },
  zh: {
    diss: [
      { img1: "../assets/f1.png", title: "人口", subtitle: "1632204" },
      { img1: "../assets/f2.png", title: "活跃工作者", subtitle: "701031" },
      {
        img1: "../assets/f3.png",
        title: "技术和高等教育的入学",
        subtitle: "57863",
      },
      { img1: "../assets/f4.png", title: "工程和工业学生", subtitle: "15000" },
      { img1: "../assets/f5.png", title: "软件和IT学生", subtitle: "4000" },
    ],
    title: "劳动力和人才",
    learnMore: "了解更多",
    buttonText: "了解更多",
    moreIcon: "../assets/contactus.png",
    specialText: "最具竞争力的人在正确的地方",
  },
  ko: {
    diss: [
      { img1: "../assets/f1.png", title: "인구", subtitle: "1632204" },
      { img1: "../assets/f2.png", title: "활성 근로자", subtitle: "701031" },
      {
        img1: "../assets/f3.png",
        title: "기술 및 고등 교육 등록자",
        subtitle: "57863",
      },
      {
        img1: "../assets/f4.png",
        title: "공학 및 산업 학생",
        subtitle: "15000",
      },
      {
        img1: "../assets/f5.png",
        title: "소프트웨어 및 IT 학생",
        subtitle: "4000",
      },
    ],
    title: "노동력과 재능",
    learnMore: "더 알아보기",
    buttonText: "더 알아보기",
    moreIcon: "../assets/contactus.png",
    specialText: "가장 경쟁력 있는 사람들이 적절한 장소에 있습니다",
  },
  zh_TW: {
    diss: [
      { img1: "../assets/f1.png", title: "人口", subtitle: "1632204" },
      { img1: "../assets/f2.png", title: "活躍工作者", subtitle: "701031" },
      {
        img1: "../assets/f3.png",
        title: "技術和高等教育的入學",
        subtitle: "57863",
      },
      { img1: "../assets/f4.png", title: "工程和工業學生", subtitle: "15000" },
      { img1: "../assets/f5.png", title: "軟體和IT學生", subtitle: "4000" },
    ],
    title: "勞動力和人才",
    learnMore: "了解更多",
    buttonText: "了解更多",
    moreIcon: "../assets/contactus.png",
    specialText: "最具競爭力的人在正確的地方",
  },
  fr: {
    diss: [
      { img1: "../assets/f1.png", title: "Population", subtitle: "1632204" },
      {
        img1: "../assets/f2.png",
        title: "Travailleurs Actifs",
        subtitle: "701031",
      },
      {
        img1: "../assets/f3.png",
        title: "Inscription dans l'enseignement technique et supérieur",
        subtitle: "57863",
      },
      {
        img1: "../assets/f4.png",
        title: "Étudiants en Ingénierie et Industrie",
        subtitle: "15000",
      },
      {
        img1: "../assets/f5.png",
        title: "Étudiants en Logiciel et IT",
        subtitle: "4000",
      },
    ],
    title: "Main-d'œuvre et Talent",
    learnMore: "En Savoir Plus",
    buttonText: "En Savoir Plus",
    moreIcon: "../assets/contactus.png",
    specialText: "Les Personnes les Plus Compétitives au Bon Endroit",
  },
  // Add other languages here...
};



const WorkForce = () => {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null); // Reference to the element
  const counterRefs = useRef([]); // Array of refs
  const [inViewIndexes, setInViewIndexes] = useState([]); // Array of indexes of elements in view

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);




  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/invest");
    window.scrollTo(0, 0);
  };


  const {
    diss,
    title,
    subtitle,
    learnMore,
    buttonText,
    dis,
    moreIcon,
    specialText,
  } = translations[language];

  useEffect(() => {
    console.clear();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = counterRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setInViewIndexes((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
              console.log("inview", index);
              observer.unobserve(entry.target); // Stop observing once counted up
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe each stat element
    counterRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [diss, counterRefs]);

  /**************************************************************** */

  return (
    <div
      className="distance-border"
      style={{
        backgroundImage: `url(../assets/workforce.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        color: "#000",
        borderTop: "5px solid #efbcbc",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <div
          className="row d-flex align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="col-lg-6 col-md-4 col-sm-6"></div>
          <div className="col-lg-6 col-md-8 col-sm-6">
            <h3
              // data-aos="fade-in"
              style={{ fontWeight: "bold", color: "#000" }}>
              {title}
              <br />
            </h3>

            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ marginTop: "20px", width: "100%" }}
            >
              {diss.map((dis, index) => (
                <div

                  // data-aos="fade-in"
                  delay={index * 100}
                  key={index}
                  className="col-lg-4 col-md-5 col-sm-6"
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
                        // data-aos="fade-in"
                        src={dis.img1}
                        style={{
                          padding: "10px",
                          width: "auto",
                          height: "80%",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <p
                    // data-aos="fade-up"
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      textAlign: "center",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      color: "#d65757",
                    }}
                  >
                    {dis.title}
                  </p>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "11px",
                      marginTop: "0px",
                      textAlign: "center",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                    ref={(el) => (counterRefs.current[index] = el)} // Set individual refs
                  >

                    {
                      inViewIndexes.includes(index) ? (
                        <CountUp
                          start={0}
                          end={dis.subtitle}
                          duration={2.75}
                          ref={counterRef}
                        />
                      ) : (
                        0
                      )
                    }
                  </div>
                </div>
              ))}

              {/* Example empty divs, replace with your actual content */}
              <div
                className="col-lg-4 col-md-5 col-sm-6"
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
              ></div>

              <div
                className="col-lg-4 col-md-5 col-sm-6"
                style={{
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
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  {specialText}
                </p>

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
                  }}
                  onClick={handleButtonClick}
                >
                  {buttonText}{" "}
                  <img
                    src="../assets/contactus.png" // Replace with correct image path
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkForce;
