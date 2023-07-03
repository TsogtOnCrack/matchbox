import { WIDTH } from "../style/it"
import Image from "next/image"
import logo from "../assets/matchboxLogo.png"
import { LangSwitch } from "./langswitch"


const navList = [
    "Gallery",
    "Know your rights",
    "Projects",
]


export const Header = ({buffer = false}: any) => {

    return <div>
        
        <div className={` fixed z-30 w-screen h-[125px] bg-white/75 drop-shadow-lg flex justify-center items-center px-[10px]`}>



            <div className={`  flex flex-row w-full justify-between items-center  max-w-[1025px] `}>

                <Image

                    src={logo}
                    width={215}
                    alt=""
                />


                <div className="flex ">
                    <div className="flex h-full items-center mx-8">
                        {navList.map((el) => {

                            return <div className="flex text-[25px] mx-6 font-montserratBold">{el}</div>
                        })}
                    </div>

                    <LangSwitch />

                </div>

            </div>


        </div>
     <div className={ buffer ? "h-[125px]" : ""}></div> {/* spacer for header */}
    </div>


}