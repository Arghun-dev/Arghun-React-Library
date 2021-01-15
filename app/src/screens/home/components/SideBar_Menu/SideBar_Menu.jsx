import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../../../asset/Logo/dfc8eeab-d144-44e2-abf3-d3996880e7b0_200x200 (1).png'
import SideBarMenuItem from './SideBar_Menu_Item'
import './SideBar_Menu.scss'

export default function SideBarMenu({ menus }) {
  return (
    <div className='SideBar_Menu_Container'>
      <img src={Logo} alt='Logo' width='70' />
      <ul className='SideBar_Menu'>
        {menus.items.map((item) => (
          <>
            {item.subHead ? (
              <p className='SideBar_Menu_SubHead'>{item.subHead}</p>
            ) : (
              <SideBarMenuItem
                key={item.id}
                value={item.name}
                route={item.route}
              />
            )}
          </>
        ))}
      </ul>
    </div>
  )
}

SideBarMenu.propTypes = {
  menus: PropTypes.instanceOf(Array).isRequired,
}
