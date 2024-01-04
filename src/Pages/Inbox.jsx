import { LuShieldCheck } from "react-icons/lu";
import { CiClock1, CiUser } from "react-icons/ci";
import { MdRefresh } from "react-icons/md";


const Index = () => {
  return (
    <div className="flex min-h-[70vh] justify-end items-center flex-col">
      <div className="flex xl:flex-row flex-col  justify-between gap-2">

        <div className="order-2  xl:order-1 hidden xl:block">
          <img className="w-full h-full" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1704289119/Screenshot_1_q9soxj.png" alt="" />
        </div>

        <div className="xl:w-8/12 order-1 mb-10 xl:mb-0">

          <div className="sm:w-10/12 mx-auto text-center bg-gray-200 text-gray-800 dark:bg-[#1f2937] px-4 py-10 rounded-md mb-10">
              <MdRefresh className="animate-spin dark:text-white text-gray-800 text-4xl w-10 mx-auto" />
              <h2 className="dark:text-white font-semibold">No messages</h2>
              <p className="text-[14px] dark:text-gray-400">Waiting for incoming messages</p>
          </div>

          <div>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1035 832"
              className="w-56 h-56 mx-auto"
            >
              <path
                opacity=".1"
                d="M601 95c-66-2-129-20-189-39S291 15 227 4c-42-6-90-7-123 11S61 64 55 93c-4 21-6 44 5 64 8 14 23 26 33 39 34 47 10 105-28 150-17 22-37 42-51 65s-19 49-8 72c12 23 40 40 70 53 61 24 133 31 203 35 156 9 313 5 469 1 57-1 115-2 172-10 32-4 64-10 87-26 29-20 36-54 17-80-33-42-123-52-146-98-13-25 0-52 19-76 39-49 105-93 108-149 2-39-29-78-78-97-51-19-122-17-160 15-39 33-107 46-166 44ZM514.5 831.6c160.604 0 290.8-13.118 290.8-29.3 0-16.182-130.196-29.3-290.8-29.3s-290.8 13.118-290.8 29.3c0 16.182 130.196 29.3 290.8 29.3Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                d="M249 799s-13-73-61-109c-20-15-35-36-42-60l-5-34"
                stroke="#535461"
                strokeWidth="2"
                strokeMiterlimit="10"
              ></path>{" "}
              <path
                d="M111 573c4 8 30 24 30 24s4-30 0-37c-4-8-14-12-23-8s-11 14-7 21Zm-3 55c8 5 39 4 39 4s-14-26-22-31-18-2-22 5-3 18 5 22Zm39 74c10 0 37-16 37-16s-27-16-36-16-17 7-17 16 7 16 16 16Zm43 49c9 2 39-9 39-9s-23-20-33-22-17 4-19 13 4 17 13 18Zm-10-132c-3 8-28 27-28 27s-7-29-3-38 12-12 21-9 13 12 10 20Zm49 59c-5 7-35 17-35 17s3-30 9-36c6-7 16-9 23-3 7 4 9 14 4 21l-1 1Zm40 63c-4 7-31 23-31 23s-3-30 2-38 14-11 22-7 12 14 7 22Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                opacity=".25"
                d="M111 573c4 8 30 24 30 24s4-30 0-37c-4-8-14-12-23-8s-11 14-7 21Zm-3 55c8 5 39 4 39 4s-14-26-22-31-18-2-22 5-3 18 5 22Zm39 74c10 0 37-16 37-16s-27-16-36-16-17 7-17 16 7 16 16 16Zm43 49c9 2 39-9 39-9s-23-20-33-22-17 4-19 13 4 17 13 18Zm-10-132c-3 8-28 27-28 27s-7-29-3-38 12-12 21-9 13 12 10 20Zm49 59c-5 7-35 17-35 17s3-30 9-36c6-7 16-9 23-3 7 4 9 14 4 21l-1 1Zm40 63c-4 7-31 23-31 23s-3-30 2-38 14-11 22-7 12 14 7 22Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                d="M247 797s20-72-9-123c-11-22-16-46-12-70 2-12 5-23 10-34"
                stroke="#F33A6A"
                strokeWidth="2"
                strokeMiterlimit="10"
              ></path>{" "}
              <path
                d="M218 538c0 9 18 33 18 33s16-25 15-34-8-16-17-15-16 7-16 16Zm-26 49c5 7 34 19 34 19s-1-30-7-37c-5-7-15-9-23-4a15.005 15.005 0 0 0-6.919 10.106A14.99 14.99 0 0 0 192 587Zm4 83c9 3 40-1 40-1s-17-25-26-28-18 0-22 7 0 18 8 22Zm18 61c8 5 39 7 39 7s-12-28-20-33-18-3-23 4-4 17 3 22h1Zm47-124c-6 6-37 13-37 13s7-29 13-35c7-7 17-7 24-1 6 6 7 15 1 22l-1 1Zm21 72c-9 4-40 2-40 2s15-26 23-30 19-1 23 6c5 8 2 18-6 22Zm9 73c-7 5-39 9-39 9s11-29 18-34 18-4 24 3a15 15 0 0 1-3 22Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                d="M768.3 336.5a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                d="M579 214 317 384l171 308c1 3 4 5 7 6l155 37c5 2 11-1 13-6l77-160 84-112-199-236a35 35 0 0 0-46-7Z"
                fill="#fff"
              ></path>{" "}
              <path
                opacity=".1"
                d="m827 459-1 1-49 65-1 2-33 44-66 136-2 4-9 19c-2 5-8 8-13 7l-155-38c-3-1-6-3-8-6l-15-27-2-4-107-194-1-2-45-81 5-3 41-27h1l87-56 5-4 122-79c15-10 35-7 46 7l91 107 4 5 67 78v1l33 39 4 5 1 1Z"
                fill="#1f2937"
              ></path>{" "}
              <path
                opacity=".1"
                d="m786 412-8 56-2 17-2 36v3l-7 188a11.999 11.999 0 0 1-14 11l-78-17h-1l-200-45-4-1-110-24 3-169v-6l1-51v-57l87-56 6-3c80 8 187 24 259 35l4 5 66 78Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                d="m795 346-9 66-9 60-2 17-2 36-7 191a11.999 11.999 0 0 1-14 11l-79-17-200-45-114-25 3-175 1-51 1-60v-62c19-1 50 1 87 5a5591.76 5591.76 0 0 1 344 49Z"
                fill="#F33A6A"
              ></path>{" "}
              <path
                opacity=".1"
                d="m820 452-43 20-215 106-199-164-41-33-5 3 45 81-3 175 114 25 15 27c1 3 4 5 7 6l155 37c5 2 11-1 13-6l10-19 78 17c7 2 13-2 15-9v-2l7-191 50-67v-1l-3-5Z"
                fill="#1f2937"
              ></path>{" "}
              <path
                d="m317 384-18 305c0 6 4 11 9 13l474 105a11.994 11.994 0 0 0 9.442-2.391A11.997 11.997 0 0 0 796 796l28-339-262 129-245-202Z"
                fill="#dcdfed"
              ></path>{" "}
              <path
                opacity=".1"
                d="m303 696 246-151c7-5 17-3 23 3l220 257c1 1 1 0 0 0L303 696c-2 1-2 0 0 0Z"
                fill="#000"
              ></path>{" "}
              <path
                d="m304 696 244-147c8-5 18-3 24 4l218 251v3l-2 1-483-107-2-3 1-2Z"
                fill="#dcdfed"
              ></path>
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold py-2 dark:text-white">
              Temp Mail
            </h2>
            <p className="text-lg md:w-3/4 mx-auto text-gray-700 dark:text-gray-400">
              Protect your personal email address from spam, bots, phishing and
              other online abuse. Temporary email address - no commitments and
              no risks. No strings attached, just security guaranteed.
            </p>
          </div>
        </div>

        <div className="order-3">
          <img className="w-full h-full" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1704289119/Screenshot_1_q9soxj.png" alt="" />
        </div>

      </div>

      <div className="my-10 md:w-8/12 mx-auto">
        <img className="h-36 w-full" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1704295585/Screenshot_4_zswumm.png" alt="" />
      </div>

      <div className="grid md:grid-cols-3 mt-5 gap-10 dark:text-gray-300">
        <div className="dark:bg-[#1f2937] bg-gray-200 p-4 rounded">
          <h2 className="flex items-center gap-1 text-xl py-2 text-rose-500 font-bold">
            {" "}
            <LuShieldCheck className="text-3xl mr-2 mb-2" /> <span>Secure</span>
          </h2>
          <p>
            Your email address is protected by a reliable password, generated
            randomly in your browser, providing a barrier against unauthorized
            access and potential breaches.
          </p>
        </div>
        <div className="dark:bg-[#1f2937] bg-gray-200 p-4 rounded">
          <h2 className="flex items-center gap-1 text-xl py-2 text-rose-500 font-bold">
            {" "}
            <CiUser className="text-3xl mr-2 mb-2" /> <span>Instant</span>
          </h2>
          <p>
            Your email address is protected by a reliable password, generated
            randomly in your browser, providing a barrier against unauthorized
            access and potential breaches.
          </p>
        </div>
        <div className="dark:bg-[#1f2937] bg-gray-200 p-4 rounded">
          <h2 className="flex items-center gap-1 text-xl py-2 text-rose-500 font-bold">
            {" "}
            <CiClock1 className="text-3xl mr-2 mb-2" /> <span>Fast</span>
          </h2>
          <p>
            Your email address is protected by a reliable password, generated
            randomly in your browser, providing a barrier against unauthorized
            access and potential breaches.
          </p>
        </div>
      </div>





    </div>
  );
};

export default Index;
