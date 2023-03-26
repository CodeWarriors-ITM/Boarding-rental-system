import {FaShare, FaStar} from "react-icons/fa";
import {SiFacebook, SiTwitter, SiViber, SiWhatsapp} from "react-icons/si";

const PurchaseDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl select-none font-semibold">
                    LOWA Uncle's Villa
                </h1>

                <div className="flex items-center gap-1 cursor-pointer">
                    <FaShare/>
                    <p className={"select-none"}>Share</p>
                    
                <iframe
                    className={"object-fill h-32 w-32 p-4 border-0 "}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31686.3947274364!2d79.88873950456696!3d6.914578589013398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1673368456574!5m2!1sen!2slk"
                    width="5" height="5"  style={{border:0 }} allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

            <div className="pb-4 border-b-2 mt-5">
                <div className="flex items-center select-none">
                    <FaStar className={"text-yellow-300"}/>
                    
                </div>
                <p className={"mt-1"}>
                    LOWA Uncle's Villa is situated near university of moratuwa.we are providing boarding facilities for girls.
                    we have shared room and single rooms according to your need you can contact us.
                </p>
            </div>

            <div className={"mt-5"}>
                <h1 className="text-3xl font-semibold select-none">
                    Rs. 8750.00 per month
                </h1>
            </div>

            <div className="flex items-center gap-4 my-5 text-2xl cursor-pointer">
                <SiWhatsapp className={"text-green-400"}/>
                <SiFacebook className={"text-blue-600"}/>
                <SiViber className={"text-purple-600"}/>
                <SiTwitter className={"text-blue-500"}/>
            </div>

            <button className="d-btn">Request</button>
        </div>
    )
}

export default PurchaseDetails;