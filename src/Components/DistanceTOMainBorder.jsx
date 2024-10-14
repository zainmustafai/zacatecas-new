import React, { useState,useEffect } from "react";
import Cookies from "js-cookie";

// Language text objects
const texts = {
  en: {
    title: "DISTANCE TO THE MAIN BORDER CROSSINGS TO THE USA",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  es: {
    title: "DISTANCIA A LOS PRINCIPALES CRUCES FRONTERIZOS CON EE.UU.",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  de: {
    title: "ENTFERNUNG ZU DEN WICHTIGSTEN GRENZÜBERGÄNGEN ZU DEN USA",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  ja: {
    title: "アメリカへの主要な国境通過点までの距離",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  zh: {
    title: "到美国主要边境口岸的距离",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  ko: {
    title: "미국 주요 국경 횡단까지의 거리",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  zh_CN: {
    title: "到美国主要边境口岸的距离",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  zh_TW: {
    title: "到美國主要邊境口岸的距離",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
  fr: {
    title: "DISTANCE AUX PRINCIPAUX POINTS DE PASSAGE FRONTALIERS VERS LES ÉTATS-UNIS",
    diss: [
      { title: "Nuevo Laredo", subtitle: "Tamaulipas", dis: "696" },
      { title: "Reynosa", subtitle: "Tamaulipas", dis: "709" },
      { title: "Matamoros", subtitle: "Tamaulipas", dis: "959" },
      { title: "Cd. Juárez", subtitle: "Chihuahua", dis: "1225" },
      { title: "Tijuana", subtitle: "Baja California", dis: "2293" },
    ],
  },
};

export default function DistanceTOMainBorder() {
  // Get selected language from cookies
  const [selectedLanguage,setselectedLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setselectedLanguage(savedLanguage);
      }
      // console.log(selectedLanguage);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Retrieve text based on selected language
  const { title, diss } = texts[selectedLanguage];

  return (
    <div
      className="distance-border"
      style={{
        backgroundImage: `url(../assets/distance.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="col-lg-10 col-md-12 col-sm-6  d-flex flex-column align-items-center justify-content-center">
        <div className="row  d-flex flex-column align-items-center justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-6">
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
              {title}
            </h3>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-12 col-md-6 d-flex align-items-center justify-content-center">
        <div
          className="row  d-flex align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          {diss.map((dis, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-6"
              style={{ borderRight: "1px solid #fff", marginTop: "10px" }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "0px",
                }}
              >
                {dis.title}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  marginBottom: "0px",
                }}
              >
                {dis.subtitle} –{" "}
                <span style={{ fontWeight: "500" }}> {dis.dis} km</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-10 col-md-12 col-sm-6  d-flex flex-column align-items-center justify-content-center">
        <img
          src="../assets/distance.gif"
          alt=""
          style={{ width: "100%", height: "auto", border: "10px solid #efbcbc", marginBottom: "-250px", marginTop: "30px" }}
        />
      </div>
    </div>
  );
}
