import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div className="my-5 w-full flex gap-4 items-center justify-center">
      <div className="w-1/2 ">
        <Image
          className="rounded-lg"
          height={450}
          width={700}
          src="https://media.istockphoto.com/id/1952253409/photo/skyline-paris.jpg?s=2048x2048&w=is&k=20&c=dTKLoqGjiavuu54SMuep8-1ggT89YLNXvSPlcNt3N8U="
          alt="gallery-1"
        />
      </div>
      <div className="w-1/2">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <Image
              className="rounded-lg"
              height={200}
              width={560}
              src="https://cdn.pixabay.com/photo/2023/12/04/16/12/berlin-8429780_1280.jpg"
              alt="gallery-2"
            />
          </div>

          <div>
            <Image
              className="rounded-lg"
              height={200}
              width={560}
              src="https://cdn.pixabay.com/photo/2014/11/22/08/37/thames-541456_1280.jpg"
              alt="gallery-3"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div>
            <Image
              className="rounded-lg"
              height={200}
              width={560}
              src="https://cdn.pixabay.com/photo/2014/11/22/08/37/thames-541456_1280.jpg"
              alt="gallery-4"
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              height={200}
              width={560}
              src="https://cdn.pixabay.com/photo/2023/12/04/16/12/berlin-8429780_1280.jpg"
              alt="gallery-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
