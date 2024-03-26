// import Image from "next/image";
// import Button from "./Button";
// import Link from "next/link";
// import { ChevronDown, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   return (
//     <section className="mx-auto max-w-[1440px]px-6 lg:px-20 2xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <Image
//           src="/camp.svg"
//           alt="camp"
//           width={50}
//           height={50}
//           className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] "
//         />
//         <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%] font-in">
//           Whereas disregard and
//         </h1>
//         <p className="text-[16px] font-[400] mt-6 text-foreground xl:max-w-[520px]">
//           We want to be on each of your journeys seeking the satisfaction of
//           seeing the incorruptible beauty of nature. We can help you on an
//           adventure around the world in just one app
//         </p>

//         <div className="my-11 flex flex-wrap gap-5 ">
//           <div className="flex items-center gap-2">
//             {Array(5)
//               .fill(1)
//               .map((_, index) => (
//                 <Image
//                   src="/star.svg"
//                   key={index}
//                   alt="star"
//                   width={22}
//                   height={22}
//                 />
//               ))}
//           </div>

//           <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-blue-70 ">
//             99+
//             <Link href="#review-section">
//               <span className="text-[16px] font-[400] lg:text-[18px] lg:font-[400] ml-1 hover:scale-105 transition-all ease-in-out hover:text-primary">
//                 {" "}
//                 happy clients
//                 <ChevronDown className="inline-block ml-1" />
//               </span>
//             </Link>
//           </p>
//         </div>

//         <div className="flex flex-col items-center w-full gap-5 sm:flex-row">
//           <a
//             href="https://wa.me/94766558873 "
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button
//               variant="secondary"
//               className="text-white  text-[16px] font-[400] whitespace-nowrap cursor-pointer px-14 py-8 "
//             >
//               <MessageCircle className="mr-2 p-0" /> DM to Dias
//             </Button>
//           </a>

//           <Button
//             variant="ghost"
//             className="text-black bg-opacity-100 flext items-center justify between gap-3 text-[16px] font-[400] whitespace-nowrap cursor-pointer"
//           >
//             <Image src="/play.svg" alt="Our Spots" width={24} height={24} /> Our
//             Spots
//           </Button>
//         </div>
//       </div>

//       <div className="relative flex flex-1 items-start">
//         <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-secondary px-7 py-8">
//           <div className="flex flex-col">
//             <div className="flexBetween">
//               <p className="text-[16px] font-[400] text-foreground">country</p>
//               <Image src="/close.svg" alt="close" width={24} height={24} />
//             </div>
//             <p className="text-[20px] font-[700] text-white">Sri Lanka</p>
//           </div>

//           <div className="flexBetween">
//             <div className="flex flex-col">
//               <p className="text-[16px] font-[400] block text-foreground">
//                 Locations
//               </p>
//               <p className="text-[20px] font-[700] text-white">7+ spots</p>
//             </div>
//             <div className="flex flex-col">
//               <p className="text-[16px] font-[400] block text-gray-300">
//                 Avg speed
//               </p>
//               <p className="text-[20px] font-[700] text-white">20 knts</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              width={1000}
              height={1000}
              alt=""
              src="/img-2.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          {/* <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Grow your audience
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-green-50 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
          {/* className="relative z-20 flex flex-1 flex-col xl:w-1/2" */}
          <div>
            <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%] text-green-90">
              Whereas disregard and
            </h1>
            <p className="text-[16px] font-[400] mt-6 text-foreground xl:max-w-[520px] text-green-90">
              We want to be on each of your journeys seeking the satisfaction of
              seeing the incorruptible beauty of nature. We can help you on an
              adventure around the world in just one app
            </p>

            <div className="my-11 flex flex-wrap gap-5 ">
              <div className="flex items-center gap-2">
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <Image
                      src="/star.svg"
                      key={index}
                      alt="star"
                      width={22}
                      height={22}
                    />
                  ))}
              </div>

              <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-blue-70 ">
                99+
                <Link href="#review-section">
                  <span className="text-[16px] font-[400] lg:text-[18px] lg:font-[400] ml-1 hover:scale-105 transition-all ease-in-out hover:text-green-50">
                    happy clients
                    <ChevronDown className="inline-block ml-1" />
                  </span>
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-center w-full gap-5 sm:flex-row">
              <a
                href="https:wa.me/94766558873 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="text-white  text-[16px] font-[400] whitespace-nowrap cursor-pointer px-14 py-8 ">
                  <MessageCircle className="mr-2 p-0" /> DM to Dias
                </Button>
              </a>

              <Button
                variant="ghost"
                className="text-black hover:bg-white/0 hover:text-green-50 flext items-center justify between gap-3 text-[16px] font-[400] whitespace-nowrap cursor-pointer"
              >
                <Image src="/play.svg" alt="Our Spots" width={24} height={24} />{" "}
                Our Spots
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
