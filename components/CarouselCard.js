import Image from "next/image"
import Link from "next/link"

const CarouselCard = ({src}) => {

    return (
        <>
            <Image 
                src={src} 
                layout='responsive' 
                width={"100px"}
                height={"100px"}
                objectFit='cover' 
                // loader={({src})=>`api url ${src}`}
                className="-z-30"
            />
            <div className='rounded-md bg-white w-96 p-8 ml-12 absolute top-72 z-30 translate-z-1'>
                <h2 className='text-center text-2xl font-bold mb-4' >
                    New School Website
                </h2>
                <p>
                    sample text filler text very cool filler text filler pog
                </p>
                <Link
                    href="https://google.com"
                >
                    Link to page
                </Link>
            </div>
        </>
    )
}

export default CarouselCard;