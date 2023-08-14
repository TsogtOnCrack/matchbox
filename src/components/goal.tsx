import { Typography } from "@/typography"
import match from "../assets/match.png"
import litMatch from "../assets/litMatch.png"
import Image from "next/image"

import { motion } from "framer-motion"

const textl = {

    hidden:{
        x :"300px",
        opacity: "0"
    },
    visible: {

        x: 0,
        opacity : "1"
    }
}

const textr = {
    hidden:{
        x :"-300px",
        opacity : "0"
    },
    visible: {

        x: 0,
        opacity : "1"
    }
}

export const Goal = ({ Header, Body, left = false }: any) => {

    return <div  className={`flex flex-col px-20 h-[500px] justify-center w-[95vw] max-w-screen ${left ? " items-end" :" items-start"}  `}>




        <motion.div variants={left ? textr : textl} initial="hidden" whileInView="visible" transition={{durration: "0.6"}} className={` w-[55vw] z-20 relative`}>
            <div className="flex flex-row items-center">
                <Image src={left ? litMatch : match} width={61} alt="doodled match" />
                <Typography type="SubBlack" >{Header}</Typography>
            </div>


            <Typography className="ml-5" type="MainReg">{Body}</Typography>
        </motion.div>

        <div className={`${left ? "" : "absolute h-[500px] w-[85vw] left-0 bg-[#3163AC]/5 "} `}></div>


    </div>
}