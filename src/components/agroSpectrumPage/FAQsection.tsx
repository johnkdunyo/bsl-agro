import React from "react";

const FAQsection = () => {
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

          <div>
            <h1 className="headerText1 text-[#037B20]">FAQ's</h1>
            <div>
              <p>What is the benefit of E-Agric to the farmer and MOFA?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
