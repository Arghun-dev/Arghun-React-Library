import React from 'react'
import PropTypes from 'prop-types'
import './styles/Card.css'

export default function Card({ children }) {
  return <div className='container'>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
