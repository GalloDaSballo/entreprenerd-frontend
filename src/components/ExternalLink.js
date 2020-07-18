import React from 'react'

export default ({to, title}) => (
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      href={to}
    >
      {title}
    </a>
  )
  