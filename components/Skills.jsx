import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Skills = ({ title, list }) => (
  <div className="prose prose-invert flex flex-wrap items-center justify-between p-5 md:h-12">
    {title && <h4 className="mb-10 w-full text-3xl md:mb-4  lg:mb-0 lg:w-auto">{title}</h4>}
    {list &&
      list.map(({ icon }, i) => (
        <Reveal key={i} animation="fade-in zoom-in" delay={i * 250}>
          {icon && <Icon {...icon} className="h-12 w-12 fill-current text-omega-500" />}
        </Reveal>
      ))}
  </div>
)

export default Skills
