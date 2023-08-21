import React from "react";
import object from "../img/tree.jpg";

function Upcoming() {
  return (
    <>
      <div className="container mt-16">
        <h3 className="font-bold mb-16">Upcoming Events</h3>

        <div className="bg-[#E8EAF5] flex rounded-lg">
          <img
            src={object}
            alt={object}
            className="w-[300px] mb-0 rounded-lg"
          />
          <div className="flex justify-center items-center">
            <div className="ml-10 text-left flex flex-col mr-72">
              <span className=" bg-pink-400 text-white p-2 rounded-lg">ONLINE</span>
              <span className="font-bold">Tea Party</span>
            </div>
            <div className="ml-10 text-left flex flex-col mr-32">
              <span className="text-[#9E9E9E]">DATE</span>
              <span className="font-bold">04 May 2023</span>
            </div>
            <div className="ml-10 text-left flex flex-col">
              <span className="text-[#9E9E9E]">DURATION</span>
              <span className="font-bold">300 Mins</span>
            </div>
          </div>
        </div>

        <div className="bg-[#E8EAF5] flex mt-10 rounded-lg">
          <img
            src={object}
            alt={object}
            className="w-[300px] mb-0 rounded-lg"
          />
          <div className="flex justify-center items-center">
            <div className="ml-10 text-left flex flex-col mr-72">
              <span className=" bg-pink-400 text-white p-2 rounded-lg">ONLINE</span>
              <span className="font-bold">Tea Party</span>
            </div>
            <div className="ml-10 text-left flex flex-col mr-32">
              <span className="text-[#9E9E9E]">DATE</span>
              <span className="font-bold">04 May 2023</span>
            </div>
            <div className="ml-10 text-left flex flex-col">
              <span className="text-[#9E9E9E]">DURATION</span>
              <span className="font-bold">300 Mins</span>
            </div>
          </div>
        </div>

        <div className="bg-[#E8EAF5] flex mt-10 mb-10 rounded-lg">
          <img
            src={object}
            alt={object}
            className="w-[300px] mb-0 rounded-lg"
          />
          <div className="flex justify-center items-center">
            <div className="ml-10 text-left flex flex-col mr-72">
              <span className=" bg-pink-400 text-white p-2 rounded-lg">ONLINE</span>
              <span className="font-bold">Tea Party</span>
            </div>
            <div className="ml-10 text-left flex flex-col mr-32">
              <span className="text-[#9E9E9E]">DATE</span>
              <span className="font-bold">04 May 2023</span>
            </div>
            <div className="ml-10 text-left flex flex-col">
              <span className="text-[#9E9E9E]">DURATION</span>
              <span className="font-bold">300 Mins</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Upcoming;
