import { useState } from 'react'
import './main.css'
import { myProjects } from './MyProjects';
import { AnimatePresence, motion } from 'framer-motion';



const Main = () => {

  const [currentActive, setaCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {

    setaCurrentActive(buttonCategory)
    const newArr =  myProjects.filter((item) => {

        const arr = item.category.find((myItem) => {

          return myItem === buttonCategory

        })

          return arr === buttonCategory
    })

      setArr(newArr )

  }

  return (
    <main className='flex'>
          <section className='  left-section flex'>
                  <button onClick={() => {
                    setaCurrentActive("all")
                    setArr(myProjects)

                  }} className={currentActive === "all" ? "active" : null}>All Projects</button>

                  <button
                      onClick={() => {
                        
                      handleClick("css")

                    }} 
                    className={currentActive === "css" ? "active" : null}>
                    HTML & CSS 
                  </button>

                  <button
                      onClick={() => {
                        
                      handleClick("react")

                    }} 
                    className={currentActive === "react"? "active" : null}>
                    react
                  </button>
                  <button
                      onClick={() => {
                        
                      handleClick("javaScipt")

                    }} 
                    className={currentActive === "javaScipt"? "active" : null}>
                    javaScipt
                  </button>
                  <button
                      onClick={() => {
                        
                      handleClick("php")

                    }} 
                    className={currentActive === "php"? "active" : null}>
                    php
                  </button>
                 

                  
               
          </section>

          <section className=' flex right-section'>
          <AnimatePresence>


              {arr.map((item) => {

                return(
                  <motion.article 
                        layout
                        initial={{transform: "scale(0.4)"}}
                        animate={{transform: "scale(1)"}}
                        transition={{type: "spring" , damping: 8, stiffness: 50}}
                        key={item.imgpath}  className='card'>
                        <img width={266} src={item.imgpath} alt="" />
                        <div style={{width:"266px"}} className="box">
                              <h1 className="title">{item.projectTitle}</h1>
                              <p className="sub-title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed! Quidem, fugit quia maxime natus illum soluta quo voluptatibus laudantium consequuntur sapiente voluptates atque amet pariatur repudiandae quaerat, quod ipsa!
                              </p>
                              <div  className="flex icons">
                                  <div style={{gap : "11px"}} className='flex'>
                                    <div className="icon-link"></div>
                                    <div className="icon-github"></div>
                                  </div>
                                  <a className='link flex' href="">
                                    more 
                                    <span style={{alignSelf: "end"}} className='icon-arrow-right'>

                                    </span>
                                  </a>
                              </div>
                        </div>

                  </motion.article>
                )

              })}
          </AnimatePresence>  
          </section>
    </main>
  )
}

export default Main
