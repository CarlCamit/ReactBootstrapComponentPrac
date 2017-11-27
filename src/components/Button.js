import React from 'react'

const Button = ({
  title,
  variation = 'dark',
  href
}) => {
  const Component = (href != null) ? 'a' : 'button'
  return (
    <Component
      href={ href }
      className={ `btn btn-${variation}` }
    >
      { title }
    </Component>
  )
}

export default Button