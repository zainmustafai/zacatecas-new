import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Cookies from "js-cookie";
import "./Park1Location.css";

const texts = {
  en: {
    heading: "Location & Connectivity",
    h1: "Zacatecas City",
    h2: "Guadalupe City",
    h3: "Zacatecas Airport",
    h4: "Fresnillo City",
    h5: "Federal Highway 45",
  },
  es: {
    heading: "Ubicación y Conectividad",
    h1: "Ciudad de Zacatecas",
    h2: "Ciudad Guadalupe",
    h3: "Aeropuerto de Zacatecas",
    h4: "Ciudad Fresnillo",
    h5: "Carretera Federal 45",
  },
  fr: {
    heading: "Emplacement & Connectivité",
    h1: "Ville de Zacatecas",
    h2: "Ville de Guadalupe",
    h3: "Aéroport de Zacatecas",
    h4: "Ville de Fresnillo",
    h5: "Route Fédérale 45",
  },
  de: {
    heading: "Standort & Anbindung",
    h1: "Stadt Zacatecas",
    h2: "Stadt Guadalupe",
    h3: "Flughafen Zacatecas",
    h4: "Stadt Fresnillo",
    h5: "Bundesstraße 45",
  },
  ja: {
    heading: "ロケーション & 接続性",
    h1: "サカテカス市",
    h2: "グアダルーペ市",
    h3: "サカテカス空港",
    h4: "フレスニージョ市",
    h5: "連邦高速道路45号",
  },
  zh: {
    heading: "位置与连通性",
    h1: "萨卡特卡斯市",
    h2: "瓜达卢佩市",
    h3: "萨卡特卡斯机场",
    h4: "弗雷斯尼略市",
    h5: "联邦公路45号",
  },
  ko: {
    heading: "위치 및 연결성",
    h1: "자카테카스 시",
    h2: "과달루페 시",
    h3: "자카테카스 공항",
    h4: "프레스니요 시",
    h5: "연방 고속도로 45호",
  },
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.750167, // Latitude in decimal degrees
  lng: -102.442917, // Longitude in decimal degrees
};

export default function Park2Location() {
  const [lang, setLang] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLang(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, h1, h2, h3, h4, h5 } = texts[lang];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAgYjasgFUgwwRT0T8phJIj2ofJOCIaYEY", // Replace with your Google Maps API key
  });

  const onLoad = useCallback(function callback(map) {
    // Optional: Add a marker or other map features if needed
    new window.google.maps.Marker({
      position: center,
      map,
      title: "Your Location", // Optional: Tooltip text for the marker
    });

    // Center the map on the provided location
    map.setCenter(center);
    map.setZoom(10); // Adjust the zoom level as needed
  }, []);

  const onUnmount = useCallback(function callback(map) {
    // You can add any cleanup code here if needed
  }, []);

  return (
    <div
      className="area-border"
      style={{
        width: "100%",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-sm-12" style={{ margin: "auto" }}>
            <div className="Location-Box">
              <div className="d-flex loco-headerbox">
                <div className="mr-2 ml-2">
                  <img src="../assets/locoicon.png" alt="" />
                </div>
                <div className="Location-header">{heading}</div>
              </div>

              <div className="d-flex justify-content-between lightpink-box">
                <div className="d-flex location-font">
                  <div className="mr-2">1</div>
                  <div>{h1}</div>
                </div>
                <div className="location-font">14km / 8.6mi</div>
              </div>

              <div className="d-flex justify-content-between lightwhite-box">
                <div className="d-flex location-font">
                  <div className="mr-2">2</div>
                  <div>{h2}</div>
                </div>
                <div className="location-font">5km / 3.1mi</div>
              </div>

              <div className="d-flex justify-content-between lightpink-box">
                <div className="d-flex location-font">
                  <div className="mr-2">3</div>
                  <div>{h3}</div>
                </div>
                <div className="location-font">36km / 22.3mi</div>
              </div>

              <div className="d-flex justify-content-between lightwhite-box">
                <div className="d-flex location-font">
                  <div className="mr-2">4</div>
                  <div>{h4}</div>
                </div>
                <div className="location-font">70km / 43.5mi</div>
              </div>

              <div className="d-flex justify-content-between lightpink-box">
                <div className="d-flex location-font">
                  <div className="mr-2">5</div>
                  <div>{h5}</div>
                </div>
                <div className="location-font">0.1km / 0.06mi</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-sm-12 res-mt">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width={820}
                  height={560}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=22%C2%B045%2700.6%22N+102%C2%B026%2734.5%22W&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <a href="https://online.stopwatch-timer.net/">
                  timer stopwatch
                </a>
                <br />
                <a href="https://textcaseconvert.com/" />
                <br />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position: relative;text-align: right;height: 560px;width: 820px;}",
                  }}
                />
                <a href="https://www.embedmaps.co">google maps html code</a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".gmap_canvas{overflow: hidden;background: none !important;height: 560px;width: 820px;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
