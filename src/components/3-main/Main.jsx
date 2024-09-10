import { useState } from 'react'
import './main.css'


const myProjects = [
  {projectTitle : "react project" , category: "react" , imgpath:"a"},
  {projectTitle : "css project" , category: "css" , imgpath:"b"},
]

const Main = () => {

  const [currentActive, setaCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className='flex'>
          <section className='  left-section flex'>
                  <button onClick={() => {
                    setaCurrentActive("all")

                  }} className={currentActive === "all" ? "active" : null}>All Projects</button>

                  <button
                      onClick={() => {
                        
                        setaCurrentActive("css")
                      const newArr =  myProjects.filter((item) => {
                        return item.category ==="css"
                      })
                  
                        setArr(newArr )

                    }} className={currentActive === "css"? "active" : null}>
                      HTML & CSS 
                  </button>

                  <button
                      onClick={() => {
                        
                        setaCurrentActive("react")
                      const newArr =  myProjects.filter((item) => {
                        return item.category ==="react"
                      })
                  
                        setArr(newArr )

                    }} className={currentActive === "react"? "active" : null}>
                      React
                  </button>


                  <button>JavaScript</button>
                  <button>PHP</button>
          </section>

          <section className=' flex right-section'>


          {arr.map((item) => {

            return(
              <article key={item.imgpath}  className='card'>
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

              </article>
            )

          })}
              
          </section>
    </main>
  )
}

export default Main
