import { Item } from "./item"
import { Typography } from "@/typography"

import { motion } from "framer-motion"


const container = {
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

const Iteme = {

    hidden: {x: "200px" , opacity : "0"},
    visible: {x: "0" , opacity : "1"}
}

export const Article = ({ List, Title }: any) => {

    return <div className="w-full max-w-screen flex flex-col items-center mt-60">

        <Typography type="BigRed" className="w-[800px] text-center">{Title}</Typography>



        <motion.div variants={container}
            initial="hidden"
            whileInView="visible" >
            {
                List.map((el: any) => {

                    return <motion.div variants={Iteme} initial = "hidden" whileInView={"visible"}> <Item ItemNumber={el.num} ItemContent={el.content} /></motion.div>

                })
            }
        </motion.div>
    </div>
}