import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import Cookies from "js-cookie";
import './Navbarr.css'
import { Globe2 } from "lucide-react";

export default function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English
  const [showDropdown, setShowDropdown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);


  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const navigate = useNavigate();


  // Language text *
  const texts = {
    en: {
      home: "Home",
      qualityOfLife: "Quality of Life",
      industries: "Industrial Parks",
      features: "Features",
      why: "Why Zacatecas",
      news: "News",
      language: "EN",
      contactUs: "Contact Us",
      invest: "Invest In Zacatecas",
      i1: "Guadalupe Industrial Area", // 
      i2: "Osiris Park",
      i3: "Fresnillo II Park",
      i4: "Airport I Park",
    },
    es: {
      home: "Inicio",
      qualityOfLife: "Calidad de Vida",
      industries: "Parques Industriales",
      features: "Características",
      why: "Por qué Zacatecas",
      news: "Noticias",
      language: "ES",
      contactUs: "CONTÁCTENOS",
      i1: "Área de Guadalupe",
      i2: "Parque Osiris",
      i3: "Parque Fresnillo",
      i4: "Industria Aeroportuaria",
    },
    de: {
      home: "Startseite",
      qualityOfLife: "Lebensqualität",
      industries: "Gewerbeparks",
      features: "Eigenschaften",
      why: "Warum Zacatecas",
      news: "Nachrichten",
      language: "DE",
      contactUs: "KONTAKTIERE UNS",
      i1: "Guadalupe Gebiet",
      i2: "Park Osiris",
      i3: "Fresnillo Park",
      i4: "Flughafenindustrie",
    },
    ja: {
      home: "ホーム",
      qualityOfLife: "生活の質",
      industries: "工業団地",
      features: "特徴",
      why: "なぜサカテカスか",
      news: "ニュース",
      language: "JA",
      contactUs: "お問い合わせ",
      i1: "グアダルーペ地区",
      i2: "オシリスパーク",
      i3: "フレスニージョパーク",
      i4: "空港産業",
    },
    zh: {
      home: "主页",
      qualityOfLife: "生活质量",
      industries: "工业园区",
      features: "特点",
      why: "为何萨卡特卡斯",
      news: "新闻",
      language: "中文",
      contactUs: "联系我们",
      i1: "瓜达卢佩区域",
      i2: "奥西里斯公园",
      i3: "弗雷斯尼洛公园",
      i4: "机场工业",
    },
    ko: {
      home: "홈",
      qualityOfLife: "생활의 질",
      industries: "산업 단지",
      features: "특징",
      why: "왜 자카테카스인가",
      news: "뉴스",
      language: "한국어",
      contactUs: "문의하기",
      i1: "과달루페 지역",
      i2: "오시리스 공원",
      i3: "프레스니요 공원",
      i4: "공항 산업",
    },
    "zh-CN": {
      home: "首页",
      qualityOfLife: "生活质量",
      industries: "工业园区",
      features: "特点",
      why: "为什么萨卡特卡斯",
      news: "新闻",
      language: "中文",
      contactUs: "联系我们",
      i1: "瓜达卢佩区域",
      i2: "奥西里斯公园",
      i3: "弗雷斯尼洛公园",
      i4: "机场工业",
    },
    fr: {
      home: "Accueil",
      qualityOfLife: "Qualité de vie",
      industries: "Parcs Industriels",
      features: "Caractéristiques",
      why: "Pourquoi Zacatecas",
      news: "Actualités",
      language: "FR",
      contactUs: "NOUS CONTACTER",
      i1: "Zone de Guadalupe",
      i2: "Parc Osiris",
      i3: "Parc Fresnillo",
      i4: "Industrie Aéroportuaire",
    },
  };


  // const handleNavigate = ()=>{
  //   navigate("/industrial-parks")
  // }



  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    const intervalId = setInterval(checkIsMobile, 1);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        setIsSticky(false);
      } else if (scrollTop < lastScrollTop) {
        // Scrolling up
        setIsSticky(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };

  const handleNavMouseEnter = (e) => {
    e.target.style.color = "#d65757"; // Change background color on hover
  };

  const handleNavMouseLeave = (e) => {
    e.target.style.color = "#000"; // Reset background color on mouse leave
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    Cookies.set("language", language, { expires: 2 });
    setExpanded(false); // Collapse the navbar on language change if expanded
  };

  useEffect(() => {
    const savedLanguage = Cookies.get("language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleDropdownClick = (e) => {
    // Prevent click from propagating to dropdown items
    e.stopPropagation();
    navigate("/industrial-parks");
  };




  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        width: "100%",
        zIndex: 1001,
        backgroundColor: "#fff",
        padding: "0.1rem 0",
        height: "5rem",
        top: "0",
        borderBottom: "5px solid #efbcbc",
        borderTop: "5px solid #d65757",
      }}
      // className={`navbar-custom ${isSticky ? 'sticky' : ''}`}
    >
      <Container style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          style={{ margin: "0px 10px" }}
        >
          <img
            src={"../assets/logo.png"}
            alt=""
            style={{
              width: "210px",
              height: "50px",
              margin: "auto",
              marginRight: "auto",
            }}
          />
        </Navbar.Brand>

        {isMobile ? (
          <button
            aria-controls="navbarScroll"
            onClick={handleToggle}
            className={expanded ? "black-toggle" : ""}
            style={{
              margin: "0px 10px",
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "#000",
            }}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </button>
        ) : null}

        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 ml-auto my-lg-0" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].home}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/qualityoflife"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].qualityOfLife}
            </Nav.Link>


            <NavDropdown
              title={texts[selectedLanguage].industries}
              id="basic-nav-dropdown"
              className={`no-caret ${showDropdown ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                fontWeight: "500",
                color: "black",
                fontSize: "14px",
                border: "none",
                padding: "0",
              }}
              onClick={handleDropdownClick}
            >
              {['i1', 'i2', 'i3', 'i4'].map((item, index) => (
                <NavDropdown.Item
                  key={index}
                  as={Link}
                  to={`/Park${index + 1}`}
                  onClick={(e) => { e.stopPropagation(); handleNavLinkClick(); }}
                  className="dropdown-item"
                >
                  {texts[selectedLanguage][item]}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/invest"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].why}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Countact"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color: "#000", fontSize: "14px" }}
            >
              {texts[selectedLanguage].contactUs}
            </Nav.Link>


            <NavDropdown
              id="basic-nav-dropdown"
              className="no-caret dropdown-menu.show "
              style={{ fontWeight: 'auto' }}
              title={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Globe2
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                      textTransform: "uppercase",
                    }}
                  />
                  <span>{selectedLanguage}</span>
                </span>
              }
              align="end"
              onSelect={handleLanguageChange}
            >
              <NavDropdown.Item eventKey="en">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/en.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.en.language}
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="es">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/es.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.es.language}
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="de">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/de.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.de.language}
                </span>
                {/* {texts.de.language} */}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="ja">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/ja.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.ja.language}
                </span>
                {/* {texts.ja.language} */}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="zh">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/zh.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.zh.language}
                </span>
                {/* {texts.zh.language} */}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="ko">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/ko.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.ko.language}
                </span>
                {/* {texts.ko.language} */}
              </NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="zh-CN">
                {texts["zh-CN"].language}
              </NavDropdown.Item> */}
              <NavDropdown.Item eventKey="fr">
                <span
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/assets/fr.png"
                    alt="Language Flag"
                    width={20}
                    height={20}
                    style={{
                      width: "20px", height: "20px",
                      marginRight: "5px"
                    }}
                  />
                  {texts.fr.language}
                </span>
                {/* {texts.fr.language} */}
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Nav className="ml-auto"></Nav>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:yannick.berchtold@zacatecas.gob.mx"
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
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {texts[selectedLanguage].contactUs}
            <img
              src="../assets/contactus.png"
              alt="icon"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
