'use client'

import React from 'react'
import { button } from '../types'

const Button = ({title, containerStyles, click} : button) => {
  return (
    <button 
        disabled={false} 
        type={"button"} 
        className={`custom-btn ${containerStyles}`} 
        onClick={click}>
            
        <span className={"flex-1"}>{title}</span>
    </button>
  )
}

export default Button