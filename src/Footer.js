import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <p>{(length === 1) ? "1 List Item" : `${length} List Items`}</p>
    </footer>
  )
}

export default Footer