import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Steeple from "../public/steeple.jpg"
import img4 from "../public/img4.jpg"
import Slider from "react-slick"
import CarouselCard from '../components/CarouselCard'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Montgomery Blair High School</title>
      </Head>
      <div className='w-full'>
        <Header className="z-0" />
        {/* <Image className='-z-10 absolute top-0' layout='responsive' objectFit='cover' src={img4}/> */}
        <Slider 
          dots={true}
          infinite={true}
          speed={500}
          slidesToScroll={1}
          slidesToShow={1}
          className='z-0'
        >
          <div>
            <Image src={Steeple} layout='responsive' objectFit='cover'/>
            <p> Blair Steeple </p>
          </div>
          <div>
            <Image src={img4} layout='responsive' objectFit='cover' />
            <p> person with mask </p>

          </div>
          <CarouselCard src={Steeple} />
        </Slider>
        <div className='flex justify-between'>
          <div>
            <h1>News</h1>
            <div className='flex justify-between'>
              <Link href=''><button>SCO</button></Link>
              <Link href=''><button>InfoFlow</button></Link>
              <Link href=''><button>BNC</button></Link>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WyVyibeMgyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='flex justify-between'>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

