import React, { useState, useEffect, useContext, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cookies from 'js-cookie'
import emailjs from '@emailjs/browser';
// Example context to manage language state
const LanguageContext = React.createContext();


const translations = {
  en: {
    title: "CONNECT US",
    description: "Receive a productive business agenda based on the needs of your project in Zacatecas.",
    bookHere: "See Available Date, Book Here",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekDays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    transformMessage: "Zacatecas is the State that Transforms Mexico!",
    appointmentButton: "Set an online appointment",
    hearFromYou: "We Want to Hear from you",
    emailButton: "Send Us An Email",
  },
  es: {
    title: "CONECTÉMONOS",
    description: "Reciba una agenda de negocios productiva basada en las necesidades de su proyecto en Zacatecas.",
    bookHere: "Ver fecha disponible, reserve aquí",
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    weekDays: ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"],
    transformMessage: "¡Zacatecas es el estado que transforma México!",
    appointmentButton: "Programar una cita en línea",
    hearFromYou: "Queremos saber de ti",
    emailButton: "Envíanos un correo electrónico",
  },
  de: {
    title: "LASSEN SIE UNS VERBINDEN",
    description: "Erhalten Sie eine produktive Geschäftsagenda basierend auf den Bedürfnissen Ihres Projekts in Zacatecas.",
    bookHere: "Siehe verfügbares Datum, hier buchen",
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    weekDays: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
    transformMessage: "Zacatecas ist der Staat, der Mexiko verwandelt!",
    appointmentButton: "Online-Termin vereinbaren",
    hearFromYou: "Wir möchten von Ihnen hören",
    emailButton: "Senden Sie uns eine E-Mail",
  },
  ja: {
    title: "つながりましょう",
    description: "サカテカスでのプロジェクトのニーズに基づいた生産的なビジネスアジェンダを受け取りましょう。",
    bookHere: "利用可能な日付を確認して、ここで予約してください",
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    weekDays: ["日", "月", "火", "水", "木", "金", "土"],
    transformMessage: "サカテカスはメキシコを変える州です！",
    appointmentButton: "オンライン予約を設定する",
    hearFromYou: "あなたの声を聞かせてください",
    emailButton: "メールを送る",
  },
  zh: {
    title: "让我们联系",
    description: "根据您在萨卡特卡斯项目的需求，接收富有成效的商务议程。",
    bookHere: "查看可用日期，在这里预订",
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    weekDays: ["日", "一", "二", "三", "四", "五", "六"],
    transformMessage: "萨卡特卡斯是改变墨西哥的州！",
    appointmentButton: "设置在线预约",
    hearFromYou: "我们想听听您的意见",
    emailButton: "给我们发电子邮件",
  },
  ko: {
    title: "우리 연결하다",
    description: "자카테카스 프로젝트의 필요에 따라 생산적인 비즈니스 일정을 받아보세요.",
    bookHere: "사용 가능한 날짜 확인 및 예약하기",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    weekDays: ["일", "월", "화", "수", "목", "금", "토"],
    transformMessage: "자카테카스는 멕시코를 변화시키는 주입니다!",
    appointmentButton: "온라인 약속 잡기",
    hearFromYou: "당신의 소식을 듣고 싶습니다",
    emailButton: "이메일 보내기",
  },
  zh: {
    title: "让我们联系",
    description: "根据您在萨卡特卡斯项目的需求，接收富有成效的商务议程。",
    bookHere: "查看可用日期，在这里预订",
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    weekDays: ["日", "一", "二", "三", "四", "五", "六"],
    transformMessage: "萨卡特卡斯是改变墨西哥的州！",
    appointmentButton: "设置在线预约",
    hearFromYou: "我们想听听您的意见",
    emailButton: "给我们发电子邮件",
  },
  fr: {
    title: "CONNECTONS-NOUS",
    description: "Recevez un agenda d'affaires productif basé sur les besoins de votre projet à Zacatecas.",
    bookHere: "Voir la date disponible, réservez ici",
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    weekDays: ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"],
    transformMessage: "Zacatecas est l'État qui transforme le Mexique !",
    appointmentButton: "Prenez un rendez-vous en ligne",
    hearFromYou: "Nous voulons avoir de vos nouvelles",
    emailButton: "Envoyez-nous un email",
  },
};

export default function LetConnectUs() {
  const form = useRef();

  const [currentMonth, setCurrentMonth] = useState(new Date()); // Initialize with current date
  const [currentWeek, setCurrentWeek] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const today = new Date();
  // const { language } = useContext(LanguageContext);

  useEffect(() => {
    const now = new Date();
    setCurrentMonth(now); // Set currentMonth as a Date object

    const startOfWeek = now.getDate() - now.getDay();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(now.getFullYear(), now.getMonth(), startOfWeek + i);
      dates.push(date.getDate());
    }
    setCurrentWeek(dates);
  }, []);

  // Function to get all weeks of a given month
  const getWeeksOfMonth = (currentMonth) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const weeks = [];

    // Start from the 1st day of the month
    let currentDay = new Date(year, month, 1);
    let week = [];

    // Push empty cells for days before the start of the current week
    for (let i = 0; i < currentDay.getDay(); i++) {
      week.push(null);
    }

    // Iterate through each day of the month
    while (currentDay.getMonth() === month) {
      week.push(currentDay.getDate());

      // If it's the last day of the week (Saturday), push the week to weeks array and start a new week
      if (currentDay.getDay() === 6) {
        weeks.push(week);
        week = [];
      }

      // Move to the next day
      currentDay.setDate(currentDay.getDate() + 1);
    }

    // Push the last week if it's not yet pushed
    if (week.length > 0) {
      // Push empty cells to complete the last row if necessary
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    return weeks;
  };

  // Get all weeks of the current month
  const weeksOfMonth = getWeeksOfMonth(currentMonth);

  // Function to navigate to previous month
  const decreaseMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1));
  };

  // Function to navigate to next month
  const increaseMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1));
  };

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

  const { title, description, bookHere, monthNames, weekDays, transformMessage, appointmentButton, hearFromYou, emailButton } =
    translations[language];


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(appointment)
    emailjs
      .sendForm('service_9xqhxd6', 'template_j6nil4o', form.current, {
        publicKey: 'lVuLy7tM7kqbTdz7k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const handleClick = (e) => {
    // console.log(e.target.textContent + ' ' + monthNames[currentMonth.getMonth()])

    setAppointment(e.target.textContent + ' ' + monthNames[currentMonth.getMonth()])

    const elements = document.querySelectorAll('.day p');

    elements.forEach(element => {
      element.classList.remove('activeDay');
    });
    e.target.classList.add('activeDay');
  }

  return (
    <div
      className="row d-flex justify-content-center"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        padding: "50px 20px",
        margin: "0px",
      }}
    >
      <h3
        data-aos="fade-in"
        data-aos-delay="100"
        style={{ fontWeight: "bold", textAlign: "center" }}>{title}</h3>

      <p style={{ fontWeight: "500", fontSize: "14px", textAlign: "center" }}>{description}</p>
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <div
          data-aos="zoom-in"
          className="row d-flex align-items-center justify-content-center"
          style={{
            width: "100%",
            padding: "0px 0px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <div
            className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center "
            style={{ padding: "30px 10px" }}
          >
            <p style={{ fontWeight: "bold", textAlign: "center" }}>{bookHere}</p>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#D3413E",
                borderRadius: "30px",
                width: "160px",
                marginLeft: "auto",
                marginRight: "auto",
                zIndex: "1",
                marginBottom: "-20px",
              }}
            >
              <button
                className="d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#BE3C37",
                  margin: "5px",
                }}
                onClick={decreaseMonth}
              >
                <FaArrowLeft style={{ color: "#fff" }} />
              </button>
              <p style={{ fontWeight: "bold", color: "#fff", margin: "5px auto" }}>
                {monthNames[currentMonth.getMonth()]}
              </p>
              <button
                className="d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#BE3C37",
                  margin: "5px",
                }}
                onClick={increaseMonth}
              >
                <FaArrowRight style={{ color: "#fff" }} />
              </button>
            </div>
            <div
              style={{
                padding: "10px 0px",
                backgroundColor: "#E8E7E7",
                width: "100%",
                height: "100%",
                zIndex: "0",
                overflowX: "auto",
              }}
            ></div>
            <div
              style={{
                padding: "30px 20px",
                backgroundColor: "#E8E7E7",
                width: "100%",
                height: "100%",
                zIndex: "0",
                overflowX: "auto",
              }}
            >


              <div style={{ width: "100%" }} className="d-flex">
                {weekDays.map((day, idx) => (
                  <p

                    key={idx}
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      marginRight: "auto",
                      marginLeft: "auto",
                      minWidth: "40px",
                      textAlign: "center",
                    }}
                  >
                    {day}
                  </p>
                ))}
              </div>
              {weeksOfMonth.map((week, index) => (
                <div key={index} style={{ display: "flex", margin: "0px" }}>
                  {week.map((date, idx) => (
                    <div key={idx} className={'day'} style={{ display: "flex", margin: "0px", width: "100%" }}>
                      {today.getDate() === date && today.getMonth() === currentMonth.getMonth() ? (
                        <p
                          onClick={handleClick}
                          className="activeDay"
                          style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            margin: "0",
                            marginRight: "auto",
                            marginLeft: "auto",
                            minWidth: "40px",
                            textAlign: "center",
                            borderRadius: date ? "50%" : "none", // Round only if date exists
                            padding: date ? "10px" : "0px", // Add padding only if date exists
                            // backgroundColor: date ? "#9f342e" : "transparent", // Gray background for dates
                            // color: date ? "#fff" : "#E8E7E7", // Black text for dates, hide empty cells
                          }}
                        >
                          {date || ""}
                        </p>
                      ) : (
                        <p
                          onClick={handleClick}
                          className="day"
                          style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            margin: "0",
                            marginRight: "auto",
                            marginLeft: "auto",
                            minWidth: "40px",
                            textAlign: "center",
                            borderRadius: date ? "50%" : "none", // Round only if date exists
                            padding: date ? "10px" : "0px", // Add padding only if date exists
                            // backgroundColor: date ? "#E8E7E7" : "transparent", // Gray background for dates
                            // color: date ? "#000" : "#E8E7E7", // Black text for dates, hide empty cells
                          }}
                        >
                          {date || ""}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center"
            style={{
              padding: "30px",
              backgroundColor: "#FFDDDD",
              height: "100%",
            }}
          >
            <h5 style={{ fontWeight: "bold", textAlign: "center" }}>{transformMessage}</h5>
            <button
              style={{
                color: "#fff",
                backgroundColor: "#d65757",
                borderRadius: "30px",
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              onClick={sendEmail}
            >
              {appointmentButton}
            </button>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <button
                style={{
                  backgroundImage: `url(../assets/b1.png)`,
                  backgroundSize: "cover",
                  width: "43px",
                  height: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src="../assets/bb1.png"
                  alt=""
                  style={{ width: "25px", height: "auto", marginBottom: "5px" }}
                />
              </button>
              <button
                style={{
                  backgroundImage: `url(../assets/b2.png)`,
                  backgroundSize: "cover",
                  width: "43px",
                  height: "43px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginLeft: "10px",
                }}
              >
                <img
                  src="../assets/bb2.png"
                  alt=""
                  style={{ width: "25px", height: "auto" }}
                />
              </button>
              <button
                style={{
                  width: "43px",
                  height: "43px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginLeft: "10px",
                }}
              >
                <img
                  src="../assets/b3.png"
                  alt=""
                  style={{ width: "35px", height: "auto" }}
                />
              </button>
            </div>
            <div
              style={{
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#F3F3F1",
                padding: "20px",
                marginTop: "20px",
              }}
              className=" d-flex flex-column align-items-center justify-content-center"
            >
              <h6 style={{ fontWeight: "bold", textAlign: "center" }}>{hearFromYou}</h6>
              <a
                href="mailto:yannick.berchtold@zacatecas.gob.mx "
                style={{
                  color: "#fff",
                  backgroundColor: "#9E342D",
                  borderRadius: "30px",
                  width: "160px",
                  padding: "10px",
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecoration: "none"
                }}
              >
                {emailButton}
              </a>
            </div>
          </div>
        </div>

      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      />
      {/* <img src="../assets/circle.png" alt="Top Left" className="circle" /> */}
      <form ref={form} onSubmit={sendEmail} className="mt-10">
        <input type="text" value={appointment} name="appointment" readOnly />
      </form>
    </div>
  );
}
