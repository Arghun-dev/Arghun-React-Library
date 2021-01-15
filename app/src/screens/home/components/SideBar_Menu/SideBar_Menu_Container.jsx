import React, { useState, useContext, useEffect } from 'react'
import SideBarMenuView from './SideBar_Menu'
import { SelectedCategoryContext } from '../../contexts/SelectedCategory_Context'
import { SideBarMenus } from '../../constants/SideBar_Menus'

export default function SideBarMenuContainer() {
  const { selectedCategory } = useContext(SelectedCategoryContext)
  const [menus, setMenus] = useState(null)

  useEffect(() => {
    if (selectedCategory === 1) {
      setMenus(SideBarMenus[0])
    }

    if (selectedCategory === 2) {
      setMenus(SideBarMenus[1])
    }
  }, [selectedCategory])

  return menus && <SideBarMenuView menus={menus} />
}
