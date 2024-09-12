
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/1-header/Header.jsx'
import Hero from './components/2-hero/Hero.jsx'
import Main from './components/3-main/Main.jsx'
import Contact from './components/4-contact/Contact.jsx'
import Footer from './components/5-footer/Footer.jsx'


function App() {

  useEffect(() => {
  
  window.addEventListener("scroll", () =>  {
    if (window.scrollY > 300) {
      setShowScrollBtn(true)
    } else {
      setShowScrollBtn(false)
    }
    
  })
   
  },[])

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  return (
    <div id='up' className='container'>

      <Header />
    
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

 
          <a style={{opacity : showScrollBtn ? 1 : 0 , transition : "1s" }} href='#up'>
          <button className=' icon-chevron-up scroll2Top '></button>
         </a>
     

    </div>
  )
}

export default App
