import Background from "../assets/HomePageBackground.png"
import Image from "next/image"
import { Typography } from "../typography/index"

const BackgroundImageStyle = {

    width: "100vw",
    opacity: "65%"
}

const data = {

    Header: "Who are we?",
    Body: "We are a non-profit youth initiative that strives to protect and cultivate children's rights equally. We believe that our projects and activities are the right steps toward equitable development. We aim to integrate the capability and abilities of the youth towards issues their peers and children are faced with by creating a space for youth to volunteer and help each other. ",
}

export const WhoAreWeTop = () =>{

    return <div className="flex justify-center items-center max-h-screen overflow-hidden">

        <div className="">
            <Image src={Background} style={BackgroundImageStyle} alt="Background image that is full of mathbox faces" ></Image>
        </div>

        <div className="z-20 absolute w-[55vw] min-h-[40px] bg-white/60 p-4">


            <Typography className = "mb-3 " type = "BigRed"> {data.Header}</Typography>
            <Typography className = "mb-3" type = "MainMed">{data.Body} </Typography>


        </div>


    </div>
}