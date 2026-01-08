import React from 'react'
import CreateForm from './createForm'

import {useRouter} from 'next/navigation'
import {useState} from 'react'


export default function CreateTicket() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);
  return (
    <main>
        <h2 className='text-teal-400 text-center'>Create Ticket</h2>
        <CreateForm />
    </main>
  )
}
