import Image from "next/image";
import Logo from "../public/logo.png"
import Link from "next/link";

const Header = ({ children }) => {
  return (
    <div className="w-full z-20">
      <div className="absolute top-0 w-full z-20">{/* remove this div to make navbar blocking */}
      <div className="w-100 h-30 flex-row flex z-20">
        
        <div className="p-5 justify-items-center flex gap-4 flex-initial align-middle items-center w-full justify-between z-20">
          <div className="p-0 justify-items-center flex gap-4 flex-initial align-middle items-center w-48 z-20">
            <Image src={Logo} width={"75rem"} height={"75rem"} className=" z-20" />
            <span className="text-white align-middle z-20">Montgomery Blair High School</span>
          </div>
          <div className="flex flex-col align-middle text-white">
            <div>
              <ul className="flex flex-row gap-2 justify-end">
                <li className="inline z-20"><Link href="">Magnet</Link></li>
                <li className="inline z-20"><Link href="">Cap</Link></li>
                <li className="inline z-20"><Link href="">Clubs</Link></li>
                <li className="inline z-20"><Link href="">Directory</Link></li>
                <li className="inline z-20"><Link href="">Academies</Link></li>
                <li className="inline z-20"><Link href="">Alumni</Link></li>
                <li className="inline z-20"><Link href="">PTSA</Link></li>
                <li className="inline z-20"><Link href="">Parents</Link></li>
                <li className="inline z-20"><Link href="">Students</Link></li>
                <li className="inline z-20"><Link href="">Staff</Link></li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-row gap-2 justify-end">
                <li className="inline z-20"><Link href="">Home</Link></li>
                <li className="inline z-20"><Link href="">About</Link></li>
                <li className="inline z-20"><Link href="">Department</Link></li>
                <li className="inline z-20"><Link href="">Counseling</Link></li>
                <li className="inline z-20"><Link href="">Athletics</Link></li>
                <li className="inline z-20"><Link href="">Calendar</Link></li>
                <li className="inline z-20"><Link href="">News</Link></li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-gradient-to-b from-blair to-transparent absolute top-0 h-5/6 w-full z-10 pointer-events-none"></div>
      { children }
    </div>
  )
}

export default Header;