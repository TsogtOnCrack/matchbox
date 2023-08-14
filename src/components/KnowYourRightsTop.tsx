import Image from "next/image"
import pendulum from "../assets/pendulum.png"
import { Typography } from "@/typography"

import { motion } from "framer-motion"

const animation1 = {

    hidden: {
        x: "100px"
    }, visible: {

        x: 0

    }
}
const animation2 = {

    hidden: {
        x: "-100px"
    }, visible: {

        x: 0

    }
}

export const Top = () => {

    return <div className=" w-full flex flex-row justify-center h-screen max-w-screen">

        <motion.div initial = {{x: "200"}} animate = {{x: 0}} transition = {{duration: "0.5"}} className="max-w-[1025px] w-[90vw] flex justify-between items-center">
            <Image src={pendulum} alt="pendulum" width={800} />
            <Typography className="absolute z-20 w-[650px] ml-[20vw]" type="UltraBigRed">do you know your rights?</Typography>

        </motion.div>




    </div>

}