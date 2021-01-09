import React from 'react'
import { SideBarCategories } from '../../constants/SideBar_Category'
import './SabeBar_Category.scss'

export default function SideBarCategory() {
  return (
    <div className='SideBar_Category'>
      {SideBarCategories.map((item) => (
        <i className={item.icon} />
      ))}
    </div>
  )
}
