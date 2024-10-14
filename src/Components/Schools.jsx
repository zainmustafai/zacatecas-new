import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const texts = {
  en: {
    heading: "SCHOOLS",
    description:
      "There are a variety of international schools that teach in foreign languages from pre-school to middle and high school.",
    locationDescription:
      "All of them are in the City of Guadalupe, around 15 minutes away by car from Guadalupe Industrial Park, and around 25 minutes away by car from Calera Industrial Parks. Regarding the neighborhoods mentioned above, these schools are located in a range of 5-20 minutes away by car.",
  },
  es: {
    heading: "ESCUELAS",
    description:
      "Hay una variedad de escuelas internacionales que enseñan en idiomas extranjeros desde preescolar hasta secundaria y preparatoria.",
    locationDescription:
      "Todas están ubicadas en la Ciudad de Guadalupe, aproximadamente a 15 minutos en coche del Parque Industrial Guadalupe y a unos 25 minutos en coche de los Parques Industriales de Calera. En cuanto a los barrios mencionados anteriormente, estas escuelas están ubicadas en un rango de 5 a 20 minutos en coche.",
  },
  de: {
    heading: "SCHULEN",
    description:
      "Es gibt eine Vielzahl von internationalen Schulen, die vom Kindergarten bis zur Mittel- und Oberstufe in Fremdsprachen unterrichten.",
    locationDescription:
      "Alle befinden sich in der Stadt Guadalupe, etwa 15 Autominuten vom Industriepark Guadalupe und etwa 25 Autominuten von den Industrieparks Calera entfernt. Bezüglich der oben genannten Wohngegenden befinden sich diese Schulen innerhalb von 5-20 Autominuten Entfernung.",
  },
  ja: {
    heading: "学校",
    description:
      "プリスクールから中学校、高校まで、外国語で教育を行う国際学校がさまざまあります。",
    locationDescription:
      "すべてがグアダルーペ市にあり、グアダルーペ工業団地から車で約15分、カレラ工業団地から車で約25分です。上記の地区については、これらの学校は車で5〜20分の範囲内に位置しています。",
  },
  zh: {
    heading: "学校",
    description:
      "有多种国际学校提供从幼儿园到中学和高中的外语教学。",
    locationDescription:
      "所有学校都位于瓜达卢佩市，距离瓜达卢佩工业园约15分钟车程，距离卡莱拉工业园约25分钟车程。关于上述社区，这些学校的位置距离约为5-20分钟车程。",
  },
  ko: {
    heading: "학교",
    description:
      "유치원부터 중학교, 고등학교까지 외국어로 교육을 제공하는 다양한 국제학교가 있습니다.",
    locationDescription:
      "모든 학교는 구아달루페 시내에 위치하고 있으며, 구아달루페 산업단지에서 차로 약 15분, 칼레라 산업단지에서 차로 약 25분 거리에 있습니다. 위에 언급된 지역들과 관련하여 이 학교들은 차로 5-20분 거리에 있습니다.",
  },
  zh_tw: {
    heading: "學校",
    description:
      "有多種國際學校提供從幼稚園到中學和高中的外語教學。",
    locationDescription:
      "所有學校都位於瓜達盧佩市，距離瓜達盧佩工業園區約15分鐘車程，距離卡雷拉工業園區約25分鐘車程。關於上述社區，這些學校的位置距離約為5-20分鐘車程。",
  },
  fr: {
    heading: "ÉCOLES",
    description:
      "Il existe une variété d'écoles internationales qui enseignent dans des langues étrangères, de la maternelle au lycée.",
    locationDescription:
      "Toutes ces écoles sont situées dans la ville de Guadalupe, à environ 15 minutes en voiture du parc industriel de Guadalupe et à environ 25 minutes en voiture des parcs industriels de Calera. En ce qui concerne les quartiers mentionnés ci-dessus, ces écoles sont situées dans un rayon de 5 à 20 minutes en voiture.",
  },
};

