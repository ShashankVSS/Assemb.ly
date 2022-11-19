import React from "react";
import landingImage from "../Images/hArsil_square.png";
import Logo from "../Images/autism.png";
function Home() {
  return (
    <>
      <div className="grid place-items-center w-full h-screen text-center">
        <div className="flex place-items-center">
          <div className="pr-32">
            <div className="text-6xl font-bold">Welcome to Assemb.ly</div>
            <div>
              The enterprise product to help detect errors in machine operated
              assembly lines
            </div>
            <div>
              <button>Get Started</button>
            </div>
          </div>
          <div className="flex-l" />
          <img src={landingImage} alt="HARSHIL IMAGE" />
        </div>
      </div>
      <div className="w-full h-96 bg-slate-200">
        <div className="font-bold px-8 py-8 text-4xl">What is Assemb.ly</div>
        <div className="w-1/2 px-8 py-16">
          <div className="font-semibold font-md">
            Assemb.ly is an enterprise SaaS that allows manufactureres to have
            an all in one solution to detect and track faulty parts using a
            video capture system and machine learning to determine whether
            circuit boards have missing components during the assembly process.
          </div>
        </div>
      </div>
      <div className="text-4xl px-8 py-4 font-bold">Why use Assemb.ly</div>
      <div className="w-full mx-56 text-center align-center flex">
        <div className="absolute h-[50vh] bg-slate-300 -skew-y-12"> </div>
          <div className="align-center flex">
            <div className="h-full mx-3 my-6 rounded-lg border border-lavender w-1/5 py-3">
              <img src={Logo} className="object-scale-down" />
              <div>Precision</div>
              <div>
                With Assemb.ly our model accurately determines wheteher there
                are missing features
              </div>
            </div>

            <div className="h-full mx-3 my-6 rounded-lg border border-lavender w-1/5 py-3">
              <img src={Logo} className="object-scale-down" />
              <div>Proactive</div>
              <div>
                Catch errors in your assembly line before its too late. Our
                software allows clients to catch potential faults in their
                production line before it impacts the outcome of products being
                shipped out to consumers
              </div>
            </div>

            <div className="h-full mx-3 my-6 flex flex-col rounded-lg border border-lavender w-1/5 py-3">
              <img src={Logo} className="object-scale-down" />
              <div>All in one</div>
              <div>
                Assemb.ly provides an all in one soluttion for users to not only
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
