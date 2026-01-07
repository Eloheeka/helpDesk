async function getTickets() {
  const res = await fetch ('http://localhost:3000/api/tickets', {cache: 'no-store'});
  return res.json();
}

export default  async function TicketsList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.mao((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.description.slice(0,200)}...</p>
          <div className= {`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
    
    
    </>
  )
}
