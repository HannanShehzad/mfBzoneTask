import React from 'react';
import './Styles/card.css';

interface CardProps {
  imageSrc: string;
  heading: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { imageSrc, heading } = props;

  return (
    <div className="cardWrap max-w-sm shadow text-center relative"> 
      <img
        className="cardImage" 
        src={imageSrc}
        alt=""
      />
      <a href="#" className='tick'>
        <img src="./icons/tick.png" alt="" className="tickImage" /> 
      </a>
      <div className="p-5 textWrap">
        <h5 className="mb-2 tracking-tight">
          {heading}
        </h5>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center readMore"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
