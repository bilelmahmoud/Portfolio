import { useState } from 'react'
import './contact.css'

const Contact = () => {

  return (
  <section className='contact-us'>
    <h1 className='title'>
      <span className='icon-envelope'></span>
      contact us
    </h1>
    <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus officiis rem doloremque voluptate 
    </p>
    <div className="flex">
      <form className='border'>
        <div>
          <label htmlFor="email">Adresse Courriel</label>
          <input type="email" name='' id='email'/>
        </div>
        <div className='flex' style={{marginTop : "24px"}}>
          <label htmlFor="message">votre message</label>
          <textarea name="" id="message"></textarea>
        </div>

        <button>Envoyer</button>

      </form>
      <div className=" border animation">

      </div>
    </div>
  </section>
  )
}

export default Contact
