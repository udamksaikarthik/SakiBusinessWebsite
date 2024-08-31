import React from 'react'
import './HomeHeaderTagLine.css'
import background_img from '../Assets/homeheadertaglinecontainer_background.jpg'

export const HomeHeaderTagLine = () => {
  return (
    <>
        <div className="HomeHeaderTagLineContainer">
            <img src={background_img} alt="Background" />
            <h4>"Bringing you closer to your higher self one card at a time."</h4>
        </div>
    </>
  )
}
