import React from "react";

interface IDashboard {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}
const DashBoard: React.FC<IDashboard> = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className="h-[90vh] flex-col">
      <div className="h-[90%] mt-10">
        <div className="grid h-1/2 grid-cols-3 gap-4 my-4 mx-8">
          <div className="col-span-2 border border-grey-300">asdasdsa</div>
          <div className="col-span-1 border border-grey-300">asdasdas</div>
        </div>
        <div className="grid h-1/2 grid-cols-2 mx-8 my-4 gap-4">
          <div className="col-span-1 border border-grey-300">asdasdas</div>
          <div className="col-span-1 border border-grey-300">asdasdasd</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
