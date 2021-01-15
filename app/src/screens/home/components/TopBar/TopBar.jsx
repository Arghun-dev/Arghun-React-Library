import React, { useContext } from 'react'
import { SelectedSideMenuContext } from '../../contexts/SelectedSideMenu_Context'
import './TopBar.scss'

export default function TopBar() {
  const { selectedSideMenu } = useContext(SelectedSideMenuContext)
  return <div className='Top_Bar'>{selectedSideMenu}</div>
}
