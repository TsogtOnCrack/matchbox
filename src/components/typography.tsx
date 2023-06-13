export const Typography = ({children, type}: any) =>{

    let text = ""

    switch ( type){

        case "bold2":
            text = "text-[25px] font-bold font-primary"
    }

    
    
    return <div className={` ${text} `}>

        {children}


    </div>


}