import React from 'react'
import PropTypes from 'prop-types'
import SideBarCategoryItem from './SideBar_Category_Item'
import './SabeBar_Category.scss'

export default function SideBarCategory({
  setSelectedCategory,
  SideBarCategories,
}) {
  return (
    <div className='SideBar_Category'>
      {SideBarCategories.map((item) => (
        <SideBarCategoryItem
          setSelectedCategory={setSelectedCategory}
          item={item}
        />
      ))}
    </div>
  )
}

SideBarCategory.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  SideBarCategories: PropTypes.instanceOf(Array).isRequired,
}
