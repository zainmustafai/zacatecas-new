import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbarr from "./Components/Navbarr";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import QualityOfLife from "./Pages/QualityOfLife";
import Invest from "./Pages/Invest";
import News from "./Pages/News";
import IndustrialParkspage from "./Pages/IndustrialParkpage";
import NewsForm from "./Pages/NewsForm";
import NewsList from "./Pages/NewsList";
import NewsEdit from "./Pages/NewsEdit";
import Park1 from "./Pages/Park1";
import Park2 from "./Pages/Park2";
import Park3 from "./Pages/Park3";
import Park4 from "./Pages/Park4";
import Countact from "./Pages/Countact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import FloatingChatButton from "./Components/design-enhancements/FloatingChatButton/FloatingChatButton";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      // mirror: true,
      anchorPlacement: 'top-bottom',
      debounceDelay: 50,
      delay: 50,
      offset: 50,
      throttleDelay: 99,
      easing: 'ease-in-out',
    });
  }, []);


  return (
    <>
      <Router>
        <FloatingChatButton />
        <Navbarr />
        <Routes>
          <Route path="/" element={<Invest />} />
          <Route path="/qualityoflife" element={<QualityOfLife />} />
          <Route path="/invest" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/industrial-parks" element={<IndustrialParkspage />} />
          <Route path="/Park1" element={<Park1 />} />
          <Route path="/Park2" element={<Park2 />} />
          <Route path="/Park3" element={<Park3 />} />
          <Route path="/Park4" element={<Park4 />} />
          <Route path="/Countact" element={<Countact />} />
          <Route path="/newsForm" element={<NewsForm />} />
          <Route path="/newsRead" element={<NewsList />} />
          <Route path="/newsEdit/:id" element={<NewsEdit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
