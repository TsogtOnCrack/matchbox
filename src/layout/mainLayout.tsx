import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const MainLayout = ({children, className}:any) =>{

    return (

        <div  className={`flex flex-col min-h-screen justify-between ${className}`}>
            <Header />
            {children}
            <Footer/>


        </div>
    )

}