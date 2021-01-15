import React from 'react'
import SelectedCategoryProvider from './contexts/SelectedCategory_Context'
import SelectedSideMenuProvider from './contexts/SelectedSideMenu_Context'
import SideBarCategoryContainer from './components/SideBar_Category/SideBar_Category_Container'
import SideBarMenuContainer from './components/SideBar_Menu/SideBar_Menu_Container'
import TopBar from './components/TopBar/TopBar'
import MainPage from './components/MainPage/MainPage'
import './styles.scss'

export default function Index() {
  return (
    <div className='home_page'>
      <SelectedSideMenuProvider>
        <SelectedCategoryProvider>
          <SideBarCategoryContainer />
          <SideBarMenuContainer />
        </SelectedCategoryProvider>
        <div className='home_page_main-section'>
          <TopBar />
          <MainPage />
        </div>
      </SelectedSideMenuProvider>
    </div>
  )
}
