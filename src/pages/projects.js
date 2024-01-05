import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/AlphaBot.jpg"
import project2 from "../../public/images/projects/Parkinson.png"
import project3 from "../../public/images/projects/Text to Emoji.png"
import project4 from "../../public/images/projects/Decentralized File Sharing System.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4'>

        {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/> */}

        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
            <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'>
                    <GithubIcon />
                </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    Visit Project
                </Link>
            </div>
        </div>

        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 shadow-2xl relative dark:bg-dark dark:border-light xs:p-4'>
           <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

        <div className='w-full flex flex-col items-start justify-between pl-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
        <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-8 md:w-6'>
                    <GithubIcon />
                </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>
                    Visit
                </Link>
            </div>
        </div>
        </article>
    )
}



const projects = () => {
  return (
    <>
        <Head>
            <title>Chandan Neralgi | Projects Page</title>
            <meta name="description" content="Crafting Tomorrow's Technology Today: A Computer Science Engineering Student's Journey into Software Engineer, Data Science, AI & ML, and Cloud Computing" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex items-center flex-col justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="AlphaBot a multi-purpose Chat-bot"
                            summary="A versatile chatbot project is created to perform multiple tasks,
                            including answering questions, offering student support, stock
                            prediction, and delivering personalized recommendations."
                            link="https://github.com/chandanneralgi/AlphaBot"
                            type="Featured Project"
                            img={project1}
                            github="https://github.com/chandanneralgi/AlphaBot"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Parkinson Disease Detection"
                            link="https://colab.research.google.com/drive/1n5ggefdNOoGIZdwljaZxcbkiHKrgamr3?usp=sharing#scrollTo=Iw8z6w60Djd2"
                            type="Data Science"
                            img={project2}
                            github="https://github.com/chandanneralgi/Parkinson-Disease-Detection.git"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Encryption and Decryption"
                            link="https://chandanneralgi.github.io/Text_to_Emoji/"
                            type="Text to Emoji"
                            img={project3}
                            github="https://github.com/chandanneralgi/Text_to_Emoji"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Decentralized File Sharing System"
                            summary="Decentralized file sharing systems employ blockchain and peer-to-peer networks to enable secure, censorship-resistant file
                            exchange, fostering greater privacy and autonomy for users."
                            link="https://github.com/chandanneralgi/Decentralized-File-Sharing-System.git"
                            type="Featured Project"
                            img={project4}
                            github="https://github.com/chandanneralgi/Decentralized-File-Sharing-System.git"
                        />
                    </div>
                    {/* <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Crypto Screener Application"
                            link="/"
                            type="Project - 3"
                            img={project1}
                            github="/"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Crypto Screener Application"
                            link="/"
                            type="Project - 4"
                            img={project1}
                            github="/"
                        />
                    </div> */}
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects