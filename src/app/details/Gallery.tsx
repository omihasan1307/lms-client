import Image from "next/image";
import React from "react";

function Gallery({ data }: any) {
  if (!data?.images || data.images.length === 0) return null; // Handle empty images

  return (
    <div className="my-5 w-full grid grid-cols-2 gap-4">
      {/* Large Image (First One) */}
      <div className="col-span-2 md:col-span-1">
        <Image
          className="rounded-lg w-full h-auto object-cover"
          height={450}
          width={700}
          src={data.images[0]?.image}
          alt={`gallery-1`}
        />
      </div>

      {/* Grid of Smaller Images */}
      <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4">
        {data.images.slice(1, 5).map((image: any, index: number) => (
          <div key={image.id} className="w-full">
            <Image
              className="rounded-lg w-full h-auto object-cover"
              height={200}
              width={560}
              src={image.image}
              alt={`gallery-${index + 2}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
