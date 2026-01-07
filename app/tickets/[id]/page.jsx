async function getTicket() {
  const res = await fetch ('http://localhost:3000/api/tickets/' + id, {
    next : {
      revalidate:60
    }
  });
  return res.json();
}

import React from 'react'

export default async function TicketsDetails({params}){
    const ticket = await getTicket(params.id)
    return (
    <main>
        <nav>
            <h2>Tickets Details</h2>
        </nav>
        <div className="card">
            <h3>{tickets.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>

);
} 
