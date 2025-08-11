import Image from 'next/image'
import React from 'react'

export default function Imagewithchild({children}) {
  return (
    <section className='h-[100vh] w-[100vw] flex items-center justify-center gap-10'>
        <div className="w-[50%] flex items-center justify-center">
                <img
                  src="/blueboy.png"
                  alt="Hero Illustration"
            
                
                  className="object-contain h-[500px] w-[500px]"
                />
              </div>
              <div className='w-[50%]'>
                {children}
              </div>
    </section>
       
    
      
    
  )
}
