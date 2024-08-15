import { useState } from 'react'
import './hero.css'

const Hero = () => {

  return (
   
      <section className='hero flex'>
         <div className='left-section '>
           <div className='parent-avatar flex'>
              <img src="./avatar-bilel.jpg" className='avatar' alt="" />
              <div className='icon-verified'></div>
           </div>
           <h1 className='title'>Développeur Full Stack</h1>
           <p className='sub-title'> Passionné de solutions web innovantes, je suis un développeur Full Stack spécialisé dans la création d'expériences
           utilisateur exceptionnelles. Mon expertise couvre la conception et la mise en œuvre d'interfaces attrayantes et fonctionnelles</p>
           <div className='icons flex'>
              <div className='icon icon-linkedin'></div>
              <div className='icon icon-github'></div>
           </div>
         </div>


         <div className='right-section annimation border'>
            annimation
         </div>
      </section>
   
  )
}

export default Hero
