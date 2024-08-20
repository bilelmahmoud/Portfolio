import { useState } from 'react'
import './main.css'

const Main = () => {

  return (
    <main className='flex'>
          <section className='  left-section flex'>
                  <button className='active'>All Projects</button>
                  <button>HTML & CSS </button>
                  <button>JavaScript</button>
                  <button>React</button>
                  <button>PHP</button>
          </section>

          <section className='right-section'>


          {["aa", "bb", "cc"].map((item) => {

            return(
              <article key={item}  className='card'>
                    <img width={266} src="./htmlcssjs-details.png" alt="" />
                    <div style={{width:"266px"}} className="box">
                          <h1 className="title">landing page 2</h1>
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
