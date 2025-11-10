import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Projet from "./components/Projets";
import Competences from "./components/Competences";
import ParcoursAcademique from "./components/ParcoursAcademique";

const DefaultLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
  
        <Routes>
    
            <Route path="/" element={
                <>
                    <section id="HeroSection"> <HeroSection /> </section>
                    <section id="ParcoursAcademique"> <ParcoursAcademique /> </section>
                    <section id="Competences"> <Competences /> </section>
                    <section id="Projet"> <Projet /> </section>
                    <section id="Contact"> <Contact /> </section>
                    
                </>
            } />
          
        </Routes>

        <Footer />
        <ScrollToTopButton />
    </div>

);



function App () {
  return (
    <div className="min-h-screen overflow-x-hidden">
       
            <Router>
                <Routes>
                    
                    <Route path="/*" element={<DefaultLayout />} />

                </Routes>
            </Router>
      
    </div>
  )
}
export default App;