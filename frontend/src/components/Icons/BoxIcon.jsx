import React from 'react'

const BoxIcon = ({hexi}) => {
  return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="46" height="46" rx="13" stroke={hexi} strokeWidth="4" />
      </svg>

  )
}

export default BoxIcon