import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";
import { Animate } from "../animations/ScrollAnimator";

const HeroSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };

  return (
    <section className=" h-[120vh] sm:h-[90vh] md:h-[110vh] bg-cover   bg-[center_left_37rem]   md:bg-center top-0 relative">
      <video
        src="https://res.cloudinary.com/diek2uivi/video/upload/v1697953236/bsl-website/agro-spectrum/agro-vid_ckem7q.mp4"
        autoPlay
        loop
        muted
        className="absolute  w-auto   bg-center  object-cover
            min-w-full min-h-full max-w-none"
      ></video>
      {/* Ggreen overlay bg */}
      <div className="h-[38vh] absolute  border-red-500 w-full bottom-0 bg-gradient-to-t from-[#037B20]  opacity-90 "></div>
      <div className="absolute h-full w-full">
        <div className="h-full w-full  flex flex-col justify-between   pb-10 md:pb-8    custom-container">
          <div className="h-[10rem] md:h-[8rem]"></div>
          <Animate.FadeUp className=" w-full  flex flex-col justify-center items-center md:items-start  gap-10 text-center">
            <h1 className="font-semibold text-[1.9rem] md:text-7xl md:leading-[5rem] md:tracking-normal ">
              Redefining the future of Agriculture through digital innovation.
            </h1>
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-lg md:text-xl tracking-normal   md:mt-10 font-light w-full max-w-3xl ">
                We provide an ecosystem where Farmers and other Agricultural
                Value Chain actors have access to information and connect to
                trade.
              </p>
            </div>
          </Animate.FadeUp>

          <div className="w-full flex flex-col justify-center items-center ">
            <Animate.FadeUp className="text-white font-medium text-xl   text-center tracking-widest w-full ">
              A SUBSIDIARY OF BROADSPECTRUM
            </Animate.FadeUp>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-[12%] bottom-[100px] left-0 right-0  absolute z-20">
        <button>
          <Lottie options={lottieDefaultOptions} height={160} width={160} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
