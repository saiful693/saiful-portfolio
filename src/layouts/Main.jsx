import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";

const Main = () => {
  return (
    <div className="bg-[#252734]">
      <div className=" py-2 border-b border-spacing-1 border-gray-600">
        <div className="max-w-screen-xl mx-auto">
          <NavBar></NavBar>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
