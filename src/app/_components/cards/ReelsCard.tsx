import React from "react";

function ReelsCard() {
  const reelsData = [
    {
      id: 1,
      title: "Sunset",
      subtitle: "Beautiful evening view",
      image:
        "https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg",
    },
    {
      id: 2,
      title: "Mountain View",
      subtitle: "Peaceful scenery",
      image:
        "https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg",
    },
    {
      id: 3,
      title: "Ocean Waves",
      subtitle: "Relaxing sea waves",
      image:
        "https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg",
    },
    {
      id: 4,
      title: "Forest Path",
      subtitle: "A peaceful walk in the woods",
      image:
        "https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 ">
      {reelsData.map((reel) => (
        <div
          key={reel.id}
          className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          {/* Background Image */}
          <div
            className="w-full h-80 bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${reel.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30"></div>

          {/* Content */}
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-lg font-bold">{reel.title}</h3>
            <p className="text-sm opacity-80">{reel.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReelsCard;
