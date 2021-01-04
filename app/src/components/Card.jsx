import React from 'react'
import { PropTypes } from 'prop-types'

export default function Card({ children }) {
  return <div className='root'>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
