import pic from "../assets/galleryDecor/GalHead.png"
import logo from "../assets/matchboxLogo.png"
import Image from "next/image"
import Link from "next/link"

export const GalleryHeader = () => {
    const ImageStyle = {
        width: "100vw"
    }

    const LogoStyle = {
        width: "16vw",
        maxWidth: "288px",
        marginBottom: "40px",
    }


    return <div className="flex w-screen justify-center items-center flex-col fixed z-40 max-w-[1800px]">

        <Image
            alt="header pic"
            src={pic}
            style={ImageStyle}
        />

        <div className="absolute" >
            <Link href="/">
                <Image

                    alt="org logo"
                    src={logo}
                    style={LogoStyle}

                />
            </Link>
        </div>

    </div>
}