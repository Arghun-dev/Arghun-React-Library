import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SelectedSideMenuContext = createContext()

export default function SelectedSideMenuProvider({ children }) {
  const [selectedSideMenu, setSelectedSideMenu] = useState(null)

  return (
    <SelectedSideMenuContext.Provider
      value={{ selectedSideMenu, setSelectedSideMenu }}
    >
      {children}
    </SelectedSideMenuContext.Provider>
  )
}

SelectedSideMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
