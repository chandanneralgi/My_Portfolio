import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/My_Profile_Image.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000})
    const isInView = useInView(ref, {once:true})
    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0)
        }
      })
    }, [springValue, value])
    
    

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Chandan Neralgi | About Page</title>
            <meta name="description" content="Crafting Tomorrow's Technology Today: A Computer Science Engineering Student's Journey into Software Engineer, Data Science, AI & ML, and Cloud Computing" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Chandan D. Neralgi" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium'>
                            I&apos;m Chandan Neralgi, passionate about blending technology and creativity. Through my studies in Computer Science Engineering at Dayananda Sagar University, I specialized in Artificial Intelligence and Machine Learning. Actively engaging in hands-on projects, I connected theory with real-world challenges, deepening my understanding and curiosity for practical impact.
                        </p>
                        <p className='my-4 font-medium'>
                            Beyond academics, I&apos;ve explored Java and Python programming, Cloud Computing, and Full Stack Web Development, refining teamwork, communication, and problem-solving. These experiences highlighted adaptability and collaboration&apos;s significance in achieving positive outcomes. 
                        </p>
                        {/* <p className='font-medium'>
                            Outside academics, I've delved into Java and Python programming, Cloud Computing, and Full Stack Web Development. These pursuits facilitated teamwork, honed communication, and improved problem-solving. These experiences underscored the value of adaptability and collaboration for achieving favorable results.
                        </p> */}
                    </div>

                    <div className='col-span-3 relative h-max rounded-3xl border-2 
                    border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt="Chandan" className="w-full h-auto rounded-2xl" 
                            priority
                            sizes="(max-width: 768px 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    {/* <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of coding experience</h2>
                        </div>
                    </div> */}

                </div>
                <Skills />
                {/* <Experience /> */}
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about