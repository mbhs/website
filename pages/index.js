import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Steeple from "../public/steeple.jpg"
import img4 from "../public/img4.jpg"
import Slider from "react-slick"
import CarouselCard from '../components/CarouselCard'
import Link from 'next/link'
import CalendarCard from '../components/CalendarCard'
import ilink from '../public/ilink.png'
import tlink from '../public/tlink.png'
import flink from '../public/flink.png'

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
          
          style={{
            
          }}
        >

          <CarouselCard src={Steeple} />
          <CarouselCard src={Steeple} />
        </Slider>
        <br></br>
        <div className='flex p-10 flex-row-reverse'>
          <div className='flex justify-start flex-col ml-2 pl-6 absolute top-40'>
            <h1 className='text-center font-bold text-3xl w-full text-white'>Calendar</h1>
            <CalendarCard date="4/5">
              <p>MBHS Official Among Us Tournament <a className='text-blue-600' href="https://au.preterite.me">Register Here</a></p>
            </CalendarCard>
            <CalendarCard date="4/6">
              <p>New MBHS Website Kickoff Party <a className='text-blue-600' href="https://au.preterite.me">RSVP</a></p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
            <CalendarCard date="4/26">
              <p>filler event</p>
            </CalendarCard>
          </div>

          <div className='flex items-center flex-col grow'>
            <h1 className='text-center font-bold text-3xl w-full'>News</h1>
            <div className='flex justify-between w-[560px]'>
              <Link href=''><button className='bg-red-700 text-white m-4 p-2 rounded-md'>SCO</button></Link>
              <Link href=''><button className='bg-red-700 text-white m-4 p-2 rounded-md'>InfoFlow</button></Link>
              <Link href=''><button className='bg-red-700 text-white m-4 p-2 rounded-md'>BNC</button></Link>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/22-KpQsx4kA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className='flex justify-between p-10 w-[200px]'>
              {/* put icons here or whatever */}
              <Image src={ilink} width={32} height={32} />
              <Image src={tlink} width={32} height={32} />
              <Image src={flink} width={32} height={32} />
            </div>
          </div>
          
        </div>
      </div>
      <div className='text-white w-full bg-red-700 h-20 flex items-center justify-center'>
          <p>Made by the Blair Sysops people but this mockup was made by patrick</p>
      </div>
    </>
  )
}

