import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App () {

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}
export default App;