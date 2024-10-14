import React, { useState,useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Cookies from "js-cookie";

// Language text objects
const texts = {
  en: {
    title: "WHY ZACATECAS?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "Economic Incentives",
        des:
          "Direct or indirect transfer of public funds to incentivize investment and job creation. The determination of the incentive amount is based on the project’s investment and the creation of new jobs.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title:
          "Free Lease up to 10 years in Publicly Owned Industrial Parks/Zones",
        des:
          `Land parcels in the publicly owned industrial parks and zones can be assigned with comodatoup to 10 years with possibility of extension.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "Tax Incentives",
        des:
          "Total or partial exemptions on state taxes and duties and fiscal stability agreements. The principal state tax exemption is on the 3% payroll tax, which can be fully deducted for the first year of employment.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "Advisory & soft landing support",
        des:
          "Investment Advisory: We provide you with a practical guide on how to do business in ZacatecasNetworking: We will connect you with potential customers, suppliers.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "Local Suppliers Program",
        des:
          "We will help you with the integration into the local and national supply chains in partnership with the Mexican Business Council and the Center of Competitiveness of Mexico, according to your company’s needs.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "Human Capital",
        des:
          "The state will help you find the human resources you need and will support you in training and preparing your workforce. The state also offers resources and training facilities in collaboration with public schools.",
      },
    ],
  },
  es: {
    title: "¿POR QUÉ ZACATECAS?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "Incentivos Económicos",
        des:
          "Transferencia directa o indirecta de fondos públicos para incentivar la inversión y la creación de empleos. La determinación del monto del incentivo se basa en la inversión del proyecto y la creación de nuevos empleos.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title:
          "Arrendamiento gratuito hasta 10 años en Parques Industriales/Zonas de Propiedad Pública",
        des:
          `Los terrenos en los parques industriales y zonas de propiedad pública pueden asignarse con “comodato” hasta 10 años con posibilidad de extensión.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "Incentivos Fiscales",
        des:
          "Exenciones totales o parciales en impuestos estatales y derechos, y acuerdos de estabilidad fiscal. La principal exención fiscal estatal es en el impuesto sobre nóminas del 3%, que puede deducirse completamente durante el primer año de empleo.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "Asesoría y apoyo en aterrizaje suave",
        des:
          "Asesoría en Inversiones: Le proporcionamos una guía práctica sobre cómo hacer negocios en Zacatecas. Networking: Lo conectaremos con clientes potenciales, proveedores.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "Programa de Proveedores Locales",
        des:
          "Le ayudaremos con la integración en las cadenas de suministro locales y nacionales en colaboración con el Consejo Mexicano de Negocios y el Centro de Competitividad de México, según las necesidades de su empresa.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "Capital Humano",
        des:
          "El estado le ayudará a encontrar los recursos humanos que necesita y le apoyará en la capacitación y preparación de su fuerza laboral. El estado también ofrece recursos e instalaciones de capacitación en colaboración con escuelas públicas.",
      },
    ],
  },
  de: {
    title: "WARUM ZACATECAS?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "Wirtschaftliche Anreize",
        des:
          "Direkte oder indirekte Übertragung öffentlicher Gelder zur Förderung von Investitionen und Schaffung von Arbeitsplätzen. Die Bestimmung der Anreizhöhe richtet sich nach der Investition des Projekts und der Schaffung neuer Arbeitsplätze.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title:
          "Freier Mietvertrag bis zu 10 Jahren in öffentlich eigene Industrieparks/Zonen",
        des:
          `Grundstücke in öffentlich eigene Industrieparks und Zonen können bis zu 10 Jahren mit Möglichkeit der Verlängerung „comodato“ zugewiesen werden.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "Steueranreize",
        des:
          "Vollständige oder teilweise Befreiungen von staatlichen Steuern und Abgaben sowie Vereinbarungen zur fiskalischen Stabilität. Die wichtigste staatliche Steuerbefreiung beträgt 3% Lohnsteuer, die im ersten Beschäftigungsjahr vollständig abzugsfähig ist.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "Beratung und Unterstützung beim Soft Landing",
        des:
          "Investitionsberatung: Wir bieten Ihnen einen praktischen Leitfaden, wie Sie Geschäfte in Zacatecas machen können. Networking: Wir verbinden Sie mit potenziellen Kunden, Lieferanten.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "Programm für lokale Lieferanten",
        des:
          "Wir helfen Ihnen bei der Integration in lokale und nationale Lieferketten in Zusammenarbeit mit dem mexikanischen Unternehmensrat und dem Wettbewerbsfähigkeitszentrum Mexikos, entsprechend den Bedürfnissen Ihres Unternehmens.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "Humankapital",
        des:
          "Der Staat wird Ihnen helfen, die menschlichen Ressourcen zu finden, die Sie benötigen, und wird Sie bei der Schulung und Vorbereitung Ihrer Arbeitskräfte unterstützen. Der Staat bietet auch Ressourcen und Schulungseinrichtungen in Zusammenarbeit mit öffentlichen Schulen an.",
      },
    ],
  },
  ja: {
    title: "なぜザカテカス州？",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "経済的インセンティブ",
        des:
          "公的資金の直接または間接的な移転により、投資と雇用創出を促進します。インセンティブ額の決定は、プロジェクトの投資と新しい雇用の創出に基づいています。",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title: "公共所有の産業パーク/ゾーンでの最大10年間の無料リース",
        des:
          `公共所有の産業パークおよびゾーンの土地は、「comodato」で最大10年間、延長の可能性を持って割り当てることができます。`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "税制優遇",
        des:
          "州税および料金の完全または部分的な免除および財政安定協定。主な州税免除は、雇用の初年度に完全に控除できる3％の給与税です。",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "アドバイザリー＆ソフトランディングサポート",
        des:
          "投資アドバイザリー：ザカテカスでビジネスを行う方法についての実践的なガイドを提供します。ネットワーキング：潜在的な顧客、サプライヤーと接続します。",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "地元サプライヤープログラム",
        des:
          "メキシコビジネス評議会とメキシコ競争力センターとのパートナーシップにより、地元および国内のサプライチェーンへの統合を支援します。企業のニーズに応じて。",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "人的資本",
        des:
          "州は必要な人材を見つける手助けをし、労働力の訓練と準備を支援します。州はまた、公立学校との協力によるリソースと訓練施設を提供しています。",
      },
    ],
  },
  zh: {
    title: "为什么选择萨卡特卡斯州？",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "经济激励",
        des:
          "直接或间接转移公共资金以激励投资和创造就业机会。激励金额的确定基于项目的投资和创造新工作的情况。",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title: "公共拥有的工业园区/区域最长可租赁10年",
        des:
          `公共拥有的工业园区和区域的土地可以分配为“comodato”，最长可租赁10年，并可延长。`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "税收优惠",
        des:
          "对州税和费用的全面或部分豁免以及财政稳定协议。主要的州税收豁免是3%的工资税，首年雇佣可以完全扣除。",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "咨询和软着陆支持",
        des:
          "投资咨询：我们为您提供在萨卡特卡斯州开展业务的实用指南。网络：我们将为您与潜在客户、供应商建立联系。",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "本地供应商计划",
        des:
          "我们将根据您公司的需求，与墨西哥商业委员会和墨西哥竞争力中心合作，帮助您融入本地和国家供应链。",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "人力资本",
        des:
          "州政府将帮助您找到所需的人力资源，并支持您进行员工培训和准备。州政府还与公立学校合作提供资源和培训设施。",
      },
    ],
  },
  ko: {
    title: "왜 자카테카스인가요?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "경제적 인센티브",
        des:
          "투자와 일자리 창출을 장려하기 위해 공공 자금의 직접 또는 간접적인 이전. 인센티브 금액은 프로젝트 투자 및 새로운 일자리 창출에 기초합니다.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title: "공공 소유의 산업 공원/지역에서 최대 10년 임대",
        des:
          `공공 소유의 산업 공원 및 지역의 토지는 'comodato'로 최대 10년 임대할 수 있으며, 연장 가능합니다.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "세금 인센티브",
        des:
          "주 세금 및 수수료에 대한 완전 또는 부분 면제 및 재정 안정성 협정. 주요 주 세금 면제는 3%의 급여 세이며, 처음 고용 연도에 완전히 공제할 수 있습니다.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "상담 및 부드러운 착륙 지원",
        des:
          "투자 상담: 자카테카스에서 사업을 진행하는 방법에 대한 실용적인 가이드를 제공합니다. 네트워킹: 잠재적 고객, 공급 업체와 연결해 드립니다.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "지역 공급업체 프로그램",
        des:
          "우리는 귀사의 요구에 따라 멕시코 비즈니스 협의회 및 멕시코 경쟁력 센터와 협력하여 지역 및 국가 공급망 통합을 돕겠습니다.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "인적 자본",
        des:
          "주는 귀하가 필요로 하는 인력을 찾는 데 도움을 드리고 귀하의 직원을 교육하고 준비하는 데 지원을 제공할 것입니다. 또한 공립 학교와 협력하여 리소스 및 교육 시설을 제공합니다.",
      },
    ],
  },
  zh_CN: {
    title: "为什么选择萨卡特卡斯州？",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "经济激励",
        des:
          "直接或间接转移公共资金以激励投资和创造就业机会。激励金额的确定基于项目的投资和创造新工作的情况。",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title: "公共所有的工业园区/区域最长可租赁10年",
        des:
          `公共所有的工业园区和区域的土地可以分配为“comodato”，最长可租赁10年，并可延长。`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "税收优惠",
        des:
          "对州税和费用的全面或部分豁免以及财政稳定协定。主要的州税收豁免是3%的工资税，首年雇佣可以完全扣除。",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "咨询和软着陆支持",
        des:
          "投资咨询：我们为您提供在萨卡特卡斯州开展业务的实用指南。网络：我们将为您与潜在客户、供应商建立联系。",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "本地供应商计划",
        des:
          "我们将根据您公司的需求，与墨西哥商业委员会和墨西哥竞争力中心合作，帮助您融入本地和国家供应链。",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "人力资本",
        des:
          "州政府将帮助您找到所需的人力资源，并支持您进行员工培训和准备。州政府还与公立学校合作提供资源和培训设施。",
      },
    ],
  },
  fr: {
    title: "POURQUOI ZACATECAS ?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "Incitations économiques",
        des:
          "Transfert direct ou indirect de fonds publics pour encourager l'investissement et la création d'emplois. Le montant de l'incitation est déterminé en fonction de l'investissement du projet et de la création de nouveaux emplois.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title:
          "Location gratuite jusqu'à 10 ans dans les parcs industriels/zones de propriété publique",
        des:
          `Les parcelles de terrain dans les parcs industriels et zones de propriété publique peuvent être attribuées en « comodato » jusqu'à 10 ans avec possibilité de prolongation.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "Incitations fiscales",
        des:
          "Exemptions totales ou partielles sur les impôts et droits de l'État et accords de stabilité fiscale. La principale exemption fiscale de l'État est sur l'impôt sur la masse salariale de 3%, qui peut être entièrement déduite la première année d'emploi.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "Conseils et soutien à l'atterrissage en douceur",
        des:
          "Conseil en investissement : Nous vous fournissons un guide pratique sur la manière de faire des affaires à Zacatecas. Réseautage : Nous vous mettrons en relation avec des clients potentiels, des fournisseurs.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "Programme de fournisseurs locaux",
        des:
          "Nous vous aiderons à vous intégrer dans les chaînes d'approvisionnement locales et nationales en partenariat avec le Conseil mexicain des affaires et le Centre de compétitivité du Mexique, selon les besoins de votre entreprise.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "Capital humain",
        des:
          "L'État vous aidera à trouver les ressources humaines dont vous avez besoin et vous soutiendra dans la formation et la préparation de votre main-d'œuvre. L'État propose également des ressources et des installations de formation en collaboration avec les écoles publiques.",
      },
    ],
  },
  it: {
    title: "PERCHÉ ZACATECAS?",
    diss: [
      {
        img1: "../assets/z1.png",
        img2: "../assets/zz1.png",
        title: "Incentivi economici",
        des:
          "Trasferimento diretto o indiretto di fondi pubblici per incentivare gli investimenti e la creazione di posti di lavoro. Il calcolo dell'importo dell'incentivo si basa sull'investimento del progetto e sulla creazione di nuovi posti di lavoro.",
      },
      {
        img1: "../assets/z2.png",
        img2: "../assets/zz2.png",
        title:
          "Locazione gratuita fino a 10 anni nei Parchi Industriali/Zoni di proprietà pubblica",
        des:
          `Le aree di terreno nei parchi industriali e nelle zone di proprietà pubblica possono essere assegnate in "comodato" fino a 10 anni con possibilità di estensione.`,
      },
      {
        img1: "../assets/z3.png",
        img2: "../assets/zz3.png",
        title: "Incentivi fiscali",
        des:
          "Esenzioni totali o parziali su imposte statali e diritti e accordi di stabilità fiscale. La principale esenzione fiscale statale riguarda l'imposta sul reddito del 3%, che può essere interamente dedotta per il primo anno di impiego.",
      },
      {
        img1: "../assets/z4.png",
        img2: "../assets/zz4.png",
        title: "Consulenza e supporto per l'atterraggio morbido",
        des:
          "Consulenza per gli investimenti: vi forniamo una guida pratica su come fare business a Zacatecas. Networking: vi metteremo in contatto con potenziali clienti, fornitori.",
      },
      {
        img1: "../assets/z5.png",
        img2: "../assets/zz5.png",
        title: "Programma di fornitori locali",
        des:
          "Vi aiuteremo nell'integrazione nelle catene di approvvigionamento locali e nazionali in partnership con il Consiglio delle Imprese Messicano e il Centro di Competitività del Messico, secondo le esigenze della vostra azienda.",
      },
      {
        img1: "../assets/z6.png",
        img2: "../assets/zz6.png",
        title: "Capitale Umano",
        des:
          "Lo stato vi aiuterà a trovare le risorse umane di cui avete bisogno e vi supporterà nella formazione e preparazione della vostra forza lavoro. Lo stato offre anche risorse e strutture di formazione in collaborazione con le scuole pubbliche.",
      },
    ],
  },
};

export default function WhyZacatecas() {
  // Determine the current language from cookies or fallback to 'en'
  const [setLanguage,setsetLanguage] = useState(Cookies.get("language") || "en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setsetLanguage(savedLanguage);
      }
      // console.log(setLanguage);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { title, diss } = texts[setLanguage];

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ margin: "50px 10px", color: "#000", marginTop: "200px" }}
    >
      <div className="col-lg-10 col-md-12 col-sm-6" style={{ padding: "30px" }}>
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>{title}</h3>

        <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "20px", width: "100%" }}
    >
      {diss.map((dis, index) => (
        <div
          className="col-lg-3 col-md-5 col-sm-6"
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            margin: "10px",
            marginTop: "40px",
            borderRadius: "300px",
            border: "3px solid #ccc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "88vh",
            position: "relative", // Add relative positioning to the parent div
          }}
        >
          <img
            src={dis.img1}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />

          <div
            style={{
              borderTopRightRadius: "47%",
              padding: "5px",
              width: "90px",
              height: "90px",
              borderTopLeftRadius: "47%",
              border: "3px solid #fff",
              zIndex: "10",
              marginTop: "-60px",
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
                borderTopRightRadius: "46%",
                borderTopLeftRadius: "46%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={dis.img2}
                style={{ padding: "10px", width: "auto", height: "100%" }}
                alt=""
              />
            </div>
          </div>
          <p
            data-aos="fade-up"
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {dis.title}
          </p>
          <p style={{ fontSize: "14px", textAlign: "center" }}>{dis.des}</p>

          <button
            style={{
              backgroundColor: "rgba(180, 66, 62,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "16px",
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: "33px",
                height: "33px",
                borderRadius: "50%",
                backgroundColor: "#B4423E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#9e342d",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaArrowRight />
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
