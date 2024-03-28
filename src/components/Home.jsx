import React from "react";
import vg from "../assets/2.webp";


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Medcare</h1>
          <p>Solution to all your health problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the health problems you face
            every day. 
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to MedCare, your premier destination for comprehensive medical information and resources. At MedCare, we are dedicated to providing accurate, reliable, and up-to-date information to empower individuals to make informed decisions about their health and well-being.

Our team consists of experienced medical professionals, writers, and researchers who are committed to delivering high-quality content that is both informative and accessible. We understand the importance of trustworthy medical information in today's digital age, and we strive to ensure that all content published on our website meets the highest standards of accuracy and credibility.

Whether you're seeking information about common medical conditions, exploring treatment options, or simply looking to improve your overall health, we are here to serve as your trusted resource. From in-depth articles and expert advice to practical tips and guides, we cover a wide range of topics to address your health concerns and support your wellness journey.

At Medcare , we prioritize the health and well-being of our users above all else. Our commitment to excellence drives us to continuously update and expand our content, ensuring that you have access to the latest developments in medicine and healthcare.

Thank you for choosing MedCare as your trusted source for medical information. We're here to help you navigate your health journey with confidence and peace of mind.







          </p>
        </div>
      </div>

  
    </>
  );
};

export default Home;