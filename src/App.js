import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import VolunteerRegistrationForm from "./components/Volunteer";
import Call from "./components/Call";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Appointment from "./components/Appointment";
import Terms from "./components/Terms";
import BoxesLoader from "./components/Loader";


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
