import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import { useState } from 'react';
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
    return ( 
     <header>
          <div className="container">
             <nav className="Navbar">
                <Link to='/'>Home</Link>
                <Link to='/counter'>Counter</Link>
                <Link to='/modal'>Modal</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/photos'>Photos</Link>
                <Link to='/converter'>Converter</Link>
             </nav>
          </div>
          <div className="modalNav">
            <div></div>
          <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>      
          </div>
          

       <div className={isOpen ? 'activeModal modalMenu' : 'modalMenu'}>
       <svg onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
             <div className="menuList">
                <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
                <Link onClick={() => setIsOpen(false)} to='/counter'>Counter</Link>
                <Link onClick={() => setIsOpen(false)} to='/modal'>Modal</Link>
                <Link onClick={() => setIsOpen(false)} to='/quiz'>Quiz</Link>
                <Link onClick={() => setIsOpen(false)} to='/photos'>Photos</Link>
                <Link onClick={() => setIsOpen(false)} to='/converter'>Converter</Link>
             </div>
          </div>
       </header>
     );
}

export default Navbar;