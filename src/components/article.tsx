import { Item } from "./item"
import { Typography } from "@/typography"

export const Article = ({ List, Title }: any) => {

    return <div className="w-full max-w-screen flex flex-col items-center mt-60">

        <Typography type = "BigRed" className = "w-[800px] text-center">{Title}</Typography>



        <div >
            {
                List.map((el:any) => {

                    return <Item ItemNumber={el.num} ItemContent={el.content} />

                })
            }
        </div>
    </div>
}