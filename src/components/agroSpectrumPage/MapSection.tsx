import React from "react";
import GhanaMap from "../../data/ghana2.svg";
import Image from "next/image";

const SingleRegionComponent = ({ name, id }: { name: string; id: number }) => {
  return (
    <div className="border flex items-center justify-center px-2 py-1.5 rounded-md shadow-xl relative">
      <button className="font-semibold text-sm">{name}</button>
      <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full border text-xs font-medium text-[#037B20] shadow-lg z-20 flex flex-col justify-center items-center bg-white">
        {id}
      </div>
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="bg-white py-20 border h-full" id="where-we-are">
      <div className="flex flex-col md:flex-row justify-between custom-container gap-10 md:gap-0">
        {/* map */}
        <div className="w-full relative  h-[40rem] md:h-[50rem]">
          {/* <SVGMap map={Nigeria} /> */}

          <Image src={GhanaMap} className="absolute h-full" fill alt="immg" />
        </div>
        <div className="w-full md:w-[80%] text-black flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-semibold text-[#037B20]">
            Where We are Now
          </h1>
          <div>
            <p>
              In collection of data from the famers, Agrospectrum have covered
              the 5 northern regions which includes:
            </p>
          </div>

          <div className=" flex flex-col gap-6 py-4">
            <div className="grid grid-cols-3 gap-4">
              <SingleRegionComponent id={1} name="Northern Region" />
              <SingleRegionComponent id={2} name="North-East Region" />
              <SingleRegionComponent id={3} name="Upper East Region" />
            </div>
            <div className="flex justify-center gap-4">
              <SingleRegionComponent id={4} name="Upper West Region" />
              <SingleRegionComponent id={5} name="Savannah Region" />
            </div>
          </div>

          <div>
            <p className="text-base leading-[2.2rem] text-right font-light">
              “The next step is to move to the southern part of the country to
              enumerate all farmers unto the platform to improve efficiency in
              the input of the subsidy programme by eliminating the manual
              system’’.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
