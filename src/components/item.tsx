import { Typography } from "@/typography"
export const Item = ({ItemNumber, ItemContent}: any) =>{

    return <div className="flex flex-row max-w-[1025px] w-90vw  my-20">

        <Typography type = "MidRed" className = " items-start flex w-[90px] justify-end">{ItemNumber}</Typography>
        <Typography type = "MainMed" className = "ml-8 max-w-[850px] flex-wrap ">{ItemContent}</Typography>


    </div>
}