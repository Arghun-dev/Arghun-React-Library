import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SelectedSideMenuContext } from '../../contexts/SelectedSideMenu_Context'
import './SideBar_Menu_Item.scss'

export default function SideBarMenuItem({ value, key, route }) {
  const { setSelectedSideMenu } = useContext(SelectedSideMenuContext)
  return (
    <Link to={route} className='link'>
      <button
        type='button'
        aria-label='icon'
        key={key}
        onClick={() => setSelectedSideMenu(value)}
        onKeyDown={() => setSelectedSideMenu(value)}
        className='SideBarMenu_Item'
        tabIndex={key}
      >
        {value}
      </button>
    </Link>
  )
}

SideBarMenuItem.propTypes = {
  value: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
}
