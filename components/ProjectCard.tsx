'use client'
import React from 'react'


interface IProjectCard{
    image: string; 
    title: string; 
    text: string;
}

const ProjectCard = ({image,title,text}:IProjectCard) => {

  return (
    <div className='w-[450px] h-[280x] rounded-md cursor-pointer'>
    <div style={{backgroundImage:`url(${image})`}}
     className='w-full h-full group relative bg-cover bg-center text-white rounded-lg p-4'>
        <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
        <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard