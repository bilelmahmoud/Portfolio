import { useState } from 'react';
import './main.css';
import { myProjects } from './MyProjects';
import { AnimatePresence, motion } from 'framer-motion';

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      return item.category.includes(buttonCategory);
    });
    setArr(newArr);
  };

  return (
    <main className='flex'>
      <section className='left-section flex'>
        <button 
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }} 
          className={currentActive === "all" ? "active" : null}>
          All Projects
        </button>

        <button
          onClick={() => handleClick("PHP")}
          className={currentActive === "PHP" ? "active" : null}>
          PHP
        </button>

        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}>
          React
        </button>

        <button
          onClick={() => handleClick("javaScript")}
          className={currentActive === "javaScript" ? "active" : null}>
          JavaScript
        </button>

        <button
          onClick={() => handleClick("laravel")}
          className={currentActive === "laravel" ? "active" : null}>
          Laravel
        </button>
      </section>

      <section className='flex right-section'>
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.id}  
              className='card'>
              <img width={266} src={item.imgpath} alt={item.projectTitle} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className='link flex' href={item.link} target="_blank" rel="noopener noreferrer">
                    More
                    <span style={{ alignSelf: "end" }} className='icon-arrow-right'></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
