import React from 'react'

const Header = (props) => {
  const headerStyle = {
    backgroundColor: "mediumseagreen",
    color: "white",
  }
  return (
    <header style={headerStyle}>
        <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: "A List of Items",
}

export default Header