export const Typography = ({ type, children, className }: any) => {


    console.log(type)


    const getStyle = (t: String) => {

        switch (t) {

            case "BigRed":
                return "text-[#C6432F] font-montserratExtraBold text-[50px] uppercase"
            case "MidRed":
                return "text-[#C6432F] font-montserratExtraBold text-[30px] uppercase"
    
            case "UltraBigRed":
                return "text-[#C6432F] font-montserratExtraBold text-[90px] uppercase"

            case "MainMed":
                return "font-robotoMedium text-[24px]"
            case "MainReg":
                return "font-robotoRegular text-[24px]"
            case "SubBlack":
                return "font-montserratBold text-[30px]"
            case "TitleBlack":
                return "font-montserratBold text-[24px]"

            case "":
                return "text-blue-400 "


        }

    }


    return <p className={`  ${getStyle(type)}  ${className} `}> {children}</p>

}