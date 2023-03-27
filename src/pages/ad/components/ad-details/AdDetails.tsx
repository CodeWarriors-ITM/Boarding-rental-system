import {FaShare, FaStar} from "react-icons/fa";
import {SiFacebook, SiTwitter, SiViber, SiWhatsapp} from "react-icons/si";
import { useNavigate } from "react-router-dom";

const AdDetails = () => {
    const navigate = useNavigate()
    //Property Title and description
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl select-none font-semibold">
                    LOWA Uncle's Villa
                </h1>

                <div className="flex items-center gap-1 cursor-pointer">
                    <FaShare/>
                    <p className={"select-none"}>Share</p>
                </div>
            </div>

            <div className="pb-4 border-b-2 mt-5">
                <div className="flex items-center select-none">
                    <FaStar className={"text-yellow-300"}/>
                    <p>4.5</p>
                </div>
                <p className={"mt-1"}>
                Badulla City Limit (1km) on Mahiyangana Road, Kailagoda Junction. <br />
                Very close to Cargills Express and Fuel Station <br></br>
                Upstair Annex for rent<br></br>
                2 Bedroom, large pantry, modern bathroom<br></br>
                separate entrance<br></br>
                1 car parking slot<br></br>
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
            
            <button className="d-btn" onClick={() => navigate("/PurchasePage")}>PURCHASE</button>
        </div>
    )
}

export default AdDetails;