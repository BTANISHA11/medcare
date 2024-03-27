import React from "react";
import selfcareResources from '../selfcare-resources.json';
import SelfCareCard from "./SelfCareCard";

const Resource = () => {
  return (
    <>
        <div className="home" id="home">
        <main>
            <h1>Medcare</h1>
            <p>Helpful Resources for selfcare </p>
        </main>
        </div>
        <div > 
          <h2 className="res-title">Helpful Resources & Links</h2>
        </div>
        <div className="resource-container">
            {selfcareResources.map((resource, index) => (
                <SelfCareCard key={index} {...resource} />
            ))}
        </div>
    </>
  );
};

export default Resource;