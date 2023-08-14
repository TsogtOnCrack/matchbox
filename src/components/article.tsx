import { Item } from "./item"
import { Typography } from "@/typography"

import { motion } from "framer-motion"

import Image from "next/image"
import pencil from "../assets/decor/pencils.png"
import girl2 from "../assets/decor/girl2.png"


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
        
        <div className= {`${Title == "Article 4. The Fundamental Principles of Children’s Rights" ? "absolute w-screen -z-50 -mt-[100px]" :"hidden" }`}> <Image src= {pencil} alt = "crayons"></Image></div>
        <div className= {`${Title == "Article. 6 Children’s right to development" ? "absolute left-5 -z-50 -mt-[200px] " :"hidden" }`}> <Image src= {girl2} alt = "girl drawn with crayons"></Image></div>

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