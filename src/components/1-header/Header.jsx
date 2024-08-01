import { useState } from 'react'
import './header.css'


const Header = () => {

  const [showModal, setShowModal] = useState(false)
  return (
    <header className=' flex'>
      <button onClick={() => {

        setShowModal(true)

      }} className='menu icon-menu flex'></button>

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

      <button className='mode flex'>
        <span className='icon-moon-o'></span>

      </button>


{ showModal && (
  <div className='fixed'>
    
  <ul className='modal'>
  <li>
    <button className='icon-close' onClick={() =>  {
       setShowModal(false)
    }}/>
  </li>
  <li><a href="">À propos</a></li>
  <li><a href="">Articles</a></li>
  <li><a href="">Projets</a></li>
  <li><a href="">Interventions</a></li>
  <li><a href="">Contact</a></li>
  </ul>

</div>

)}



      
    </header>
  )
}

export default Header
