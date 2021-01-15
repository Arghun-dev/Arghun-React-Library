import React, { useContext } from 'react'
import SideBarCategory from './SideBar_Category'
import { SelectedCategoryContext } from '../../contexts/SelectedCategory_Context'
import { SideBarCategories } from '../../constants/SideBar_Category'

export default function SideBarCategoryContainer() {
  const { setSelectedCategory } = useContext(SelectedCategoryContext)
  return (
    <SideBarCategory
      setSelectedCategory={setSelectedCategory}
      SideBarCategories={SideBarCategories}
    />
  )
}
