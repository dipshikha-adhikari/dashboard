import React from 'react'
import { Link } from 'react-router-dom';

const SidebarLinks = ({props,  closeSidebar}) => {
  return (
    <div className="sidebar_links"  >
    <span className="sidebar_title">{props.title}</span>
    
    {props.sublinks.map((item, index) => {
      return  <Link to={item.link} key={item.name} className='sidebar_link' onClick={closeSidebar} >
          <span>{item.icon}</span>
          <span>{item.name}</span>
         </Link>
        
      
  
      
    })}
  </div>
  )
}

export default SidebarLinks