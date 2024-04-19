import primary1 from "../assets/primary1.png";
import primary2 from "../assets/primary2.png";
import { Link } from "react-router-dom";

const Preview = () => {
  const images = [primary1, primary2];

  return (
    <Link to="/gallery">
      <div className="h-screen flex flex-col justify-center items-center p-4">
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
        <div className="translate-y-20 flex items-center justify-center gap-5 w-full">
          <span className="border-y-[.5px] border-accent w-20"></span>See more
          <span className="border-y-[.5px] border-accent w-20 h-px"></span>
        </div>
      </div>
    </Link>
  );
};

export default Preview;
