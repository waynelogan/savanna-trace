'use client'

import React, { useState, useEffect, useRef } from 'react'
import mqtt from 'mqtt' //using only 'mqtt' throws some error about polyfills.
import { useToast } from '@/components/ui/use-toast'


const mqttHost = 'ws://broker.emqx.io:8083/mqtt'
const ipTopic = 'savannah'
const username = ''
const password = ''


const options = {
    username,
    password,
    clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`, //can be changed for something more specific if you need it
}

const App = () => {
    const [IP, setIP] = useState('')
    const [showIP, setShowIP] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        const client = mqtt.connect(mqttHost, options)
        toast({description: 'Connecting ...'})

        client.on('connect', () => {
            console.log('Connected to EMQX')
            toast({description: 'Connected'})
            client.subscribe(ipTopic)
        })

        client.on('message', (topic, message) => {
            console.log(topic, message.toString())
            setIP(message.toString)
        })

        return () => {
            client.end()
        }
    }, [])

    return (
        <main className='w-screen flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='my-4'>
                     {
                    showIP === true
                    ?
                    `IP Address: ${
                        IP ? IP : 'Loading ...'
                    }`
                    :
                    'Click the button to show IP address'
                }
                </h1>
               
                <button
                onClick={() => setShowIP(true)}
                className='border border-gray-400 py-2 px-4 rounded-md'
                >
                    Show IP
                </button>
            </div>
        </main>
    )
}

export default App