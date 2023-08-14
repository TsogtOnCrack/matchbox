import { MainLayout } from "../layout/mainLayout"

import { WhoAreWeTop } from "@/components/WhoAreWeTop"
import { OurGoal } from "@/components/OurGoal"
import { MeetTheTeam } from "@/components/MeetTheTeam"

export const App = () => {

    return <MainLayout>

        <WhoAreWeTop/>
        <OurGoal/>

        <MeetTheTeam/>


    </MainLayout>
}

export default App