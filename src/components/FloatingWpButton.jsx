import React from 'react'
import '../styles/floatButtonwp.css'

const FloatingWpButton = () => {
    const number = '1536464813'
    return(
    
        <a href={`https://wa.me/${number}`}
        target='_blank'
        rel='nooper noreferrer'
        className='float-wp-button'
        >
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt='whatsapp'
        />
        </a>
    )
}

export default FloatingWpButton