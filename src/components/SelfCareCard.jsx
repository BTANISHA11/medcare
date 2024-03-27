import React from 'react';
const _ = require('lodash');


const SelfCareCard = ({ title, description, imageUrl, link }) => {
  const truncatedDescription = _.truncate(description, { length: 130 });


  return (
    <div className="self-care-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className='card-media' src={imageUrl} alt={title} />
      </a>
      <div className="card-content">
        <a href={link} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
        <p>{truncatedDescription}</p>
        <button className='card-btn'><a href={link} target="_blank" rel="noopener noreferrer">Read More</a></button>
      </div>
    </div>
  );
};

export default SelfCareCard;
