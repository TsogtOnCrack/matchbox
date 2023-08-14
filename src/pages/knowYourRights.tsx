import { MainLayout } from "@/layout/mainLayout"
import { Top } from "@/components/KnowYourRightsTop"
import { BriefIntro } from "@/components/briefIntro"
import { Article } from "@/components/article"

const Article4 = {
    Title : "Article 4. The Fundamental Principles of Children’s Rights",
    Items : [

        {num: "4.1", content: "The following principles should be followed in the protection of children’s rights;"},
        {num: "4.1.1", content: "Not to discriminate against children;"},
        {num: "4.1.2", content: "The state, citizen, and legal entities shall prioritize ensuring the fundamental rights of children in activities, and equally ensure children’s right to survival, development, protection, and participation in social life;"},
        {num: "4.1.3", content: "Taking into account the child’s age and maturity and respecting their opinion;"},
        {num: "4.1.4", content: "To rely on traditional customs and moral values to ensure children’s rights;"},
        {num: "4.1.5", content: "To provide children with news and information suitable for their age, physical, and mental characteristics."},
    
    ]
}

const Article6 = {
    Title : "Article. 6 Children’s right to development",
    Items : [

        {num: "6.1", content: "The progress of a child’s physical, mental, intellectual, mental, behavioral, and social development shall be considered child development, and has the following rights:"},
        {num: "6.1.1", content: "Children having free access to primary, middle, and secondary education;"},
        {num: "6.1.2", content: "Children inheriting native language, writing, customs, historical, and cultural traditions;"},
        {num: "6.1.3", content: "Children receiving support from the state for the development of their intelligence, talents, physical abilities, and skills;"},
        {num: "6.1.4", content: "Children choosing their religious stands;"},
        {num: "6.1.5", content: "Children thinking freely, and expressing their opinions freely, or through others, seeking and receiving information;"},
        {num: "6.1.6", content: "Self development of children in family/social environment;"},
        {num: "6.2", content: "Children enjoying their right to development in the form of playing in their free time, spending time at children's camps and sanatoriums, participating in competitions, development programs, extracurricular activities, and learning/developing according to their wishes."},
        
    
    ]
}


export const KnowYourRights = () => {

    return <MainLayout >
        
    <Top/>

    <BriefIntro/>

    <Article Title = {Article4.Title} List = {Article4.Items}></Article>
    <Article Title = {Article6.Title} List = {Article6.Items}></Article>

    </MainLayout>
}

export default KnowYourRights