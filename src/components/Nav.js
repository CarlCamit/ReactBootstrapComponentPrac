import React from 'react'

const Nav = ({
  children
}) => (
  <ul className='nav nav-pills'>
    { children }
  </ul>
)

const classForNavItem = (active) => {
  let className = 'nav-link'
  if (active) {
    className += ' active'
  }
  return className
}

const NavItem = ({
  href, // URL
  children, // Text
  active = false
}) => (
  <li className='nav-item'>
    <a className={ classForNavItem(active) } href={ href }>
      { children }
    </a>
  </li>
)

export { Nav, NavItem }