import Image from "next/image"
import Link from "next/link"

const CarouselCard = ({src}) => {

    return (
        <div>
            <Image 
                src={src} 
                layout='responsive' 
                objectFit='cover' 
                // loader={({src})=>`api url ${src}`}
                // cannot change url
                style={{
                    zIndex: -20
                }}
            />
            <div className='rounded-md bg-white w-96 p-8 ml-12 absolute top-72 z-40 translate-z' >
                <h2 className='text-center text-2xl font-bold mb-4 z-10' >
                    New School Website
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex justify-center'>
                    <Link href="https://google.com">
                        <div className="bg-red-500 rounded-lg mt-4 text-center p-2 w-1/2 hover:bg-red-600 hover:cursor-pointer transition-all">
                            Link to page
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard;