import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";



// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Call from "./pages/Call";

import Resources from "./components/Resources";
import VolunteerRegistrationForm from "./components/Volunteer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Appointment from "./components/Appointment";
import Terms from "./components/Terms";
import BoxesLoader from "./components/Loader";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styling
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/resources.scss"
import "./components/volunteer.scss";
import "./styles/mediaquery.scss";
import "./styles/call.scss";
import "./styles/login.scss";
import "./styles/dashboard.scss";
import "./styles/register.scss";
import "./styles/appointment.scss";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading (true);
    setTimeout(() => {
      setLoading(false);
    },2000)

  }, []);
  return (
    <div>
    {
      loading ?
  <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
  <BoxesLoader color="#36d7b7" loading={loading} />
  </div>
  :

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteer" element={<VolunteerRegistrationForm />} />
        <Route path="/call" element={<Call />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
}
</div>
  );
}
export default App;
