import { useState } from 'react'
import './header.css'


const Header = () => {

  const [showModal, setShowModal] = useState(false)
  return (
    <header className=' flex'>
      <button onClick={() => {

        setShowModal(true)

      }} className='menu'>show modal</button>

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


{ showModal && (
  <div className='fixed'>
    
  <ul className='modal'>
  <li>
    <button onClick={() =>  {
       setShowModal(false)
    }}>close</button>
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
