import Image from "next/image"
import pendulum from "../assets/pendulum.png"
import { Typography } from "@/typography"

export const Top = () => {

    return <div className=" w-full flex flex-row justify-center h-screen max-w-screen">

        <div className="max-w-[1025px] w-[90vw] flex justify-between items-center">
            <Image src={pendulum} alt="pendulum" width={800} />

            <Typography className="absolute z-20 w-[650px] ml-[20vw]" type="UltraBigRed">do you know your rights?</Typography>

        </div>




    </div>

}