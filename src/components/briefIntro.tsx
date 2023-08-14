import { motion } from "framer-motion"

import { Typography } from "@/typography"

const animation = {

    hidden: { y :"200px", opacity :"0"},
    visible: { y :"0", opacity :"1"}
}

const data = {
    header: "CHILDREN’S RIGHTS IN MONGOLIA ",
    body: "Children knowing their rights and freedoms ensures their safety and development. Our mission is to make sure that every Mongolian  child knows their rights.The following is from the Mongolian Children’s rights law. enforced from September 1st, 2016."
}


export const BriefIntro = () => {

    return <motion.div variants={ animation} initial = "hidden" whileInView="visible" transition = {{duration: "0.5"}} className="w-full max-w-screen flex flex-row justify-center items-center my-24">

        <div className="flex flex-col w-[50vw]">

            <Typography type="BigRed">{data.header}</Typography>
            <Typography type="MainMed"> {data.body}</Typography>

        </div>
    </motion.div>
}