import React from "react";
import Image from "next/image";

const EnumerationData = [
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953211/bsl-website/agro-spectrum/farmer-enum-1_qnnoib.png",
    description:
      "A National ID, preferably the Ghana card must be provided for registration eligibility",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953218/bsl-website/agro-spectrum/farmer-enum-2_vhjvs7.png",
    description: "Farmer picture and biometric details are taken",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953213/bsl-website/agro-spectrum/farmer-enum-3_lmpegt.png",
    description: "Digital address of Residence is recorded",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953213/bsl-website/agro-spectrum/farmer-enum-4_epxc7v.png",
    description:
      "Farm information recored ie. Farm location, farm size, crop type and Animal Husbandry",
    className: "col-span-2",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953216/bsl-website/agro-spectrum/farmer-enum-5_cbemff.png",
    description:
      "Information is synced in database and sent for quality assurance",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953220/bsl-website/agro-spectrum/farmer-enum-6_ws9znb.png",
    description:
      "Data is carefully and thoroughly checked by Quality Assurance and linked to the National ID System for validation",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953214/bsl-website/agro-spectrum/farmer-enum-7_xsvuha.png",
    description:
      "All valid farmers on the Agrospectrum platform will be issued with a farmer verification number that qualifies them for any Subsidy Redemption",
  },
  {
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697953210/bsl-website/agro-spectrum/farmer-enum-8_wqwdcs.png",
    description:
      "All valid farmers on the Agrospectrum platform will be issued with a farmer verification number that qualifies them for any Subsidy Redemption",
  },
];

const SingleProcess = ({
  imageURL,
  description,
}: {
  imageURL: string;
  description: string;
}) => {
  return (
    <div className="h-full flex flex-col gap-2 w-full justify-start items-center ">
      <div className=" flex items-center justify-center">
        <Image
          alt="man standing in farm"
          src={imageURL}
          blurDataURL={imageURL}
          width={549}
          height={532}
          unoptimized
          unselectable={"on"}
          className="object-contain w-[90%] md:w-[90%]"
        />
      </div>

      <div className=" px-2 md:px-3 py-2 bg-white rounded-lg ">
        <p className="text-[#037B20] text-center text-sm md:text-base font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const EnumerationProcess = () => {
  return (
    <section className="bg-[#037B20]  h-full md:h-[108rem] relative">
      <div className="hidden md:block border-red-500 absolute  h-[95%] md:h-[85%] w-full top-[8%] md:top-[13%] rotate-6 bg-[#1E963B] rounded-[120px] -z-0"></div>
      <div className=" md:absolute w-full">
        <div className=" pt-12 pb-2 z-20 h-full  w-full custom-container">
          <h1 className="headerText2 text-[#FECA3A] text-center">
            The Enumeration Process
          </h1>
          <p className="text-base font-light mt-5">
            The farmer enumeration project powered by Agrospectrum is
            registering farmers across Ghana. Enumerators are trained to record,
            the types of crops cultivated, map farm location and farm size of
            farmers with digital tablets provided by Broadspectrum.
          </p>

          <div className="flex flex-col gap-16 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
              {/* first 3 */}
              {EnumerationData &&
                EnumerationData.slice(0, 3).map((data, _x) => (
                  <SingleProcess
                    key={_x}
                    imageURL={data.imageURL}
                    description={data.description}
                  />
                ))}
            </div>

            <div className="w-full  flex flex-col md:flex-row gap-16 items-center justify-center md:px-10">
              <div className="w-full md:w-[50%]">
                <SingleProcess
                  imageURL={EnumerationData[3].imageURL}
                  description={EnumerationData[3].description}
                />
              </div>
              <div className="w-full md:w-[32%]">
                <SingleProcess
                  imageURL={EnumerationData[4].imageURL}
                  description={EnumerationData[4].description}
                />
              </div>
            </div>

            {/* last 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
              {EnumerationData &&
                EnumerationData.slice(-3).map((data, _x) => (
                  <SingleProcess
                    key={_x}
                    imageURL={data.imageURL}
                    description={data.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnumerationProcess;
