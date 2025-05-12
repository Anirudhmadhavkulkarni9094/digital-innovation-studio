"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
function ContactBanner() {
  return (
<div  
    className='relative -z-10'    
>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
       className="fixed items-baseline top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold coolvetica text-center flex  gap-4 z-0"
    >
      CONTACT
    </motion.div>
    <Image src={"/image-2.avif"} alt={"image"} className='absolute right-10' width={150} height={150}></Image>
      </div>  )
}

export default ContactBanner