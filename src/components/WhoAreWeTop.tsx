import Background from "../assets/HomePageBackground.png"
import Image from "next/image"
import { Typography } from "../typography/index"

import { motion } from "framer-motion"

const BackgroundImageStyle = {

    width: "100vw",
    opacity: "65%"
}

const data = {

    Header: "Who are we?",
    Body: "We are a non-profit youth initiative that strives to protect and cultivate children's rights equally. We believe that our projects and activities are the right steps toward equitable development. We aim to integrate the capability and abilities of the youth towards issues their peers and children are faced with by creating a space for youth to volunteer and help each other. ",
}




const container = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }



export const WhoAreWeTop = () => {

    return <motion.div variants={container}
        className="flex justify-center items-center max-h-screen overflow-hidden">



        <div className="">
            <Image src={Background} style={BackgroundImageStyle} alt="Background image that is full of mathbox faces" ></Image>
        </div>

        <motion.div initial={{ y: "300px", opacity: "0" }}
            animate={{ y: "0px", opacity: "1" }}
            transition={{ duration: .5 }}
            className="z-20 absolute w-[55vw] min-h-[40px] bg-white/60 p-4">


            <Typography className="mb-3 " type="BigRed"> {data.Header}</Typography>
            <Typography className="mb-3" type="MainMed">{data.Body} </Typography>


        </motion.div>


    </motion.div>
}