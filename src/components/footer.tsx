import Image from "next/image"
import skyline from "../assets/UBskyline.png"
import { handleIcon } from "../utils/iconHandler"
import logo from "../assets/logoWhite.png"

const contactInfo = {

    instagram: "@matchboxMongolia",
    gmail: "matchboxmongolia@gmail.com",
    facebook: "matchboxMongolia",
    messenger: "matchboxMongolia",
    phoneNums: [
        95531160,
        95531160,
        95531160,
    ]



}


const imageStyle = {
    width: "100vw",
    maxWidth: "1800px",
}

export const Footer = () => {

    return <div className="w-screen flex flex-col items-center  ">

        <Image src={skyline} style={imageStyle} alt="UB's skiline in the eyes of our artist" />
        <div className=" text-white bottom-0 h-[180px] w-full bg-[#110D0B] flex justify-center px-14 items-center">

            <div className="w-[330px] flex flex-col">
                <div className="flex flex-row mb-5">
                    {handleIcon({ icon: "instagram", className: "text-white" })}
                    <div className=" font-bold text-[16px] mx-4"> {contactInfo.instagram}</div>
                </div>
                <div className="flex flex-row">
                    {handleIcon({ icon: "gmail", className: "text-white" })}
                    <div className=" font-bold text-[16px] mx-4"> {contactInfo.gmail}</div>
                </div>

            </div>

            <div className="w-[330px] flex flex-col">
                <div className="flex flex-row mb-5">
                    {handleIcon({ icon: "facebook", className: "text-white" })}
                    <div className=" font-bold text-[16px] mx-4"> {contactInfo.facebook}</div>
                </div>
                <div className="flex flex-row">
                    {handleIcon({ icon: "messenger", className: "text-white" })}
                    <div className=" font-bold text-[16px] mx-4"> {contactInfo.messenger}</div>
                </div>

            </div>

            <div className="w-[330px] flex flex-col">
                <div className="flex flex-row">
                    {handleIcon({ icon: "phone", className: "text-white" })}
                    <div className=" font-bold text-[16px] mx-4 flex flex-col">
                        {contactInfo.phoneNums.map((el) => {
                            return <div>{el}</div>
                        })}
                    </div>
                </div>

            </div>


            <div>
                <Image

                    src={logo}
                    width={215}
                    alt=""
                />
            </div>


        </div>

    </div>

}
