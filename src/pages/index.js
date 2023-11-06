import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Chandan Neralgi | Portfolio</title>
        <meta name="description" content="Crafting Tomorrow's Technology Today: A Computer Science Engineering Student's Journey into Software Engineer, Data Science, AI & ML, and Cloud Computing" />
        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="ChandanNeralgi" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
                priority
                sizes="(max-width: 768px 100vw, (max-width: 1200px) 50vw, 50vw" 
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Pioneering the Future by Translating Vision into Code and Design." className='!text-4xl !text-left xl:!yext-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled developer, I am dedicated to transforming ideas into innovative real-life applications. Allow me to introduce my latest projects and more, which showcase my expertise in programming and development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Chandan_Neralgi_Resume.pdf" target={"_blank"} 
                className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark 
                hover:dark:text-light hover:dark:border-light md:p-2 md:text-base"
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:chandanneralgi@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Chandan" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}