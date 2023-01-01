import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: Boolean;
  skill: Skill;
}

const Skill = ({directionLeft, skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
          <motion.img
              className='rounded-full border-gray-500 object-cover w-20 h-20 md:h-16 md:w-16 xl:h-20 xl:w-20 filter 
              group-hover:grayscale transition duration-300 ease-in-out'
            initial={{
                x: directionLeft ? -200 : 200,
            opacity:0  
            }}
            transition={{ duration:1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
          />
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
           group-hover:bg-white h-20 w-20 md:h-16 md:w-16 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}%</p>
            </div>
          </div>
    </div>
  )
}

export default Skill