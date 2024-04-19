import primary1 from "../assets/primary1.png";
import primary2 from "../assets/primary2.png";

const Gallery = () => {
  const images = [primary1, primary2];

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full max-w-72 rounded-sm shadow-md ${
              index % 2 === 0
                ? "translate-x-3 -translate-y-5"
                : "-translate-x-3 translate-y-5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
