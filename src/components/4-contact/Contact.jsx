import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpejorq");

  return (
  <section className='contact-us'>
    <h1 className='title'>
      <span className='icon-envelope'></span>
      contact us
    </h1>
    <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus officiis rem doloremque voluptate 
    </p>
    <div className="flex">
      <form  onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor="email">Email adresse:</label>
          <input  autoComplete='off' required type="email" name='email' id='email'/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className='flex' style={{marginTop : "24px"}}>
          <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message"></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting} className='submit'>
          {state.submitting ? "Submitting ..." : "Submit"}
        </button>

         {state.succeeded && (<p style={{fontSize: "18px", marginTop : "1.7rem"}}>Your message has been sent successfully</p>)}

      </form>
      <div className=" border animation">

      </div>
    </div>
  </section>
  )
}

export default Contact
