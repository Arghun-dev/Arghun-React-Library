import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '../../../../components'

export default function SideBarCategoryItem({ setSelectedCategory, item }) {
  return (
    <Tooltip text={item.tooltipText}>
      <i
        role='button'
        className={`${item.icon} 
        SideBar_Category_myIcon`}
        onClick={() => setSelectedCategory(item.id)}
        onKeyDown={() => setSelectedCategory(item.id)}
        tabIndex={item.id}
        aria-label='icon'
      />
    </Tooltip>
  )
}

SideBarCategoryItem.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  item: PropTypes.instanceOf(Array).isRequired,
}
