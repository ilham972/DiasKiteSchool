// import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function Photos() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full md:max-w-full "
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem
//             key={index}
//             className=" md:basis-1/2 lg:basis-1/3 md:mx-auto "
//           >
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Example array of image URLs
const imageUrls = [
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_3_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_15_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_4_2024-03-26_19-28-43.jpg ",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_5_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_9_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_7_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_2_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_18_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_2024-03-26_22-25-23.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_14_2024-03-26_19-28-43%20(1).jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_11_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_12_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_13_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_1_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_6_2024-03-26_19-28-43.jpg",
  "https://ajmrbhqvrlvegajrmqvy.supabase.co/storage/v1/object/public/gallery/photo_10_2024-03-26_19-28-43.jpg",
];

export function Photos() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:max-w-full max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/2 lg:basis-1/3 md:mx-auto"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex w-full  h-full p-0 aspect-square items-center justify-center ">
                  {/* Displaying the image */}
                  <Image
                    height={1000}
                    width={1000}
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
