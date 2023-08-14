import { WIDTH } from "../style/it"
import Image from "next/image"
import logo from "../assets/matchboxLogo.png"
import { LangSwitch } from "./langswitch"
import Link from "next/link"

const navList = [

    {name: "Gallery", link: "/gallery"},
    {name: "Know your rights", link: "/knowYourRights"},
    {name: "Projects", link: "/projects"},
]


export const Header = ({buffer = false}: any) => {

    return <div>
        
        <div className={` fixed z-50 w-screen h-[90px] bg-white/75 drop-shadow-lg flex justify-center items-center px-[10px]`}>



            <div className={`  flex flex-row w-full justify-between items-center  max-w-[1025px] `}>

                <Link href = "/">
                <Image

                    src={logo}
                    width={215}
                    alt=""
                />
                </Link>


                <div className="flex ">
                    <div className="flex h-full items-center mx-8">
                        {navList.map((el) => {

                            return <Link href = {el.link}><div className="flex text-[25px] mx-6 font-montserratBold">{el.name}</div></Link>
                        })}
                    </div>

                    <LangSwitch />

                </div>

            </div>


        </div>
     <div className={ buffer ? "h-[125px]" : ""}></div> {/* spacer for header */}
    </div>


}