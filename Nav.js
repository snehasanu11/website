import React, { useState } from 'react'
import {  FaPizzaSlice ,FaBars,FaCartArrowDown} from "react-icons/fa";
import {Link} from 'react-router-dom'




const Nav=()=>{
  const [showNav, setShowNav] = useState(false)
  const toggleNavItems = () => {
    document.getElementById('show').style.display="block";
    document.getElementById('show').style.position="absolute";
    document.getElementById('show').style.left="420px";
    document.getElementById('show').style.top="30px";
    document.getElementById('show').style.zIndex="10";

  }
  const disappear=()=>{
    document.getElementById('show').style.display="none";

  }

  return (
    <div className='nav'>
<div>
 <h2><FaPizzaSlice /> pizzas</h2>
</div>

<div>
    <ul className={`nul ${showNav && 'active'}`} id='show'>
        <li className='nli1 nli'><Link to='/'>Home</Link></li>
        
        <li className='nli3 nli'><Link to='/about'>About</Link></li>
        <li className='nli4 nli'><Link to='/menu'>Menu</Link></li>
        <li className='nli5 nli'><Link to='/contact'>Contact</Link></li>
        <li className='nli6 nli'><Link to='/contact'><FaCartArrowDown/></Link></li>
         
    </ul>
</div>
<div>
  
  < FaBars  className='bar' onClick={toggleNavItems} onDoubleClick={disappear}  role="button" id='btn'/>
</div>

    </div>
  )}


export default Nav