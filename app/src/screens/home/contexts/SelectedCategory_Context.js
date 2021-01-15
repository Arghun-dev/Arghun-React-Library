import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SelectedCategoryContext = createContext()

export default function SelectedCategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  )
}

SelectedCategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
