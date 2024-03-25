import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import VolunteerRegistrationForm from "./components/Volunteer";
import Call from "./components/Call";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./components/volunteer.scss";
import "./styles/mediaquery.scss";
import "./styles/call.scss";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/volunteer" element={<VolunteerRegistrationForm />} />
        <Route path="/call" element={<Call />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;