import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col mt-7">
      <div className="padding-container max-container w-full pb-16 Lg:pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container mx-5 relative w-full">
        <Image
          src="https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_16_2024-03-26_19-28-43.jpg"
          alt="boat"
          width={1440}
          height={400}
          className=" object-cover w-full mx-5 lg:mx-0 border border-green-50  rounded-2xl  object-center 2xl:rounded-5xl"
        />

        <div className="absolute  flex bg-white/75 white-30 backdrop-blur-lg transition-all py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md  md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
