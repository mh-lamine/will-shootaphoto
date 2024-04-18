import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Typewriter from "typewriter-effect";

const Home = () => {
  // window.onload = () => {
  //   const glitchyWord = document.querySelector("#glitchy-word");
  //   const letters = "abcdefghijklmnopqrstuvwxyz";

  //     let iterations = 0;
  //     const interval = setInterval(() => {
  //       glitchyWord.innerText = glitchyWord.innerText
  //         .split("")
  //         .map((letter, index) => {
  //           if (index < iterations) {
  //             return glitchyWord.dataset.value[index];
  //           }
  //           return letters[Math.floor(Math.random() * 26)];
  //         })
  //         .join("");

  //       if (iterations >= glitchyWord.innerText.length) {
  //         clearInterval(interval);
  //       }
  //       iterations += 1 / 4;
  //     }, 50);
  // }
  return (
    <div className="text-text bg-background overflow-hidden">
      <Header />
      <Gallery />
      <div className="h-screen flex flex-col gap-4 p-8">
        <h2 className="text-4xl tracking-wider uppercase ">
          <span className="border-b-2">Beh</span>ind the lens
        </h2>
        <p className="text-lg leading-8 flex">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
              .typeString("I am a photographer based in Toulouse.")
              .pauseFor(1000)
              .deleteChars(18)
              .typeString("specialized in portrait.")
              .pauseFor(1000)
              .deleteChars(24)
              .typeString(
                "and I am passionate about capturing moments that last a lifetime..."
                )
                .start();
              }
            }
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
