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

          <section className=' border right-section'>
              <article className='card'>

              </article>
          </section>
    </main>
  )
}

export default Main
