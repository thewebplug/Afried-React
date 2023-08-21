import React from "react";
import object from '../img/objects.png';
import one from '../img/1.png';
import two from '../img/2.png';
import three from '../img/3.png';
import four from '../img/4.png';
import five from '../img/5.png';

function Get() {
  return (
    <>
        <div className="container-fluid bg-[#E8EAF5] w-full h-[600px]">
            <div className="container w-full p-20 flex">
                <div className="w-6/12 w-full text-start">
                    <h4 className="text-4xl font-bold">
                        Get to know us
                    </h4>
                    <p>
                        Vinea Global offers a range of services, some of which include – 
                        College Application, Visa Counseling & Guidance, IETLS & 
                        TOEFL bookings, and other Student Abroad Placement Services.
                    </p>
                    <img src={object} alt={object} className="w-[50%] mb-0 mt-5" />
                </div>
                <div className="w-6/12 w-full px-32">
                    <div className="flex mb-0 mt-5 font-bold">
                        <img src={one} alt={one} className="w-[2.3%] mr-4" />
                        Application Services
                    </div>
                    <div className="flex mb-0 mt-5 font-bold">
                        <img src={two} alt={two} className="w-[4%] mr-4" />
                        Visa Guidance
                    </div>
                    <div className="flex mb-0 mt-5 font-bold">
                        <img src={three} alt={three} className="w-[4%] mr-4" />
                        Counselling
                    </div>
                    <div className="flex mb-0 mt-5 font-bold">
                        <img src={four} alt={four} className="w-[4%] mr-4" />
                        Accommodation
                    </div>
                    <div className="flex mb-0 mt-5 font-bold">
                        <img src={five} alt={five} className="w-[4%] mr-4" />
                        Scholarship / Discount
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default Get;
