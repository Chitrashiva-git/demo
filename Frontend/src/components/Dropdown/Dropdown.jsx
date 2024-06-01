import React from 'react'
import all_product from '../assets/all_product'
import { Link } from 'react-router-dom'
import item from '../items/item'

const Dropdown = () => {
  return (
    <>
      <ul>
        {all_product.map(item =>{
            return(
                <li key={item.id}>
                    <Link to={item.id}className={item.category}>{item.category}</Link>
                </li>
            )
        
        })}
      </ul>
    </>
  )
}

export default Dropdown
