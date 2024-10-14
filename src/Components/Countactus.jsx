import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import emailjs from '@emailjs/browser';
import "./Countactus.css";

const texts = {
  en: {
    heading: "Contact Us",
    p1: "If you need more information about our industrial parks or properties in Mexico, please fill out this form and we will get in contact with you shortly.",
    p2: "Phone",
    p3: "492 491 5000",
    p4: "EMAIL",
    p5: "LOCATION",
    p6: "Circuit Cerro del Gato s/n Building B, First Floor,Colony Administrative City C.P. 98160 Zacatecas, Zach.",
    head: "Get In Touch",
    l1: "First Name",
    l2: "Last Name",
    l3: "Email Address",
    l4: "Phone Number",
    l5: "Message",
    l6: "Submit Now",
  },
  es: {
    heading: "Contáctanos",
    p1: "Si necesitas más información sobre nuestros parques industriales o propiedades en México, por favor completa este formulario y nos pondremos en contacto contigo a la brevedad.",
    p2: "Teléfono",
    p3: "492 491 5000",
    p4: "EMAIL",
    p5: "UBICACIÓN",
    p6: "Circuito Cerro del Gato s/n Edificio B, Primer Piso, Colonia Ciudad Administrativa C.P. 98160 Zacatecas, Zac.",
    head: "Ponte en contacto",
    l1: "Nombre",
    l2: "Apellido",
    l3: "Correo electrónico",
    l4: "Número de teléfono",
    l5: "Mensaje",
    l6: "Enviar ahora",
  },
  de: {
    heading: "Kontaktieren Sie uns",
    p1: "Wenn Sie weitere Informationen zu unseren Industrieparks oder Immobilien in Mexiko benötigen, füllen Sie bitte dieses Formular aus und wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    p2: "Telefon",
    p3: "492 491 5000",
    p4: "EMAIL",
    p5: "STANDORT",
    p6: "Circuito Cerro del Gato s/n Gebäude B, erster Stock, Kolonie Verwaltungsstadt C.P. 98160 Zacatecas, Zach.",
    head: "Kontakt aufnehmen",
    l1: "Vorname",
    l2: "Nachname",
    l3: "E-Mail-Adresse",
    l4: "Telefonnummer",
    l5: "Nachricht",
    l6: "Jetzt absenden",
  },
  ja: {
    heading: "お問い合わせ",
    p1: "メキシコの工業団地や物件についての詳細情報が必要な場合は、このフォームにご記入ください。すぐにご連絡いたします。",
    p2: "電話",
    p3: "492 491 5000",
    p4: "EMAIL",
    p5: "所在地",
    p6: "サーキット・セロ・デル・ガトo s/n B棟、1階、コロニー・アドミニストラティブ・シティ C.P. 98160 ザカテカス、ザク。",
    head: "お問い合わせ",
    l1: "名",
    l2: "姓",
    l3: "メールアドレス",
    l4: "電話番号",
    l5: "メッセージ",
    l6: "今すぐ送信",
  },
  zh: {
    heading: "联系我们",
    p1: "如果您需要有关我们在墨西哥的工业园区或物业的更多信息，请填写此表格，我们将尽快与您联系。",
    p2: "电话",
    p3: "492 491 5000",
    p4: "电子邮件",
    p5: "地点",
    p6: "Circuit Cerro del Gato s/n B栋，第一层，行政城市 C.P. 98160 Zacatecas, Zach.",
    head: "联系我们",
    l1: "名字",
    l2: "姓氏",
    l3: "电子邮件地址",
    l4: "电话号码",
    l5: "留言",
    l6: "立即提交",
  },
  ko: {
    heading: "문의하기",
    p1: "멕시코의 산업 단지나 부동산에 대한 추가 정보가 필요하시면 이 양식을 작성해 주시면 곧 연락드리겠습니다.",
    p2: "전화",
    p3: "492 491 5000",
    p4: "이메일",
    p5: "위치",
    p6: "Circuit Cerro del Gato s/n B동, 1층, 행정 도시 C.P. 98160 Zacatecas, Zach.",
    head: "연락하기",
    l1: "이름",
    l2: "성",
    l3: "이메일 주소",
    l4: "전화번호",
    l5: "메시지",
    l6: "지금 제출",
  },
  fr: {
    heading: "Contactez-nous",
    p1: "Si vous avez besoin de plus d'informations sur nos parcs industriels ou propriétés au Mexique, veuillez remplir ce formulaire et nous vous contacterons sous peu.",
    p2: "Téléphone",
    p3: "492 491 5000",
    p4: "EMAIL",
    p5: "EMPLACEMENT",
    p6: "Circuit Cerro del Gato s/n Bâtiment B, Premier étage, Colonie Ville Administrative C.P. 98160 Zacatecas, Zach.",
    head: "Contactez-nous",
    l1: "Prénom",
    l2: "Nom",
    l3: "Adresse e-mail",
    l4: "Numéro de téléphone",
    l5: "Message",
    l6: "Envoyer maintenant",
  },
};

