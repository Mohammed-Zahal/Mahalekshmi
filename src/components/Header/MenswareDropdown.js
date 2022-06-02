import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import './MensDropdown.css'

function MenswareDropdown() {
    return (
        <div className='dropdown-menus'>
            <NavDropdown.Item  id='first-menu' >
              Mens Ware
                <hr className=''/>
                <h5 id='items'>abcdefghijklmnop</h5>
            </NavDropdown.Item>

            <NavDropdown.Item id='second-menu'>
               Dothis
                <hr/>
                <h5 id='items'>
                    jhdgsahjxkzhuidghsjx
                </h5>
            </NavDropdown.Item>
            <NavDropdown.Item id='third-menu'>
                <img src='image\images (4).jpg' alt='img' />
            </NavDropdown.Item>

        </div>
    )
}

export default MenswareDropdown