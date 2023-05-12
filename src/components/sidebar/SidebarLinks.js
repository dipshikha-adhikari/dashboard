import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../../context';

const SidebarLinks = ({props}) => {
  const{state,dispatch} = useContext(context)

  
  return (
    <div className="sidebar_links"  >
    <span className="sidebar_title">{props.title}</span>
    
    {props.sublinks.map((item, index) => {
      return  <Link to={item.link} key={item.name} className='sidebar_link'  onClick={() => dispatch({type:'CLOSE_SIDEBAR'})}>
          <span>{item.icon}</span>
          <span>{item.name}</span>
         </Link>
    })}
  </div>
  )
}

export default SidebarLinks