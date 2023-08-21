import React from "react";
import background from "../img/paw.png";
import book from '../img/book.png';
import globe from '../img/globe.png';

function Who() {
  return (
    <>
      {/* section 2 */}
      <div className="container w-full py-0 lg:flex justify-center">
        <div className="lg:w-8/12 lg:flex flex-col justify-center">
          <span className="lg:text-[36px] font-extrabold text-left">
            Who We Are
          </span>
          <p className="text-justify text-[16px]">
            Vinea Global is one of the leading student recruitment agencies in
            Nigeria. Vinea Global was established in 2014 and has come a long way,
            retaining its excellence in study abroad business. We offer a wide
            range of services and commitments to our student customers seeking
            higher education in the UK, Europe, Australia, New Zealand, Canada,
            USA, UAE, and China.
          </p>
        </div>
        <div
          className="w-4/12 bg-contain bg-center w-full h-[600px] lg:flex"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="lg:flex justify-center items-center h-screen">
            <div className="w-6/12 w-[253px] p-3 h-auto bg-white shadow-lg rounded-lg lg:ml-24 lg:mr-10 mb-5">
                <img src={book} alt={book} className="h-[76px] w-[65px] mb-8" />
              <h3 className="text-left font-black poppins text-[18px] font-extrabold">Guaranteed Study Abroad Placement</h3>
              <p className="text-left poppins text-[14px]">
                Vinea Global boasts of its excellence in helping students gain admission
                in various study destinations
              </p>
            </div>

            <div className="w-6/12 w-[253px] p-3 h-auto bg-white shadow-lg rounded-lg mb-4">
                <img src={globe} alt={globe} className="h-[76px] w-[76px] mb-8" />
              <h3 className="text-left font-black poppins text-[18px]">In Partnership with Various Institutions Globally</h3>
              <p className="text-left poppins text-[14px]">
                In Partnership with over 20 Institutions in USA, UK, Australia,
                Germany, Canada, Switzerland, & Spain
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Who;
