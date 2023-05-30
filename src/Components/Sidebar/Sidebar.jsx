import React from 'react'
import './Sidebar.css';

import { closeSidebar } from '../../Features/General/GeneralSlice';
import { useDispatch, useSelector } from 'react-redux';
import {sublinks} from '../../Utils/Data';


import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {

     const {isSidebarOpen} = useSelector((store) => store.General)
    
   const dispatch = useDispatch()
  return (
    <section className={`${isSidebarOpen ? 'sidebar-wrapper show': 'sidebar-wrapper'}`} >
     <div className='sidebar'>
      <button className='close-btn'  onClick={() => dispatch(closeSidebar())}>
      <FaTimes  className='close-icon' />
      </button>

      <div className="sidebar-links">
         {sublinks.map((item, index) =>{
          const {links, page} = item;
          return <div key={index}>
            <h3>{page}</h3>
            <div className="sidebar-sublinks">
              {links.map((link,index) =>{
                const {label, url} = link;
               
                return <a href={url} key={index}> 
                 
                  {label}
                </a>
              })}
            </div>
          </div>
        })} 
      </div>
     </div>
    </section>
  )
}

export default Sidebar;