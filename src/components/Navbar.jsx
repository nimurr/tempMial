import { MdOutlineInbox } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";


export default function Navbar() {

  const handleRefresh = ()=>{
    // location.reload()
  }

  return (
    <div className=" h-[100vh] overflow-y-scroll  w-full flex flex-col justify-between bg-white z-50 dark:bg-[#111827] border-r border-gray-300 dark:border-gray-600 px-8 py-6">
      {/* top nav item  */}
      <div className="">
        <Link to={'/'} className="text-4xl font-extrabold dark:text-white">
          Bot<span className="text-rose-600">gmail</span>
        </Link>
        <div className="mt-5">
          <ul>
            <NavLink
              to={"/"}
              className="flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 hover:text-black rounded cursor-pointer p-2"
            >
              <MdOutlineInbox className="text-2xl text-gray-500" /> Inbox
            </NavLink>
            <li onClick={handleRefresh} className="flex group gap-2 items-center font-semibold dark:hover:bg-[#141a24] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2">
              <TbRefresh className="text-2xl transition-transform transform group-active:rotate-90 text-gray-500" /> <span>Refresh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ads  */}
      <div className="my-5">
        <img className="w-full h-[350px]"  src="https://res.cloudinary.com/dav9mftpk/image/upload/v1704289996/Screenshot_2_ymtvf0.png" alt="" />
      </div>


      {/* bottom Nav item  */}
      <div>
        <ul>
          <NavLink
            to={"/faq"}
            className=" my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2"
          >
            FAQ
          </NavLink>
          <NavLink
            to={"/privacy"}
            className=" my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2"
          >
            Privacy
          </NavLink>
          <NavLink
            to={"/feedback"}
            className=" my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2"
          >
            Feedback
          </NavLink>
          <NavLink
            to={"/contact"}
            className=" my-1 flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2"
          >
            Contacts
          </NavLink>

          <div className="px-2 my-4">
            <span className="dark:text-gray-300">0B / 40MB</span>
            <span className="w-full rounded-xl bg-gray-300 h-2 block my-1"></span>
          </div>

          <hr className="dark:bg-gray-500 bg-gray-200 h-[1px] border-0" />
          <p className="dark:text-gray-200 mt-4 font-semibold  flex items-center mb-2"><FaRegCopyright className="mr-1" />BotGmail</p>
          <span className="text-[13px]  block text-gray-500">Do Not Sell My Personal InformationChange Consent</span>
        </ul>
      </div>
    </div>
  );
}
