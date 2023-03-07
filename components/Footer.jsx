import React from 'react'
import{AiFillInstagram, AiOutlineFacebook} from "react-icons/ai"

function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 XileXili All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineFacebook/>
      </p>
    </div>
  )
}

export default Footer