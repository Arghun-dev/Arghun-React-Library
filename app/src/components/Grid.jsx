import React from 'react'
import PropTypes from 'prop-types'
import './styles/Card.css'

export default function Grid({ children }) {
  return <div className='root'>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}
