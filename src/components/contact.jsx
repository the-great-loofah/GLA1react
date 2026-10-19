import React from "react"
import './contact.css'

export function Contact(){
    const email = 'j.matyashussain437@mybvc.ca'
    const gitHub = 'github.com/the-great-loofah'
    return(<>
    <h2>Contact me</h2>
    <p id="contact"><strong>Email:</strong>{email} <strong>Github:</strong><a href="https://github.com/the-great-loofah">{gitHub}</a></p>
    </>)
}