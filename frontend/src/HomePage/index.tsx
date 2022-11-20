import React from "react";
import landingImage from "../Images/Untitled_Artwork 4.png";
import wrench from "../Images/wrench.png";
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Missing_compoenents from "../Images/Untitled_Artwork 3.png";
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';

interface IHome {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}

const Home: React.FC<IHome> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="overflow-y-none">
      <div className="grid place-items-center w-full h-screen text-center">
        <div className="flex place-items-center">
          <div className="pr-32">
            <div className="text-6xl font-bold">Welcome to Assemb.ly</div>
            <div className="text-xl pt-8 font-semibold">
              The enterprise product to help detect errors in machine operated
              assembly lines
            </div>
          </div>
          <div className="flex-l" />
          <img src={landingImage} className="h-[60vh] mt-24" alt="HARSHIL IMAGE" />
        </div>
      </div>
      <div className="w-full h-96 bg-slate-200">
        <div className="font-bold px-16 py-8 text-4xl">What is Assemb.ly</div>
        <div className="w-full flex px-16 py-16">
          <div className="w-1/2 font-semibold text-xl">
            Assemb.ly is an enterprise SaaS that allows manufactureres to have
            an all in one solution to detect and track faulty parts using a
            video capture system and machine learning to determine whether
            circuit boards have missing components during the assembly process.
          </div>
          <img src={Missing_compoenents} className="w-1/3 mt-[-14%] ml-[14%] object-scale-down" alt="HARSHIL IMAGE" />
        </div>
      </div>
      <div className="text-4xl px-16 pt-8 mt-14 font-bold">
        Why use Assemb.ly
      </div>
      <div className="w-full text-center align-center overflow-y-none">
        <div className="absolute w-full h-[70vh] bg-slate-200 z-0 mb-6 -skew-y-3" />
        <div className="align-center mx-72 py-32 w-full relative flex">
          <div className="h-full mx-4 my-6 rounded-lg w-1/5 py-3">
            <MemoryOutlinedIcon sx={{ fontSize: 100 }} className="text-purple" />
            <div className="text-3xl pb-4 font-bold">Precision</div>
            <div className="text-lg font-semibold">
              With Assemb.ly our model accurately determines wheteher there are
              missing components of each circuit board and flags each inaccuracy for the user
              to view in the built in dashboard
            </div>
          </div>

          <div className="h-full  mx-4 my-6 rounded-lg w-1/5 py-3">
            <PanToolOutlinedIcon sx={{ fontSize: 100 }} className="text-purple" />
            <div className="text-3xl pb-4 font-bold">Ease of Use</div>
            <div className="text-lg font-semibold">
              With our intuitive UI, you can easily detect which parts of the assembly line needs readjustment and
              determine key statistics.
              In the end limiting the number of faulty products being produced not only reducing costs and saving
              client relations.
            </div>
          </div>

          <div className="h-full  mx-4 my-6 rounded-lg w-1/5 py-3">
            <DashboardOutlinedIcon sx={{ fontSize: 100 }} className="text-purple" />
            <div className="text-3xl pb-4 font-bold">Dashboard</div>
            <div className="text-lg font-semibold">
              Assemb.ly has a built in analytical dashboard that allows the user to select and view
              graphs that show the number of times circuit boards are missing components on each given day,
              and which components are missing the most over a selected time period.
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center">
        <div>Built using familiar technologies</div>
        <div className="flex">

        </div>
      </div>
    </div>
  );
}

export default Home;
