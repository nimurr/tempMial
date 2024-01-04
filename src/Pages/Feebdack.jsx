 
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleUp, FaKey, FaMinus, FaPlus, FaRegEyeSlash, FaRegUser, FaShare } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { Link } from "react-router-dom";


export default function Feedback() {
  const [plus, setPlus] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };


  const handlePlusMinus =() =>{
    setPlus(!plus)
  }

  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="sm:px-3 md:px-10 py-6 space-y-2">
      {/* Login account  */}
      {/* <Modal
          className=""
          show={openModalLogin}
          onClose={() => setOpenModalLogin(false)}
        >
          <Modal.Header className="dark:bg-[#1f2937]"></Modal.Header>
          <div className="dark:bg-[#1f2937]">
            <Modal.Body className=" w-full mx-auto">
              <form className="flex max-w-full flex-col gap-4">
                <div className="text-center w-14 mx-auto bg-rose-600 h-14 flex justify-center rounded-full items-center">
                  <FaRegUser className=" text-white text-2xl text-center " />
                </div>

                <div className="w-8/12 mx-auto text-center">
                  <h2 className="font-bold dark:text-gray-300">
                    Log in to your account
                  </h2>
                  <p className="dark:text-gray-400">
                    Here you can log in to your account
                  </p>
                </div>

                <div>
                  <div className="mb-2 block w-fu">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <div className="flex">
                 
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
                    <Label htmlFor="password1" value="Your password" />
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
          <Modal.Footer className="dark:bg-[#1f2937]">
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
        </Modal> */}
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
          <Modal.Footer className="dark:bg-[#1f2937] h-auto py-2 md:py-5">
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
      
        {/* <Link to={'/'} className="flex items-center text-blue-600 font-semibold"> <FaAngleLeft />Back</Link> */}
        <button onClick={goBack} className="flex items-center text-blue-600 font-semibold"> <FaAngleLeft />Back</button>
      <h2 className="text-2xl font-bold py-2 text-gray-800 dark:text-white" >Feedback</h2>
      <div className="bg-white dark:bg-[#1f2937] dark:border-gray-700 w-full border-2 border-gray-200 rounded-xl text-lg py-10 px-5 text-gray-500 dark:text-white space-y-5">
        <p>10 minute mail offers a unique email experience with optimized servers for swift message delivery.</p>

        <p>We are grateful for your use of our anonymous email service. In line with our dedication to ongoing improvement, we strongly encourage you to share your thoughts and provide us with suggestions for enhancing 10 minute mail.
          <br />
          <span className="block text-end font-bold "><button onClick={()=> setOpenModalLogin(true)} className=" text-blue-500 underline">Login</button></span>
        </p>
        <textarea name="commentbox" placeholder="Add Comment ..." id="" className="w-full rounded dark:bg-[#1f2937] border border-gray-300 dark:border-gray-700" rows="5"></textarea>
        <p className="flex justify-end">
          <Button onClick={()=> setOpenModalLogin(true)} color="blue">Add Comment</Button>
        </p>
        <p className="text-end text-sm space-x-2">
          <span>Upvotes</span>
          <span>Newest</span>
          <span>Oldest</span>
        </p>

        <div className="flex justify-between rounded-xl border-t-[3px] dark:border-t-gray-700 border-l-[2px] border-l-blue-800 py-3 px-3">
          <div>
            <div className="flex gap-3 items-center">
              <figure>
                <img src="https://i.ibb.co/TLNKqt4/images.jpg" className="w-16 h-16 rounded-full  object-cover" alt="user" />
              </figure>
              <div>
                <h3>Александр</h3>
                <span className="text-[12px]">0 points.  13months ago</span>
              </div>
            </div>
            <p className="text-[15px] mt-2">This site is vary helpfully .</p>
          </div>
          <div className="flex gap-4 items-center">
            <span><FaShare /></span>
            <span><FaAngleDown /></span>
            <span><FaAngleUp /></span>
            <span>{plus ? <FaMinus onClick={handlePlusMinus} /> : <FaPlus onClick={handlePlusMinus} />}</span>
          </div>
        </div>

      </div>
    </div>
  )
}