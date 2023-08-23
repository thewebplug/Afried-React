import React from 'react';

import Aust from "../img/australia.png";
import Uk from "../img/uk.png";
import Au from "../img/au.png";


const Partners = () => {
    return (
        <div className="partners">
        <div>
          Partner <br /> Institutions
        </div>
        <img className="img1" src={Aust} alt="" />
        <img className="img2" src={Uk} alt="" />
        <img className="img3" src={Au} alt="" />
      </div>
    )
}

export default Partners;
