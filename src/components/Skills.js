import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold 
            bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md;text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            
            whileHover = {{scale:1.05}}
            initial = {{x:0, y:0}}
            whileInView ={{x:x, y:y, transition: {duration:1.5}}}
            viewport={{once:true}}

        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 mb-14 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-black text-light p-7 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
            
            whileHover = {{scale:1.05}}

            >
                My Skills
            </motion.div>

            <Skill name="CSS" x="-23vw" y="-1vw" />
            <Skill name="HTML" x="-5vw" y="-9vw" />
            <Skill name="Computer Networking" x="33vw" y="12.5vw" />
            <Skill name="OPPs" x="13vw" y="5vw" />
            <Skill name="Data Structures" x="-28vw" y="-17vw" />
            <Skill name="JavaScript" x="-16vw" y="22vw" />
            <Skill name="DBMS" x="30vw" y="-2vw" />
            <Skill name="JAVA" x="0vw" y="-20vw" />
            <Skill name="Git" x="-11vw" y="7vw" />
            <Skill name="mySQL" x="14vw" y="17vw" />
            <Skill name="C Programming" x="-24vw" y="12vw" />
            <Skill name="Artificial Intelligence" x="15vw" y="-11vw" />
            <Skill name="Machine Learning" x="23vw" y="-20vw" />
            <Skill name="Data Science" x="-40vw" y="0vw" />

            <motion.div 
            className='flex items-center justify-center rounded-full font-semibold 
            bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            
            whileHover = {{scale:1.05}}
            initial = {{x:0, y:0}}
            whileInView ={{x:"42vw", y:"24vw"}}
            transition={{duration:1.5}}
            viewport={{once:true}}

            >
                and more...
            </motion.div>

        </div>
    </>
  )
}

export default Skills