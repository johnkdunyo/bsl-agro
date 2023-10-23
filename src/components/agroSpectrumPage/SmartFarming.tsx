import React from "react";
import Image from "next/image";

const SmartFarming = () => {
  return (
    <section className="bg-white">
      <div className="h-full">
        <Image
          alt="man standing in farm"
          src={
            "https://res.cloudinary.com/diek2uivi/image/upload/v1697953220/bsl-website/agro-spectrum/smartfarming_smjn4m.png"
          }
          blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697953220/bsl-website/agro-spectrum/smartfarming_smjn4m.png"
          width={1570}
          height={1736}
          unoptimized
          unselectable={"on"}
          className="object-cover"
        />
      </div>
      <div className="custom-container py-10 md:py-20">
        <h1 className="headerText2 text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#037B20] to-[#FECA3A] text-center md:text-left ">
          Our Smart Farming Strategies
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 pt-14 ">
          <div className="w-full h-full md:h-[30rem]  md:w-[50%] flex justify-center items-start  ">
            <Image
              alt="man standing in farm"
              src={
                "https://res.cloudinary.com/diek2uivi/image/upload/v1697953209/bsl-website/agro-spectrum/Image1_yqzlya.png"
              }
              blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697953209/bsl-website/agro-spectrum/Image1_yqzlya.png"
              width={948}
              height={1312}
              unoptimized
              unselectable={"on"}
              className="object-contain w-[60%] md:w-[90%]"
            />
          </div>
          <div className="w-full  flex flex-col justify-center">
            <p className="text-base leading-8 text-[#000000]">
              The Strategic Business Unit offers Agric Marketplace services
              which include Farm 2 Factory, Farm 2 Retail, Farm 2 Table,
              Planting for Food & Jobs, Subsidy programs, Insurance, Healthcare,
              loans for farmers, Weather & Agronomy services, Agric Value Chain
              actors, Cooperatives- Out-grower services. Through funding from
              the African Development Bank (AfDB) and the Government of Ghana,
              BSL has delivered an E-Agriculture Management Platform to the
              Ministry of Food and Agriculture (MoFA) which included the digital
              registration of 1.6Million farmers and the deployment of the
              first-ever electronic subsidy redemption program in Ghana. The
              farmer enumeration project is registering farmers across Ghana.
              Enumerators are trained to record biometric data, the type of crop
              cultivated, map farm location and farm size of farmers with
              digital tablet provided by Agrospectrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFarming;
