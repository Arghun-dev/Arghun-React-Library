import React from 'react'
import PropTypes from 'prop-types'
import './styles/Card.scss'

export default function Grid({ children }) {
  return <div className='Grid'>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}
