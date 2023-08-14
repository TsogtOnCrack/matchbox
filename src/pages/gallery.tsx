import { MainLayout } from "@/layout/mainLayout"
import { GalleryHeader } from "@/components/galleryHeader"
import { GalleryBody } from "@/components/galleryBody"
import { Footer } from "@/components/footer"

export const Gallery = () => {

    

    return <div className="flex flex-col items-center">
        
        <div className="max-w-[1800px] ">
        <GalleryHeader />
        <GalleryBody/>
        <Footer/>
        </div>

    </div>
}

export default Gallery