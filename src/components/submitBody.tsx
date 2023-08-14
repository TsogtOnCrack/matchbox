import Image from "next/image"
import Link from "next/link"
import { Typography } from "@/typography"

import right1 from "../assets/galleryDecor/right1.png"
import left1 from "../assets/galleryDecor/left1.png"

import Back from "../assets/BackButton.png"


const list = [
    "Your full Name (first, last)",
    "Name of you art",
    "Type of art",
    "Art size (cm / pixels)"
]

const email = "matchboxmongolia@gmail.com"

export const SubmitBody = () => {

    const hmm = {

        width: "100%",
        height: "100%"
    }

    return <div className="w-screen max-w-[1800px] h-screen overflow-x-clip ">

        <div className="absolute w-[250px] mt-[13vh]">
            <Link href = "/gallery "><Image src = {Back} alt = "Sign that says back"></Image>
            </Link>
        </div>

        <div className="w-[120vw] max-w-[1800px] flex justify-between items-start -ml-[10vw]">

            <div className=" h-screen"><Image style={hmm} alt="Right side of curtain 2" src={right1}></Image></div>

            <div className="  mt-20 w-[50vw] flex flex-col ">

                <Typography className="my-[86px] flex w-full justify-center" type="BigRed">How to submit art</Typography>
                <Typography type="SubBlack">STEP1: Have your art ready in image format</Typography>
                <Typography className="my-[40px]" type="SubBlack">STEP2: Send us your art via email</Typography>

                <div className="w-full flex flex-row">

                    <div className=" flex flex-row justify-end pr-2">
                        <Typography type="MainMed">Email</Typography>
                        <Typography className="mx-1" type="MainMedRed">must</Typography>
                        <Typography type="MainMed">include:</Typography>
                    </div>
                    <div className="w-[50%] flex flex-col">


                        {list.map((el, ind) => {

                            return <Typography type="MainMed">{`${ind + 1}) ${el} `}</Typography>

                        })}

                    </div>

                </div>

                <div className="w-full flex flex-col text-center items-center my-[42px]">
                <Typography type="SubBlack">EMAIL:</Typography>
                <Typography type="SubBlack">{email}</Typography>
                </div>


            </div>

            <div className=" h-screen"><Image style={hmm} alt="Right side of curtain 2" src={left1}></Image></div>

        </div>

    </div>
}