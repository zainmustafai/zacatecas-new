import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import ZacatecasEntertainment from './ZacatecasEntertainment'
const texts = {
  en: {
    heading: "ZACATECAS RESTAURANTS",
    description: "There is a varied offer of restaurants in Zacatecas, the following ones are recommended:",
  },
  es: {
    heading: "RESTAURANTES EN ZACATECAS",
    description: "Hay una oferta variada de restaurantes en Zacatecas, a continuación se recomiendan algunos:",
  },
  de: {
    heading: "RESTAURANTS IN ZACATECAS",
    description: "Es gibt ein vielfältiges Angebot an Restaurants in Zacatecas, folgende werden empfohlen:",
  },
  ja: {
    heading: "サカテカスのレストラン",
    description: "サカテカスにはさまざまなレストランがあります。以下がおすすめです：",
  },
  zh: {
    heading: "萨卡特卡斯餐厅",
    description: "萨卡特卡斯有各种餐厅可供选择，以下是推荐的几家：",
  },
  ko: {
    heading: "자카테카스 레스토랑",
    description: "자카테카스에는 다양한 레스토랑이 있으며, 다음을 추천합니다:",
  },
  zh_tw: {
    heading: "薩卡特卡斯餐廳",
    description: "薩卡特卡斯有各種餐廳可供選擇，以下是推薦的幾家：",
  },
  fr: {
    heading: "RESTAURANTS À ZACATECAS",
    description: "Il existe une offre variée de restaurants à Zacatecas, voici quelques recommandations :",
  },
};

