import React, { useState } from "react";

interface AccordionProps {
  key: number;
  title: string;
  data: string[];
  isOpen: boolean;
}

const AccordionData: AccordionProps[] = [
  {
    key: 1,
    title: "What is the benefit of E-Agric to the farmer and MOFA?",
    data: [
      "It establishes a national database of farmers providing a digital footprint for farmers for inclusion in agricultural interventions",
      "Providing linkages to Agric value chain actors",
      "Provides information for policy planning",
      "Farmer gets access to services including digital services",
    ],
    isOpen: false,
  },
  {
    key: 2,
    title: "How many farmers have been registered now?",
    data: ["Over 1.6 million in the five northern regions."],
    isOpen: false,
  },
  {
    key: 3,
    title: "What have you achieved so far with this initiative?",
    data: [
      "E-Agric has established a database of farmers. ",
      "E-Agric has provided a digital subsidy management platform for the national Agric input subsidy program under the planting for food and jobs.",
    ],
    isOpen: false,
  },
  {
    key: 4,
    title: "Impact of E-Agric on the subsidy system?",
    data: [
      "It has reduced the smuggling of inputs",
      "Provided transparency in the management of the input subsidy programme",
      "Introduced efficiency in the input subsidy programme by eliminating the manual system",
      "Increased access to inputs leading to improved productivity and hence increased incomes to farmers.",
    ],
    isOpen: false,
  },
];

function Accordion(props: {
  toggleAccordion: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
  isOpen: any;
  data: string[];
}) {
  return (
    <div className=" mb-1 w-full">
      <button
        className="w-full py-5  flex justify-between items-start 
                            transition duration-300"
        onClick={props.toggleAccordion}
      >
        <h1 className="text-lg font-medium md:font-semibold md:text-xl text-left ">
          {props.title}
        </h1>
        <span
          className={`float-right transform  px-2 rounded-[15px] ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }  
                                 transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="md:pl-10 pb-4 transform transition-transform duration-300">
          <ul className="flex flex-col gap-2 font-light text-base">
            {props.data &&
              props.data.map((item, _x) => (
                <li
                  key={_x}
                  className="transform transition-transform duration-300"
                >
                  {" "}
                  - {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const FAQsection = () => {
  const [accordions, setAccordion] = useState<AccordionProps[]>(AccordionData);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <section className="h-full w-full bg-white py-20">
      <div className="custom-container flex flex-col justify-between gap-10">
        <div>
          <video
            src="https://res.cloudinary.com/diek2uivi/video/upload/v1697953236/bsl-website/agro-spectrum/agro-vid_ckem7q.mp4"
            autoPlay
            loop
            controls
            className="  w-full  bg-center  object-cover
            min-w-full min-h-full max-w-none"
          ></video>

          <div className="my-16">
            <h1 className="headerText1 text-[#037B20]">FAQ's</h1>
            <div className="text-[#037B20]  w-full max-w-3xl flex flex-col gap-0 divide-y divide-[#037B20]/30 border-y mt-4 border-[#037B20]/30">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
