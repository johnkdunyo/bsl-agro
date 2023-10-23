import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="w-full h-full py-20 bg-white" id="about">
      <div className="custom-container flex flex-col">
        <h1 className="headerText1 text-[#358E40]">About Us</h1>
        {/* mobile */}
        <div className="w-full flex flex-col justify-between gap-8 text-base leading-7 text-[#000000] md:hidden">
          <p>
            Agrospectrum powered by Broadspectrum is an initiative set to
            redefine and connect the future of Agric through technology for
            Ministry of Food and Agriculture. (MOFA) and Agric value chain
            actors.
          </p>
          <Image
            alt="man standing in farm"
            src={
              "https://res.cloudinary.com/diek2uivi/image/upload/v1697953214/bsl-website/agro-spectrum/about_t7tj69.png"
            }
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697953214/bsl-website/agro-spectrum/about_t7tj69.png"
            width={1570}
            height={1736}
            unoptimized
            unselectable={"on"}
          />
          <p className="text-[#358E40] font-semibold text-xl md:text-3xl text-center">
            ‘’Accelerating Agricultural Development Through Value Addition’’
          </p>
          <p>
            The Agrospectrum platform has registered 1.6 million farmers and has
            established a national database of farmers providing a digital
            footprint of farmers for inclusion in agricultural interventions
            like providing a linkage to Agric value chain actors, providing
            information for policy planning, and the farmer gets access to some
            digital services which is yet to be launched. The goal of this
            module was to help manage the Ministry of Food and Agriculture
            (MOFA) subsidy program. Agrospectrum successfully provided a digital
            subsidy management platform for the national Agric input subsidy
            program under the planting for food and jobs.
          </p>
        </div>
        {/* destop */}
        <div className=" flex-col md:flex-row justify-between gap-10 hidden md:flex ">
          <div className="w-full text-[#000000]  flex flex-col justify-start gap-10 text-base leading-7">
            <p>
              Agrospectrum powered by Broadspectrum is an initiative set to
              redefine and connect the future of Agric through technology for
              Ministry of Food and Agriculture. (MOFA) and Agric value chain
              actors.
            </p>
            <p className="text-[#358E40] font-semibold text-xl md:text-3xl">
              ‘’Accelerating Agricultural Development Through Value Addition’’
            </p>
            <p>
              The Agrospectrum platform has registered 1.6 million farmers and
              has established a national database of farmers providing a digital
              footprint of farmers for inclusion in agricultural interventions
              like providing a linkage to Agric value chain actors, providing
              information for policy planning, and the farmer gets access to
              some digital services which is yet to be launched. The goal of
              this module was to help manage the Ministry of Food and
              Agriculture (MOFA) subsidy program. Agrospectrum successfully
              provided a digital subsidy management platform for the national
              Agric input subsidy program under the planting for food and jobs.
            </p>
          </div>
          <div className="w-full md:w-[80%]">
            <Image
              alt="man standing in farm"
              src={
                "https://res.cloudinary.com/diek2uivi/image/upload/v1697953214/bsl-website/agro-spectrum/about_t7tj69.png"
              }
              blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697953214/bsl-website/agro-spectrum/about_t7tj69.png"
              width={1570}
              height={1736}
              unoptimized
              unselectable={"on"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
