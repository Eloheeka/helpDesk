import React from 'react'

export default function Navbar()   {
  return (
    <div>
      <nav>
          <h1>Help-desk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  )
}