export default function Countactus() {
  const [lang, setLang] = useState(Cookies.get("language") || "en");
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLang(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, p1, p2, p3, p4, p5, p6, head, l1, l2, l3, l4, l5, l6 } = texts[lang];

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await emailjs.sendForm('service_9xqhxd6', 'template_ysx3cai', form.current, {
        publicKey: 'lVuLy7tM7kqbTdz7k',
      });
      console.log('SUCCESS!', response.status, response.text);
      alert("Email sent successfully");
      form.current.reset();
      setLoading(false);
    } catch (error) {
      alert("Error sending email");
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-in"
      className=""
      style={{
        width: "100%",
        backgroundImage: `url(../assets/contactback.jpg), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div className="container mt-5 mb-5">
        <div className="mt-5 row">
          <div className="text-white col-12 col-md-6 col-sm-12">
            <h1 className="text-white">{heading}</h1>
            <div className="contact-underlined"></div>
            <div>
              <p>{p1}</p>
            </div>

            <div className="mt-3">
              <div className="d-flex">
                <div className="contact-box">
                  <img src="../assets/c1.png" alt="" />
                </div>

                <div className="ml-3">
                  <div>{p2}</div>
                  <div>{p3}</div>
                </div>
              </div>

              <div className="mt-3 d-flex">
                <div className="contact-box1">
                  <img src="../assets/c2.png" alt="" />
                </div>

                <div className="ml-3">
                  <div>{p4}</div>


                  <div>invest@zacatecas.gob.mx</div>


                </div>
              </div>

              <div className="mt-3 d-flex">
                <div className="contact-box2">
                  <img src="../assets/c3.png" alt="" className="w-100 h-100" />
                </div>

                <div className="ml-3 ">
                  <div>{p5}</div>
                  <div style={{ width: "70%" }}>{p6}</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-12 col-md-6 col-sm-12 res-mt">
            <div className="contact__form__container d-flex justify-content-center align-items-center flex-column box-form">
              <div className="container">
                <div className="mt-4 text-black gettouch">{head}</div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{ width: "80%" }}
                className=" contact__form"
              >
                {/* Name input */}
                <div className="mb-4 form-outline">
                  <input
                    type="text"
                    aria-label="First Name"
                    name="first_name"
                    id="form4Example1"
                    className="form-control"
                    placeholder="First Name"
                    style={{ backgroundColor: "white" }}
                    autoComplete="off"

                  />
                  {/* <label className="form-label" htmlFor="form4Example1">
                    {l1}
                  </label> */}
                </div>

                <div className="mb-4 form-outline">
                  <input
                    aria-label="Last Name"
                    type="text"
                    name="last_name"
                    id="form4Example2"
                    className="form-control"
                    placeholder="Last Name"
                    style={{ backgroundColor: "white" }}
                    autoComplete="off"

                  />
                  {/* <label className="form-label" htmlFor="form4Example2">
                    {l2}
                  </label> */}
                </div>
                {/* Email input */}
                <div className="mb-4 form-outline">
                  <input
                    type="email"
                    name="email"
                    id="form4Example3"
                    className="form-control"
                    placeholder="Email Address"
                    style={{ backgroundColor: "white", color: "black" }}
                    autoComplete="off"

                  />
                  {/* <label className="form-label" htmlFor="form4Example3">
                    {l3}
                  </label> */}
                </div>

                <div className="mb-4 form-outline">
                  <input
                    type="text"
                    name="phone"
                    id="form4Example4"
                    className="form-control"
                    placeholder="Phone Number"
                    style={{ backgroundColor: "white" }}
                    autoComplete="off"

                  />
                  {/* <label className="form-label" htmlFor="form4Example4">
                    {l4}
                  </label> */}
                </div>
                {/* Message input */}
                <div className="mb-4 form-outline">
                  <textarea
                    name="message"
                    className="form-control"
                    id="form4Example5"
                    rows={4}
                    defaultValue={""}
                    style={{ backgroundColor: "white" }}
                    autoComplete="off"

                    placeholder="Message"
                  />
                  {/* <label className="form-label" htmlFor="form4Example5">
                    {l5}
                  </label> */}
                </div>

                <button
                  className="buttonn d-flex align-items-center"
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: "#571517",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    padding: "5px 20px",
                    paddingRight: "5px",
                    borderRadius: "30px",
                    border: "1px solid #efbcbc",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  {
                    loading ? "Sending..." : l6
                  }
                  <img
                    src={"../assets/contactus.png"}
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
