import { Typography } from "@/typography/index"
import { Goal } from "./goal"


const data = {
    goals:[

        {Header: "Make sure children know their rights.", Body: " We assure that children have full-depth understanding about their rights and stand up for themselves when their rights are violated or when they face mistreatment behind closed doors. We believe that talking openly about their rights encourages children to know their own personal safe boundaries and take actions whenever they are crossed."},
        {Header: "Assure every child gets quality education.", Body: "We want to equalise educational and informational access for students. We believe that all children have the right to education and information to achieve their dreams."},
        {Header: "Take opportunities to provide a safe place for children.", Body: "We create a platform and foundation where youth can have full liberty and freedom to express their creative minds and convey their emotions to the world. Our initiative creates a safe-space where children can share and bond through art, poetry, writings, and beyond."},
        {Header: "Create an inclusive environment and provide accessible help. ", Body: "We focus not only on children’s physical well being but also their mental health. We believe that it is important for children to have a positive & safe environment for them to grow and flourish. We are assessing children's mental health for them to understand that they can go above and beyond in this harsh society. "},
        {Header: "Help reach educational ambitions .", Body: "We hope to have a community impact through providing opportunities for children who have the mindset and ambitions but lack the support to pursue  higher education."},
        
    ]
}


export const OurGoal = () => {

    return <div className="flex flex-col items-center mt-24 ">
        <Typography className = " w-[1025px] my-10" type = "BigRed"> our goal</Typography>
    {/* <Typography type = "SubBlack"> Make sure children know their rights.</Typography> */}
    {
        data.goals.map((el, i)=>{
            return <Goal Header = {el.Header} Body = {el.Body} left = {i % 2 == 0 ? false : true}/>
        })
    }
    </div>

}