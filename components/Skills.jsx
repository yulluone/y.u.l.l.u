import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Skills = ({ title, list }) => (
  <div className="prose prose-invert flex flex-wrap items-center justify-between p-5 ">
    {title && <h4 className="mb-10 w-full text-3xl md:mb-4  lg:mb-0 lg:w-auto">{title}</h4>}
    <div className="mx-auto grid w-full grid-cols-4 flex-wrap justify-between sm:flex sm:w-3/4">
      {list &&
        list.map(({ icon }, i) => (
          <Reveal
            key={i}
            animation="fade-in zoom-in"
            delay={i * 250}
            className="flex justify-center"
          >
            {icon && <Icon {...icon} className="my-2 h-12 w-12 fill-current text-omega-500" />}
          </Reveal>
        ))}
    </div>
  </div>
)

export default Skills
