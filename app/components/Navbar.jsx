import React from 'react'
import Image from 'next/image'
import photo from './image.jpg'
import Link from 'next/link'

export default function Navbar()   {
  return (
    <div>
      <nav>
           <Image 
              src={photo}
              alt='Dojo HelpDesk logo'
              width={50}
              height={5}
              quality={100}
              placeholder = 'blur'  
              
           />
          <h1>Help-desk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  )
}
