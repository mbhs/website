import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Steeple from "../public/steeple.jpg"
import img4 from "../public/img4.jpg"
import Slider from "react-slick"
import CarouselCard from '../components/CarouselCard'

export default function Home() {

  return (
    <>
      <Head>
        <title>Montgomery Blair High School</title>
      </Head>
      <div className='w-full'>
        <Header className="z-10" />
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
      </div>
    </>
  )
}

