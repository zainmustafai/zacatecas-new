import React, { useState,useEffect } from "react";
import Cookies from "js-cookie";

// Language text objects
const texts = {
  en: {
    title: "MAJOR SEA PORTS",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  es: {
    title: "PRINCIPALES PUERTOS MARÍTIMOS",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  de: {
    title: "WICHTIGE SEEHÄFEN",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  ja: {
    title: "主要な海港",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  zh: {
    title: "主要海港",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  ko: {
    title: "주요 해항",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  zh_CN: {
    title: "主要海港",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  zh_TW: {
    title: "主要海港",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
  fr: {
    title: "PRINCIPAUX PORTS MARITIMES",
    seas: [
      { img: "../assets/s1.png", title: "Mazatlán", subtitle: "Sinaloa", dis: "536" },
      { img: "../assets/s2.png", title: "Altamira", subtitle: "Tamaulipas", dis: "623" },
      { img: "../assets/s3.png", title: "Manzanillo", subtitle: "Colima", dis: "621" },
      { img: "../assets/s4.png", title: "Lázaro Cárdenas", subtitle: "Michoacán", dis: "733" },
      { img: "../assets/s5.png", title: "Veracruz", subtitle: "Veracruz", dis: "945" },
      { img: "../assets/s6.png", title: "Tuxpan", subtitle: "Veracruz", dis: "811" },
    ],
  },
};

export default function MajorSeaPorts() {
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
  const { title, seas } = texts[selectedLanguage];

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ margin: "50px 10px", color: "#000" }}
    >
      <div className="col-lg-10 col-md-12" style={{ padding: "30px" }}>
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>{title}</h3>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ marginTop: "20px", width: "100%" }}
        >
          {seas.map((sea, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-5 col-sm-6"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "5px",
                padding: "10px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                margin: "10px",
              }}
            >
              <div style={{ width: "40%", marginRight: "20px" }}>
                <img
                  src={sea.img}
                  alt="Left Image"
                  style={{ width: "100%", height: "auto", borderRadius: "5px" }}
                />
              </div>
              <div style={{ width: "60%" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                >
                  {sea.title}
                </p>
                <p style={{ fontWeight: "500",minHeight:'50px' }}>
                  {sea.subtitle} –{" "}
                  <span style={{ color: "#d65757" }}> {sea.dis} km </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
