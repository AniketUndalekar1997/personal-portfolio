import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
  key:string
}

const ExperienceCard = ({ experience, key }: Props) => {
  return (
      <article className='flex flex-col rounded-lg items-center space-y-0 flex-shrink-0
        w-[400px] md:w-[500px] xl:w-[700px] xl:h-[550px] snap-center bg-[#292929]
        p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img
              initial={{
                  y: -100,
                  opacity:0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              className='w-24 h-24 rounded-full md:rounded-full md:w-[200px] md:h-[200px] xl:w-[150px] xl:h-[150px] object-cover object-center'
              src={ urlFor(experience.companyImage).url()}
              alt=""
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'></h4>
              <p className='font-bold text-2xl mt-1'></p>
              <div className='flex space-x-2 my-2'>
                  {/* Tech used  */}
                  {experience?.technologies.map((technology, i) => (
                    <img key={i} className='h-10 w-10 rounded-full'
                      src={urlFor(technology.image).url()}
                    />
                  ))}
              </div>
              <p className='uppercase py-5 text-gray-300'>
                  {new Date(experience.dateStarted).toDateString()} -{" "}
                  {experience.isCurrentlyWorkingHere ? "Present" :
                  new Date(experience.dateEnded).toDateString()}
              </p>
              <ul className='list-disc space-y-4 ml-5 text-lg h-72 p-5 overflow-y-scroll scrollbar-thin 
              scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points.map((point, i) => {
                  return(<li key={i}>{ point}</li>)
                })}
              </ul>
          </div>
    </article>
  )
}

export default ExperienceCard