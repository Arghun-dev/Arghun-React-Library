import React from 'react'
import PropTypes from 'prop-types'
import './styles/Tooltip.scss'

export default function Tooltip({ text, children }) {
  return (
    <div className='tooltip'>
      {children}
      <span className='tooltiptext'>{text}</span>
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
