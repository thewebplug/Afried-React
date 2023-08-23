import OwlCarousel from "react-owl-carousel";
import React from 'react';
import ReviewImg from "../img/Ellipse 14.png";
import ReviewImg1 from "../img/Ellipse 15.png";

const Slider = () => {
    return (
        <OwlCarousel
          className="review_slide"
          item={3}
          margin={10}
          nav={true}
          dots={true}
          // loop
          dotsEach={true}
          autoWidth={true}
          navText={[<div>hello</div>, <div>hi</div>]}
        >
          <div className="review_card">
            <div className="review_card-flex">
              <img className="img" src={ReviewImg} alt="" />
              <div>
                <div className="card_flex-title">Dami</div>
                <div className="card_flex-subtitle">
                  Griffith University, Australia
                </div>
              </div>
            </div>
            <div>
              My study abroad prospects were put into realisation through
              working with Vinea trying my study abroad application process. The
              whole process went smoothly and I was carried along all the way
              till arrival in Uni. One word I will say is study abroad the Vinea
              way.
            </div>
          </div>
          <div className="review_card">
            <div className="review_card-flex">
              <img className="img" src={ReviewImg1} alt="" />
              <div>
                <div className="card_flex-title">Debbie</div>
                <div className="card_flex-subtitle">
                University of Central Lancashire
                </div>
              </div>
            </div>
            <div>
            I was introduced to Vinea through a family member and I will say I never regretted the referral. My study abroad applications process was done without any delay with great result. I recomend you study abroad the Vinea way.
            </div>
          </div>
          
        </OwlCarousel>
    )
}

export default Slider;