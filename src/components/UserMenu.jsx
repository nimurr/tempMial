import {
  Avatar,
  Button,
  Checkbox,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Label,
  Modal,
  Select,
  TextInput
} from "flowbite-react";
import { MdOutlineEmail } from "react-icons/md";
import {
  HiMail,
  HiOutlineExclamationCircle,
  HiOutlineUserAdd
} from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

export default function UserMenu() {
  const copyEmail = () => {
    navigator.clipboard.writeText("test@temp.com");
    toast.success("Email Copy Successfully!");
  };
  const [openModal, setOpenModal] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setEye(!eye);
  };

  return (
    <div className="flex justify-between py-5 pl-3 lg:pl-0 pr-2">
      <Toaster position="top-center" reverseOrder={true} />
      {/*=================== left side fake email ===========*/}
      <p
        onClick={copyEmail}
        className="dark:text-white md:text-xl hover:text-gray-400 flex items-center gap-2 cursor-pointer"
      >
        <MdOutlineEmail className="text-2xl"></MdOutlineEmail>test@botgmail.com
      </p>

      <div>
        {/* create account   */}
        <Modal
          className=""
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header className="dark:bg-[#1f2937] p-1 md:p-4 bg-gray-200"></Modal.Header>
          <div className="dark:bg-[#1f2937] ">
            <Modal.Body className="w-full mx-auto">
              <form className="flex max-w-full flex-col gap-4">
                <div className="text-center md:w-14 w-10 mx-auto bg-rose-600 md:h-14 h-10 flex justify-center  rounded-full items-center">
                  <HiOutlineUserAdd className=" text-white text-2xl text-center " />
                </div>

                <div className="w-8/12 mx-auto text-center">
                  <h2 className="font-bold dark:text-gray-300 text-gray-700 ">Create An Account</h2>
                  <p className="text-gray-500 hidden md:block">
                    Here you can create a new account for this you need to
                    select a username, then domain and password!
                  </p>
                </div>

                <div>
                  <div className="mb-2 hidden md:block w-fu">
                    <Label htmlFor="email1" value="Email" />
                  </div>
                  <div className="flex">
                    {/* <TextInput
                      id="email1"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                      className="w-8/12 rounded-0"
                    /> */}
                    <TextInput
                      className="w-8/12 rounded-0"
                      id="email4"
                      type="email"
                      icon={HiMail}
                      placeholder="username"
                      required
                    />
                    <Select className="w-4/12" id="countries" required>
                      <option>botgmail.com</option>
                      <option>recovernserver.com </option>
                    </Select>
                  </div>
                </div>

                <div>
                  <div className="mb-2 hidden md:block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <div className="dark:bg-[#374151] border dark:border-0 flex items-center px-2 rounded-md justify-between">
                    <span className="dark:text-white">
                      <FaKey />
                    </span>
                    <input
                      className="bg-transparent dark:text-gray-400 border-0 w-11/12 outline-0 focus:outline-none rounded"
                      type={`${!eye ? "password" : "text"}`}
                      placeholder="Password"
                    />
                    <span className="dark:text-gray-200" onClick={handleEye}>
                      {!eye ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}{" "}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
              </form>
            </Modal.Body>
          </div>
          <Modal.Footer className="dark:bg-[#1f2937] py-2 md:py-5">
            <button
              className="w-6/12 bg-rose-600 p-2 rounded text-white"
              onClick={() => setOpenModal(false)}
            >
              Create Account
            </button>
            <Button
              className="w-6/12"
              color="gray"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Login account  */}
        <Modal
          className=""
          show={openModalLogin}
          onClose={() => setOpenModalLogin(false)}
        >
          <Modal.Header className="dark:bg-[#1f2937] p-1 md:p-4"></Modal.Header>
          <div className="dark:bg-[#1f2937]">
            <Modal.Body className=" w-full mx-auto">
              <form className="flex max-w-full flex-col gap-4">
                <div className="text-center md:w-14 w-10 mx-auto bg-rose-600 md:h-14 h-10 flex justify-center  rounded-full items-center">
                  <FaRegUser className=" text-white text-2xl text-center " />
                </div>

                <div className="w-8/12 mx-auto text-center">
                  <h2 className="font-bold dark:text-gray-300">
                    Log in to your account
                  </h2>
                  <p className="dark:text-gray-400 hidden md:block">
                    Here you can log in to your account
                  </p>
                </div>

                <div>
                  <div className="mb-2 block w-fu">
                    <Label htmlFor="email1" value="Email" />
                  </div>
                  <div className="flex">
                    {/* <TextInput
                      id="email1"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                      className="w-8/12 rounded-0"
                    /> */}
                    <TextInput
                      className="w-full rounded-0"
                      id="email4"
                      type="email"
                      icon={HiMail}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <div className="dark:bg-[#374151] border dark:border-0 flex items-center px-2 rounded-md justify-between">
                    <span className="dark:text-white">
                      <FaKey />
                    </span>
                    <input
                      className="bg-transparent dark:text-gray-400 border-0 w-11/12 outline-0 focus:outline-none rounded"
                      type={`${!eye ? "password" : "text"}`}
                      placeholder="Password"
                    />
                    <span className="dark:text-gray-200" onClick={handleEye}>
                      {!eye ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}{" "}
                    </span>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </div>
          <Modal.Footer className="dark:bg-[#1f2937] py-2 md:py-5">
            <Button
              className="w-6/12"
              color="gray"
              onClick={() => setOpenModalLogin(false)}
            >
              Cancel
            </Button>
            <button
              className="w-6/12 bg-rose-600 p-2 rounded text-white"
              onClick={() => setOpenModalLogin(false)}
            >
              Login
            </button>
          </Modal.Footer>
        </Modal>

        {/* Delete Account  */}
        <Modal
          show={openModalDelete}
          size="md"
          onClose={() => setOpenModalDelete(false)}
          popup
        >
          <Modal.Header className="dark:bg-[#1c2a3f] p-1 md:p-4" />
          <Modal.Body className="dark:bg-[#1c2a3f] rounded-b">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
              <h3 className="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to Delete this Account !
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-rose-600 px-5 py-2 rounded text-white"
                  color="failure"
                  onClick={() => setOpenModalDelete(false)}
                >
                  {"Yes, I'm sure"}
                </button>
                <button className="bg-gray-100 px-5 py-2 rounded text-black" color="gray" onClick={() => setOpenModalDelete(false)}>
                  No, cancel
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/*======================== right side user information ==========================*/}
      <div className="flex items-center sm:gap-4 gap-2">
        <Flowbite className="text-white border">
          <DarkThemeToggle></DarkThemeToggle>
        </Flowbite>

        <Dropdown
          className=""
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              className="z-10"
            />
          }
        >
         

          <Dropdown.Item
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-3 my-1"
          >
            <HiOutlineUserAdd className="text-xl" /> Create an account
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => setOpenModalLogin(true)}
            className="flex items-center gap-3 my-1"
          >
            <FaRegUser className="text-xl" /> Login
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setOpenModalDelete(true)}
            className="flex items-center gap-3 my-1"
          >
            <RiDeleteBin6Line className="text-xl" /> Delete Account
          </Dropdown.Item>

          <hr className="my-2" />

          <Dropdown.Item className="flex flex-col  hover:bg-transparent items-start">
            <span className="text-gray-400 text-left mb-2 font-bold">
              You are signed in as
            </span>
            <span>bot@gmail.com</span>
            <span>Password: <span  className={`blur-sm hover:blur-none`}>bot@gmail123</span></span>
          </Dropdown.Item>

          <Dropdown.Item className="flex items-center gap-3">
            <FaArrowRightFromBracket className="text-xl" /> Log Out
          </Dropdown.Item>
        </Dropdown>

        <FaArrowRightFromBracket className="text-xl text-gray-400 hover:text-gray-500 dark:hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}
