import React from 'react'
import './Dropdown.css'
import { NavDropdown } from 'react-bootstrap'

function Dropdown() {
  return (
    <div className='dropdown-menu'>

      <NavDropdown.Item id='first-menu' >
      Bridel Sarees
        <hr/>
        <h5 id='items'>Brocade Kanchipuram</h5>
        <h5 id='items'>White / Red / Blue</h5>
      </NavDropdown.Item>

      <NavDropdown.Item id='second-menu'>
     Silk Sarees
        <hr />
        <h5 id='items'>hjcvabsbnoiuydghkj</h5>
      </NavDropdown.Item>

      <NavDropdown.Item id='third-menu'>
        <img src='image\sarees_pic.jpg' alt='img'/>
      </NavDropdown.Item>

    </div>
  )
}

export default Dropdown