import React from 'react'
import {motion} from "framer-motion"
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects:Project[]
}

function Projects({ projects }: Props) {
    return (
      <div className='h-screen relative flex overflow-hidden flex-col md:flex-row
      max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
              Projects
          </h3>
          
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
              {projects.map((project:any, i:any) => (
                  <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
                    justify-center p-20 md:p-44 h-screen'>
                      <motion.img
                          initial={{ y: -300, opacity: 0 }}
                          transition={{ duration: 1.2 }}
                          viewport={{ once: true }}
                          whileInView={{opacity:1, y:0}}
                          src={urlFor(project?.image).url()}
                          className='w-104 sm:h-[100px] xl:w-[600px] xl:h-[500px] object-cover object-center md:object-fit'
                          alt=""
                      />
                      <div className='space-y-10 px-0 md:px-10 mx-w-6xl'>
                          <h4 className='text-4xl font-semibold text-center'>
                              <span className='underline decoration-[#F7AB0A]/50'>Project {i + 1} {project?.length}:
                                  {" "}</span>
                              {project?.title}
                          </h4>

                          <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((technology:any) => (
                              <img
                                  className='rounded-full h-10 w-10'
                                  key={technology._id}
                                  src={urlFor(technology.image).url()}
                                  alt=""
                              />
                            ))}
                          </div>

                          <p className='text-lg text-center md:text-left'>
                              {project?.summary}
                          </p>
                      </div>
                          
                  </div>
              ))}

            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />

    </div>
  )
}

export default Projects;