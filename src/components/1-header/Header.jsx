import { useState } from 'react'
import './header.css'


const Header = () => {

  return (
    <header className=' flex'>
      <button className='menu'>show modal</button>

      <div/>


      <nav>
       <ul className='flex'>
          <li><a href="">À propos</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projets</a></li>
          <li><a href="">Interventions</a></li>
          <li><a href="">Contact</a></li>
       </ul>    
      </nav>

      <button>light</button>
    </header>
  )
}

export default Header
