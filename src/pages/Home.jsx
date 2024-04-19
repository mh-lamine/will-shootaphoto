import Header from "../components/Header";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="text-text bg-background flex flex-col">
      <Header />
      <Gallery />
      <div>
        <div className=" flex flex-col gap-8 p-8">
          <h2 className="text-4xl tracking-wider uppercase ">
            <span className="border-b-2">Beh</span>ind the lens
          </h2>
          <p className="text-lg leading-8">
            I am a photographer based in Toulouse, France. I am a self-taught
            photographer who is about capturing moments that last a lifetime. I
            am specialized in portrait photography and I am always looking for
            new opportunities to grow and learn.
          </p>
        </div>
      </div>

      <footer className="h-40 grid place-items-center border-t-accent border-t">
        all rights reserved &copy; 2024 tukala biduaya
      </footer>
    </div>
  );
};

export default Home;
