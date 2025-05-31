import React from 'react'
import { NETFLIX_LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute px-32 py-2 z-10'>
      <img className='w-48' src={NETFLIX_LOGO} alt="logo" />
    </div>
  )
}

export default Header
