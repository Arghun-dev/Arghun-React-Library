import React from 'react'
import SideBarCategory from './components/SideBar_Category/SideBar_Category'
import SideBarMenu from './components/SideBar_Menu/SideBar_Menu'
import TopBar from './components/TopBar/TopBar'
import MainPage from './components/MainPage/MainPage'
import './styles.scss'

export default function Index() {
  return (
    <div className='home_page'>
      <SideBarCategory />
      <SideBarMenu />
      <div className='home_page_main-section'>
        <TopBar />
        <MainPage />
      </div>
    </div>
  )
}
