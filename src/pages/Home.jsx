import umbrella from "../assets/umbrella.jpg";
import kimono from "../assets/kimono.png";
import Cards from "../components/Cards";
import kitchen from "../assets/kitchen.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import logo from "../assets/profil_pic.jpeg";

const Home = () => {
  return (
    <div className="py-6 h-screen flex flex-col items-center justify-center gap-7">
      <div>
        <Cards pics={[umbrella, kimono]} />
        <p className="text-center">Passion</p>
      </div>
      <div className="flex items-center justify-between w-full gap-2 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">
          <img
            src={logo}
            alt="home logo"
            className="w-16 rounded-full shadow-lg"
          />
        </div>
        <span className="w-full border-t-2 border-t-secondary "></span>
        <h1 className="uppercase font-mono tracking-wide  text-4xl font-bold opacity-25">
          shootaphoto
        </h1>

        <span className="w-full border-t-2 border-t-secondary "></span>
      </div>
      <div>
        <p className="text-center">Détermination</p>
        <Cards pics={[kitchen, kitchen2]} />
      </div>
    </div>
  );
};

export default Home;
