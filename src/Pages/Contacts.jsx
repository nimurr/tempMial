import { FaAngleLeft } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";

import { Link } from "react-router-dom";

const Contact = () => {
    
    const goBack = () =>{
        window.history.back()
    }
    return (
        <div className="sm:px-3 md:px-10  py-6 space-y-2">
        <button onClick={goBack} className="flex items-center text-blue-600 font-semibold"> <FaAngleLeft />Back</button>
            <h2 className="text-2xl font-bold dark:text-white py-2 text-gray-800" >Contact</h2>
            <div className="bg-white dark:text-white dark:bg-[#1f2937] w-full border-2 border-gray-200 dark:border-gray-700  rounded-xl text-lg py-10 px-5 text-gray-500 space-y-5">
                <p>If the answers to common questions and a detailed description about the 10 minute mail service does not assist you let us know.</p>

                <p>However, we are confident that such issues will not arise. Our interface online service is totally user-friendly and clearly understood.</p>

                <p>Anyone can use temporary email, even if {`you’ve`} never used disposable email in the past.</p>
                <ul className="list-disc pl-5">
                    <li>{`It's`} free and instant;</li>
                    <li>A completely anonymous email address that is like a ghost;</li>
                    <li>It is possible to delete account;</li>
                </ul>
                <p>Do you have any questions about the service? You can contact us via email or discord.{` We’re `}happy to help, and {`we’re`} always open to suggestions.</p>

                <Link className="flex items-center gap-2 text-purple-600" to={''}>
                    <MdEmail className="text-2xl" />
                    <span className="text-xl">support@botgamil.com</span>
                </Link>

                <Link className="flex items-center gap-2 text-purple-600" to={''}>
                    <LuMessagesSquare className="text-2xl " />
                    <span className="text-xl">Discord Telegram</span>
                </Link>


            </div>
        </div>
    );
};

export default Contact;