import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div style={{ backgroundImage: "url(/bg-2.jpeg)" }}
    className='w-screen h-screen bg-cover flex items-center justify-center'>
        <div style={{backgroundImage:"url(cliff.webp)"}}
        className='h-[60%] w-[80%] relative bg-cover bg-center rounded-x1 border border-white'
        >
            <div className='absolute left-20 bottom-16 w:[70%] md:w-[32%]'>
                <ContactForm />
            </div>

        </div>
    </div>
  )
}

export default page