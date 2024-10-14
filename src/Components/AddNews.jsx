import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import CardImage1 from "./Card Image1.png"; // Import the image
import './addnews.css'
import app from '../firebase'
import {getDatabase, ref, get} from "firebase/database"

const newsItems = {
  en: [
    {
      img: "../assets/l1.png",
      title:
        "In a historic event, Governor David Monreal provides telephone and Internet connection to the Zacatecan semi-desert",
      date: "May 30, 2023",
      des: "This Tuesday, the President inaugurated an antenna in the Tanque Nuevo community Salvador",
      learnMore: "Learn More",
    },
    {
      img: "../assets/l2.png",
      title:
        "With the support of young entrepreneurs, the economic boost of Zacatecas is already a reality: Governor David Monreal Ávila",
      date: "May 26, 2023",
      des: "The president inaugurates the activities of the second edition of the Creo Mx event",
      learnMore: "Learn More",
    },
    {
      img: "../assets/l3.png",
      title:
        "With more than 200 vacancies, the Government of Zacatecas holds the Employment Fair in Sombrerete 20 companies participated",
      date: "May 24, 2023",
      des: "20 companies participated that offered vacancies for operators, technicians and professionals",
      learnMore: "Learn More",
    },
  ],
  es: [
    {
      img: "../assets/l1.png",
      title:
        "En un evento histórico, el gobernador David Monreal proporciona conexión telefónica e Internet al semidesierto zacatecano",
      date: "30 de mayo de 2023",
      des: "Este martes, el presidente inauguró una antena en la comunidad Tanque Nuevo Salvador",
      learnMore: "Saber más",
    },
    {
      img: "../assets/l2.png",
      title:
        "Con el apoyo de jóvenes emprendedores, el impulso económico de Zacatecas ya es una realidad: gobernador David Monreal Ávila",
      date: "26 de mayo de 2023",
      des: "El presidente inaugura las actividades de la segunda edición del evento Creo Mx",
      learnMore: "Saber más",
    },
    {
      img: "../assets/l3.png",
      title:
        "Con más de 200 vacantes, el Gobierno de Zacatecas realiza la Feria del Empleo en Sombrerete participaron 20 empresas",
      date: "24 de mayo de 2023",
      des: "Participaron 20 empresas que ofrecieron vacantes para operadores, técnicos y profesionales",
      learnMore: "Saber más",
    },
  ],
  de: [
    {
      img: "../assets/l1.png",
      title:
        "In einem historischen Ereignis stellt Gouverneur David Monreal Telefon- und Internetverbindung zur halbwüstenartigen Zacatecan bereit",
      date: "30. Mai 2023",
      des: "An diesem Dienstag weihte der Präsident eine Antenne in der Gemeinde Tanque Nuevo Salvador ein",
      learnMore: "Mehr erfahren",
    },
    {
      img: "../assets/l2.png",
      title:
        "Mit Unterstützung junger Unternehmer ist der wirtschaftliche Aufschwung von Zacatecas bereits Realität: Gouverneur David Monreal Ávila",
      date: "26. Mai 2023",
      des: "Der Präsident eröffnet die Aktivitäten der zweiten Ausgabe der Veranstaltung Creo Mx",
      learnMore: "Mehr erfahren",
    },
    {
      img: "../assets/l3.png",
      title:
        "Mit mehr als 200 offenen Stellen veranstaltet die Regierung von Zacatecas die Arbeitsmesse in Sombrerete, an der 20 Unternehmen teilnahmen",
      date: "24. Mai 2023",
      des: "Es nahmen 20 Unternehmen teil, die Stellen für Operatoren, Techniker und Fachkräfte anboten",
      learnMore: "Mehr erfahren",
    },
  ],
  ja: [
    {
      img: "../assets/l1.png",
      title:
        "ザカテカスの半砂漠に電話とインターネット接続を提供する州知事デビッド・モンレアルによる歴史的なイベント",
      date: "2023年5月30日",
      des: "今週火曜日、大統領はサルバドルのタンケ・ヌエボ・コミュニティにアンテナを落成しました",
      learnMore: "詳細を見る",
    },
    {
      img: "../assets/l2.png",
      title:
        "若手起業家の支援を受けて、ザカテカスの経済の活性化は既に現実となっています：デビッド・モンレアル・アビラ知事",
      date: "2023年5月26日",
      des: "大統領はCreo Mxイベントの第2版の活動を開始しました",
      learnMore: "詳細を見る",
    },
    {
      img: "../assets/l3.png",
      title:
        "ザカテカス州政府はソンブレレテで雇用フェアを開催、20社が参加しました",
      date: "2023年5月24日",
      des: "参加した20社は、運転手、技術者、専門家向けの空き職を提供しました",
      learnMore: "詳細を見る",
    },
  ],
  zh: [
    {
      img: "../assets/l1.png",
      title:
        "在历史性事件中，州长大卫·蒙雷尔为萨卡特卡斯半沙漠地区提供电话和互联网连接",
      date: "2023年5月30日",
      des: "本周二，总统在Tanque Nuevo Salvador社区为一座天线举行了落成仪式",
      learnMore: "了解更多",
    },
    {
      img: "../assets/l2.png",
      title:
        "在年轻企业家的支持下，萨卡特卡斯的经济复苏已成现实：州长大卫·蒙雷尔·阿维拉",
      date: "2023年5月26日",
      des: "总统开启了Creo Mx活动的第二版",
      learnMore: "了解更多",
    },
    {
      img: "../assets/l3.png",
      title: "萨卡特卡斯政府在Sombrerete举办就业博览会，有20家公司参加",
      date: "2023年5月24日",
      des: "参与了20家公司，提供运营商、技术人员和专业人士的职位空缺",
      learnMore: "了解更多",
    },
  ],
  ko: [
    {
      img: "../assets/l1.png",
      title: "사카테카스, 사카테카스 반사막 지역에 전화 및 인터넷 연결 제공",
      date: "2023년 5월 30일",
      des: "이번 화요일, 대통령이 Tanque Nuevo Salvador 커뮤니티에 안테나를 준비했습니다.",
      learnMore: "자세히 알아보기",
    },
    {
      img: "../assets/l2.png",
      title:
        "젊은 기업인의 지원으로 사카테카스의 경제 부양은 이미 현실이 됐습니다: 사카테카스 주지사 David Monreal Ávila",
      date: "2023년 5월 26일",
      des: "대통령은 Creo Mx 이벤트 두 번째 판의 활동을 시작했습니다.",
      learnMore: "자세히 알아보기",
    },
    {
      img: "../assets/l3.png",
      title:
        "사카테카스 주정부, Sombrerete에서 고용 박람회 개최 20개 기업 참가",
      date: "2023년 5월 24일",
      des: "운영자, 기술자 및 전문가를 위한 공석을 제공한 20개 기업이 참여했습니다.",
      learnMore: "자세히 알아보기",
    },
  ],
  fr: [
    {
      img: "../assets/l1.png",
      title:
        "Dans un événement historique, le gouverneur David Monreal fournit une connexion téléphonique et Internet au semi-désert de Zacatecas",
      date: "30 mai 2023",
      des: "Ce mardi, le président a inauguré une antenne dans la communauté de Tanque Nuevo Salvador",
      learnMore: "En savoir plus",
    },
    {
      img: "../assets/l2.png",
      title:
        "Avec le soutien de jeunes entrepreneurs, la relance économique de Zacatecas est déjà une réalité : gouverneur David Monreal Ávila",
      date: "26 mai 2023",
      des: "Le président inaugure les activités de la deuxième édition de l'événement Creo Mx",
      learnMore: "En savoir plus",
    },
    {
      img: "../assets/l3.png",
      title:
        "Avec plus de 200 postes vacants, le gouvernement de Zacatecas organise la Foire à l'emploi à Sombrerete où 20 entreprises ont participé",
      date: "24 mai 2023",
      des: "20 entreprises ont participé en offrant des postes pour des opérateurs, des techniciens et des professionnels",
      learnMore: "En savoir plus",
    },
  ],
};




export default function AddNews({}) {
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

  const currentNewsItems = newsItems[language] || newsItems.en;


  const [newsArray, setNewsArray] =useState([])
    
  const fetchNews =  async () => {
      const db=getDatabase(app)
      const newDocRef = ref(db, "zectacus/news")
      const snapshot = await get(newDocRef)
      if(snapshot.exists()){

          const myData = snapshot.val()
          const myTempArray = Object.keys(myData).map(
              myFireId => {
                  return {
                      ...myData[myFireId],
                      id: myFireId
                  }
              }
          )


          setNewsArray(myTempArray)
         
      }

  }

  // fetchNews();


  useEffect(() => {
      fetchNews();
     
    }, []); // Dependency array

  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center"
        style={{ margin: "50px 10px" }}
      >
        <div className="col-lg-8 col-md-12 py-5">
          {/* <h3 style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}>
          SECRETARIA DE ECONOMIA <br />
          {language === "en"
            ? "LATEST NEWS"
            : language === "es"
            ? "ÚLTIMAS NOTICIAS"
            : language === "de"
            ? "NEUESTE NACHRICHTEN"
            : "TRANSLATION NEEDED"}
        </h3> */}

          <div
            className="row"
            style={{
              marginTop: "10px",
              marginLeft: "0px",
              marginRight: "0px",
              width: "100%",
              position: "relative",
            }}
          >
            <img src="../assets/dots.png" alt="Top Left" className="dots" />
            {newsArray.map((item, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-5 col-sm-6 mb-5"
                style={{
                  backgroundColor: "#00000000",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0)",
                  marginTop: "10px",
                  display: "flex",
                  padding: "0px",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.imgPath}
                  alt=""
                  style={{ width: "90%", height: "auto", borderRadius: "10px" }}
                />
                <div
                  style={{
                    backgroundColor: "#fff",
                    marginRight: "10px",
                    marginLeft: "10px",
                    minHeight: "260px",
                    marginTop: "-20px",
                    width: "80%",
                    borderRadius: "10px",
                    borderBottom: "3px solid #d65757",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      textAlign: "left",
                      margin: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    {item.title}
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                      <FaCalendarAlt size={16} style={{ color: "#d65757" }} />
                    </div>
                    <p
                      style={{
                        padding: "10px",
                        textAlign: "left",
                        margin: "0px",
                        paddingBottom: "0px",
                        fontSize: "14px",
                      }}
                    >
                      {item.date}
                    </p>
                  </div>

                  <p
                    style={{
                      padding: "10px",
                      textAlign: "left",
                      margin: "0px",
                      paddingBottom: "0px",
                      fontSize: "14px",
                    }}
                  >
                    {item.des}
                  </p>
                  <Link
                    to="/News"
                    style={{
                      padding: "0px",
                      textAlign: "left",
                      margin: "10px",
                      fontSize: "14px",
                      color: "#d65757",
                      fontWeight: "bold",
                      marginBottom: "30px",
                    }}
                  >
                    {item.learnMore}
                  </Link>
                </div>
              </div>
            ))}
            <img src="../assets/circle.png" alt="Top Left" className="circle" />
          </div>
        </div>
        <div className="col-lg-4 col-md-12 py-5" style={{ color: "black" }}>
          <div
            style={{
              display: "flex",
              borderRadius: "34px",
              padding: "10px",
              border: "1px solid #C45050",
              justifyContent: "space-between",
            }}
          >
            <div className="d-flex"><input type="text" placeholder="Search" />
            </div>
            <div class="circle-search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>

          <div
            className="mt-3 "
            style={{
              border: "1px solid #C45050",
            }}
          ></div>

          <h2 className="mt-2">Latest News</h2>

          <div
            className="d-flex p-2 ml-1"
            style={{
              border: "2px solid #EAEAEA",
              borderRadius: "10px",
            }}
          >
            <img src={CardImage1} alt="Card Image 1" />
            <div className="d-flex flex-column ml-3">
              <p>May 28,2024</p>
              <div>Zacatacs is consoildated as a national leader...</div>
              <p>Read More</p>
            </div>
          </div>

          <div
            className="d-flex p-2 ml-1 mt-2"
            style={{
              border: "2px solid #EAEAEA",
              borderRadius: "10px",
            }}
          >
            <img src={CardImage1} alt="Card Image 1" />
            <div className="d-flex flex-column ml-3">
              <p>May 28,2024</p>
              <div>Zacatacs is consoildated as a national leader...</div>
              <p>Read More</p>
            </div>
          </div>

          <div
            className="d-flex p-2 ml-1 mt-2"
            style={{
              border: "2px solid #EAEAEA",
              borderRadius: "10px",
            }}
          >
            <img src={CardImage1} alt="Card Image 1" />
            <div className="d-flex flex-column ml-3">
              <p>May 28,2024</p>
              <div>Zacatacs is consoildated as a national leader...</div>
              <p>Read More</p>
            </div>
          </div>

          <div
            className="d-flex p-2 ml-1 mt-2"
            style={{
              border: "2px solid #EAEAEA",
              borderRadius: "10px",
            }}
          >
            <img src={CardImage1} alt="Card Image 1" />
            <div className="d-flex flex-column ml-3">
              <p>May 28,2024</p>
              <div>Zacatacs is consoildated as a national leader...</div>
              <p>Read More</p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            {" "}
            See more
          </div>
        </div>
      </div>
    </div>
  );
}