const schoolsData = {
  en: [
    { img: "../assets/ss1.png", title: "Instituto Educativo Ammadeus" },
    { img: "../assets/ss2.png", title: "Colegio Everest Zacatecas" },
    { img: "../assets/ss3.png", title: "Instituto Educativo de Zacatecas" },
    { img: "../assets/ss4.png", title: "Tecnológico de Monterrey" },
  ],
  es: [
    { img: "../assets/ss1.png", title: "Instituto Educativo Ammadeus" },
    { img: "../assets/ss2.png", title: "Colegio Everest Zacatecas" },
    { img: "../assets/ss3.png", title: "Instituto Educativo de Zacatecas" },
    { img: "../assets/ss4.png", title: "Tecnológico de Monterrey" },
  ],
  de: [
    { img: "../assets/ss1.png", title: "Instituto Educativo Ammadeus" },
    { img: "../assets/ss2.png", title: "Colegio Everest Zacatecas" },
    { img: "../assets/ss3.png", title: "Instituto Educativo de Zacatecas" },
    { img: "../assets/ss4.png", title: "Tecnológico de Monterrey" },
  ],
  ja: [
    { img: "../assets/ss1.png", title: "インスティトゥート・エデュカティーボ・アマデウス" },
    { img: "../assets/ss2.png", title: "コレヒオ・エベレスト・サカテカス" },
    { img: "../assets/ss3.png", title: "インスティトゥート・エデュカティーボ・デ・サカテカス" },
    { img: "../assets/ss4.png", title: "モンテレイ工科大学" },
  ],
  zh: [
    { img: "../assets/ss1.png", title: "阿玛迪斯教育学院" },
    { img: "../assets/ss2.png", title: "埃弗勒斯特学院萨卡特卡斯" },
    { img: "../assets/ss3.png", title: "萨卡特卡斯教育学院" },
    { img: "../assets/ss4.png", title: "蒙特雷理工大学" },
  ],
  ko: [
    { img: "../assets/ss1.png", title: "아마데우스 교육 연구소" },
    { img: "../assets/ss2.png", title: "에버레스트 자카테카스" },
    { img: "../assets/ss3.png", title: "자카테카스 교육 연구소" },
    { img: "../assets/ss4.png", title: "몬테레이 과학기술 대학교" },
  ],
  zh_tw: [
    { img: "../assets/ss1.png", title: "阿瑪迪斯教育學院" },
    { img: "../assets/ss2.png", title: "艾佛勒斯特薩卡特卡斯學院" },
    { img: "../assets/ss3.png", title: "薩卡特卡斯教育學院" },
    { img: "../assets/ss4.png", title: "蒙特雷理工學院" },
  ],
  fr: [
    { img: "../assets/ss1.png", title: "Institut Éducatif Ammadeus" },
    { img: "../assets/ss2.png", title: "Collège Everest Zacatecas" },
    { img: "../assets/ss3.png", title: "Institut Éducatif de Zacatecas" },
    { img: "../assets/ss4.png", title: "Tecnológico de Monterrey" },
  ],
};

export default function Schools() {
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, description, locationDescription } = texts[language];
  const schools = schoolsData[language];

  return (
    <div className="row d-flex justify-content-center" style={{ margin: "50px 10px" }}>
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3 style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}>
          {heading}
        </h3>

        <div className="col-lg-7 col-md-9 col-sm-6">
          <p style={{ fontWeight: "500", fontSize: "14px", color: "#000", textAlign: "center" }}>
            {description}
          </p>
        </div>

        <div className="row d-flex justify-content-center align-items-center" style={{ marginTop: "10px", marginLeft: "0px", marginRight: "0px", width: "100%", position: "relative" }}>
          <img src="../assets/dots.png" alt="Top Left" className="dots" />
          {schools.map((school, index) => (
            <div 
            key={index} className="col-lg-3 col-md-5 col-sm-6" style={{ backgroundColor: "#00000000", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0)", marginTop: "10px", display: "flex", padding: "0px", flexDirection: "column", alignItems: "center", position: "relative", borderRadius: "10px" }}>
              <img src={school.img} alt="" style={{ width: "90%", height: "auto", borderRadius: "10px" }} />
              <div style={{ backgroundColor: "#fff", marginRight: "10px", marginLeft: "10px", height: "100px", marginTop: "-20px", width: "80%", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "3px solid #d65757", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}>
                <p style={{ fontWeight: "bold", padding: "10px", textAlign: "center", margin: "0px" }}>
                  {school.title}
                </p>
              </div>
            </div>
          ))}
          <img src="../assets/circle.png" alt="Top Left" className="circle" />
        </div>

        <div className="col-lg-9 col-md-11 col-sm-6">
          <p style={{ fontWeight: "500", fontSize: "14px", color: "#000", textAlign: "center", marginTop: "40px" }}>
            {locationDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
