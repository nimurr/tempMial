import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserMenu from "./components/UserMenu";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";

function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex bg-gray-100 relative dark:bg-[#111827]">
      {/* left side navbar  */}
      <div
        className={`lg:w-3/12 xl:w-2/12 md:w-4/12 lg:ml-0 ${
          show ? "ml-0" : "-ml-[1000px]"
        } absolute lg:relative h-[100vh] z-20 `}
      >

        <button
          onClick={handleShow}
          className="text-4xl dark:text-gray-200 dark:bg-gray-700 rounded absolute lg:hidden right-5 top-5"
        >
          <IoMdClose className="" />
        </button>

        <Navbar></Navbar>

      </div>

      <div className="lg:w-10/12 w-full">
        {/* top navbar  */}
        <div className=" relative w-full h-20 md:px-10 pl-10 bg-white border-b border-gray-300 dark:border-gray-600 dark:bg-[#111827] block">
          <UserMenu></UserMenu>
          <button
            onClick={handleShow}
            className="text-2xl dark:text-white absolute lg:hidden left-4 top-7"
          >
            <RiMenu2Line />
          </button>
        </div>

        {/* outlet  */}
        <div className="sm:p-10 p-4 h-[90vh] overflow-y-scroll">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