export default function ZacatecasRestaurents() {
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

  const { heading, description } = texts[language];

  const diss = {
    en: [
      { title: "Los Dorados de Villa", subtitle: "Mexican food" },
      { title: "Frida Restaurante", subtitle: "Mexican food" },
      { title: "Rincón Típico", subtitle: "Mexican food" },
      { title: "Lucky Luciano", subtitle: "Mexican Italian fusion food" },
      { title: "Finca Serrano", subtitle: "Mexican food" },
      { title: "Garufa", subtitle: "Argentinean food" },
      { title: "Mykonos", subtitle: "Mediterranean food" },
      { title: "RossoNero", subtitle: "Italian food" },
      { title: "Koko Sushi", subtitle: "Japanese food" },
      { title: "The Milk Brewpub", subtitle: "Mexican-American food" },
      { title: "Las Costillas de Sancho", subtitle: "Grilled food" },
    ],
    es: [
      { title: "Los Dorados de Villa", subtitle: "Comida mexicana" },
      { title: "Frida Restaurante", subtitle: "Comida mexicana" },
      { title: "Rincón Típico", subtitle: "Comida mexicana" },
      { title: "Lucky Luciano", subtitle: "Comida fusión mexicana e italiana" },
      { title: "Finca Serrano", subtitle: "Comida mexicana" },
      { title: "Garufa", subtitle: "Comida argentina" },
      { title: "Mykonos", subtitle: "Comida mediterránea" },
      { title: "RossoNero", subtitle: "Comida italiana" },
      { title: "Koko Sushi", subtitle: "Comida japonesa" },
      { title: "The Milk Brewpub", subtitle: "Comida mexicana-americana" },
      { title: "Las Costillas de Sancho", subtitle: "Comida a la parrilla" },
    ],
    de: [
      { title: "Los Dorados de Villa", subtitle: "Mexikanisches Essen" },
      { title: "Frida Restaurante", subtitle: "Mexikanisches Essen" },
      { title: "Rincón Típico", subtitle: "Mexikanisches Essen" },
      { title: "Lucky Luciano", subtitle: "Mexikanisch-italienische Fusion" },
      { title: "Finca Serrano", subtitle: "Mexikanisches Essen" },
      { title: "Garufa", subtitle: "Argentinisches Essen" },
      { title: "Mykonos", subtitle: "Mediterranes Essen" },
      { title: "RossoNero", subtitle: "Italienisches Essen" },
      { title: "Koko Sushi", subtitle: "Japanisches Essen" },
      { title: "The Milk Brewpub", subtitle: "Mexikanisch-amerikanisches Essen" },
      { title: "Las Costillas de Sancho", subtitle: "Gegrilltes Essen" },
    ],
    ja: [
      { title: "ロス・ドラドス・デ・ビラ", subtitle: "メキシコ料理" },
      { title: "フリーダ・レストランテ", subtitle: "メキシコ料理" },
      { title: "リンコン・ティピコ", subtitle: "メキシコ料理" },
      { title: "ラッキー・ルチアーノ", subtitle: "メキシコイタリア料理フュージョン" },
      { title: "フィンカ・セラーノ", subtitle: "メキシコ料理" },
      { title: "ガルーファ", subtitle: "アルゼンチン料理" },
      { title: "ミコノス", subtitle: "地中海料理" },
      { title: "ロッソネロ", subtitle: "イタリア料理" },
      { title: "ココ寿司", subtitle: "日本料理" },
      { title: "ザ・ミルク・ブリューパブ", subtitle: "メキシコアメリカ料理" },
      { title: "ラス・コスティーリャス・デ・サンチョ", subtitle: "焼き料理" },
    ],
    zh: [
      { title: "洛斯多拉多斯德维拉", subtitle: "墨西哥食品" },
      { title: "弗里达餐厅", subtitle: "墨西哥食品" },
      { title: "莱孔蒂皮科", subtitle: "墨西哥食品" },
      { title: "幸运卢西亚诺", subtitle: "墨西哥意大利融合食品" },
      { title: "芬卡塞拉诺", subtitle: "墨西哥食品" },
      { title: "加鲁法", subtitle: "阿根廷食品" },
      { title: "米科诺斯", subtitle: "地中海食品" },
      { title: "罗索尼罗", subtitle: "意大利食品" },
      { title: "科科寿司", subtitle: "日本食品" },
      { title: "牛奶酿造酒吧", subtitle: "墨西哥美国食品" },
      { title: "圣乔烤肋排", subtitle: "烤食品" },
    ],
    ko: [
      { title: "로스 도라도스 데 빌라", subtitle: "멕시코 음식" },
      { title: "프리다 레스토랑", subtitle: "멕시코 음식" },
      { title: "린콘 티피코", subtitle: "멕시코 음식" },
      { title: "럭키 루치아노", subtitle: "멕시코 이탈리아 퓨전 음식" },
      { title: "핀카 세라노", subtitle: "멕시코 음식" },
      { title: "가루파", subtitle: "아르헨티나 음식" },
      { title: "미코노스", subtitle: "지중해 음식" },
      { title: "로쏘네로", subtitle: "이탈리아 음식" },
      { title: "코코 스시", subtitle: "일본 음식" },
      { title: "더 밀크 브루펍", subtitle: "멕시코-미국 음식" },
      { title: "라스 코스티야스 데 산초", subtitle: "구운 음식" },
    ],
    zh_tw: [
      { title: "洛斯多拉多斯德維拉", subtitle: "墨西哥食品" },
      { title: "弗里達餐廳", subtitle: "墨西哥食品" },
      { title: "萊孔蒂皮科", subtitle: "墨西哥食品" },
      { title: "幸運盧西亞諾", subtitle: "墨西哥意大利融合食品" },
      { title: "芬卡塞拉諾", subtitle: "墨西哥食品" },
      { title: "加魯法", subtitle: "阿根廷食品" },
      { title: "米科諾斯", subtitle: "地中海食品" },
      { title: "羅索內羅", subtitle: "意大利食品" },
      { title: "科科壽司", subtitle: "日本食品" },
      { title: "牛奶釀造酒吧", subtitle: "墨西哥美國食品" },
      { title: "聖喬烤肋排", subtitle: "烤食品" },
    ],
    fr: [
      { title: "Los Dorados de Villa", subtitle: "Nourriture mexicaine" },
      { title: "Frida Restaurante", subtitle: "Nourriture mexicaine" },
      { title: "Rincón Típico", subtitle: "Nourriture mexicaine" },
      { title: "Lucky Luciano", subtitle: "Nourriture fusion mexicaine et italienne" },
      { title: "Finca Serrano", subtitle: "Nourriture mexicaine" },
      { title: "Garufa", subtitle: "Nourriture argentine" },
      { title: "Mykonos", subtitle: "Nourriture méditerranéenne" },
      { title: "RossoNero", subtitle: "Nourriture italienne" },
      { title: "Koko Sushi", subtitle: "Nourriture japonaise" },
      { title: "The Milk Brewpub", subtitle: "Nourriture américano-mexicaine" },
      { title: "Las Costillas de Sancho", subtitle: "Nourriture grillée" },
    ],
  };

  const restaurants = diss[language] || diss["en"];


  return (
    <div
      data-aos="fade-in"
      style={{
        backgroundImage: `url(../assets/restaurant.png)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
        display: "flex",
        paddingTop: "50px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
      className=""
      
    >
      <div className="col-lg-10 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h3 style={{ fontWeight: "bold", textAlign: "center", color:"white" }}>{heading}</h3>

        <p style={{ fontWeight: "500", fontSize: "18px", textAlign: "center",color:"white" }}>
          {description}
        </p>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{
            marginTop: "20px",
            marginLeft: "0px",
            marginRight: "0px",
            marginBottom: "100px",
            width: "100%",
          }}
        >
          {restaurants.map((restaurant, index) => (
            <div
              className="col-lg-3 col-md-5 col-sm-6" key={index}>
              <div
                style={{
                  backgroundColor: "#fff",
                  marginTop: "20px",
                  height: "100px",
                  width: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "3px solid #d65757",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    padding: "10px",
                    textAlign: "center",
                    margin: "0px",
                    fontSize: "14px",
                  }}
                >
                  {restaurant.title}
                  <br />
                  ({restaurant.subtitle})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ZacatecasEntertainment />
    </div>
  );
}
