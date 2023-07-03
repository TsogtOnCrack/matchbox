import { Typography } from "@/typography/index"
import Image from "next/image"

import misheel from "../assets/misheel.png"
import tsogt from "../assets/tsogt.png"
import nara from "../assets/nara.png"
import zolboo from "../assets/zolboo.png"

const team = [

    { title: "co-founder", image: misheel },
    { title: "co-founder", image: tsogt },
    { title: "co-founder", image: zolboo },
    { title: "co-founder", image: nara },
]

export const MeetTheTeam = () => {

    return <div className="flex flex-col items-center">

        <Typography className="my-10 w-[1025px]" type="BigRed">meet the the team</Typography>

        <div className="flex flex-row items-center max-w-screen justify-center h-[500px] ">
            <div className="flex flex-row items-end max-w-[1025px] w-[85vw] justify-between">
                {
                    team.map((el) => {

                        return <div className="flex flex-col items-center ">

                            <Image src={el.image} width={180} alt="image of person" />

                            <Typography type="TitleBlack" > {el.title}</Typography>
                        </div>
                    })

                }
            </div>
            <div className="h-[500px] w-[80vw] absolute right-0 bg-[#3163AC]/5"></div>

        </div>



    </div>
}