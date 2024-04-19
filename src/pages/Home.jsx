import Footer from "../components/Footer";
import Header from "../components/Header";
import Preview from "../components/Preview";

const Home = () => {
  return (
    <div className="text-text bg-background flex flex-col">
      <Header />
      <Preview />
      <div>
        <div className="h-screen flex flex-col gap-8 p-8">
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
      <Footer />
    </div>
  );
};

export default Home;
