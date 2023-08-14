import Image from "next/image"
import Link from "next/link"

import right1 from "../assets/galleryDecor/right1.png"
import right2 from "../assets/galleryDecor/right2.png"
import left1 from "../assets/galleryDecor/left1.png"
import left2 from "../assets/galleryDecor/left2.png"
import banner from "../assets/galleryDecor/CommingSoonBanner.png"

import back from "../assets/galleryDecor/galleryButtons/HomeButton.png"
import submit from "../assets/galleryDecor/galleryButtons/SubmitYours.png"

export const GalleryBody = () => {

    const hmm = {

        width: "100%",
        height: "100%"
    }

    return <div className="flex h-screen justify-center max-w-[1800px] overflow-clip">

        <div className=" w-[60vw] flex justify-between">
            <div className=" h-screen"><Image style={hmm} alt="Right side of curtain 1" src={right1}></Image> </div>
            <div className=" h-screen"><Image style={hmm} alt="left side of curtain 1" src={left1}></Image></div>
        </div>

        <div className="w-[99vw] h-screen z-20 absolute flex justify-between items-center max-w-[1800px]">
            <div className=" h-screen"><Image style={hmm} alt="Right side of curtain 2" src={right2}></Image></div>
            <Image style={{ width: "30vw", height: "15vw", maxWidth: "700px", maxHeight: "350px" }} src={banner} alt="A hand drawn banner saying comming soon"></Image>
            <div className="h-screen"><Image style={hmm} alt="left side of curtain 2" src={left2}></Image></div>
        </div>

        <div className=" h-screen w-[75vw] flex justify-between absolute z-30 items-center">
            <div className=" w-[230px] h-[260px] mb-6"> <Link href="/"><Image style={hmm} alt="Right side of curtain 2" src={back}></Image></Link></div>
            <div className=" w-[220px] h-[260px] mt-28"><Link href = "/submit"><Image style={hmm} alt="Right side of curtain 2" src={submit}></Image></Link></div>
        </div>

    </div>
}

