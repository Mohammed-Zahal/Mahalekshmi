
import React, { useState } from 'react'
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap'
import Dropdown from './Dropdown'
import KurthiDropdown from './KurthiDropdown';
import MenswareDropdown from './MenswareDropdown';
import Search from './Search';

function Header() {

  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(true);
  }
  const hideDropdown = () => {
    setShow(false);
  }

  const [kurthi, setKurthi] = useState(false);
  const viewKurthi = () => {
    setKurthi(true);
  }
  const hideKurthi = () => {
    setKurthi(false);
  }
  const [mensWare, setMensWare] = useState(false);
  const viewMensWare = () => {
    setMensWare(true);
  }
  const hideMensWare = () => {
    setMensWare(false);
  }

  const [showButton, setShowButton] = useState(false)
  const viewButton = () => setShowButton(true)
  const hideButton = () => setShowButton(false)

  return (
    <div>
      <Navbar bg="light" expand="lg" className='nav'>
        <Container >
          <img className='logo' src="image\Mahalekshmi_logo.svg" alt="Mahalekshmi logo" />
          <Navbar.Toggle aria-controls="navbarScroll" id='toggle' />
          <Navbar.Collapse id="navbarScroll" className='collapse'>
            <Nav className="fw-bolder " id='nav-items' >
              <NavDropdown active title="SAREES" id="navbarScrollingDropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown} >

                {show ? <Dropdown /> : hideDropdown}

              </NavDropdown>
              <Nav.Link active>SAREES BELOW RS.5000</Nav.Link>
              <Nav.Link active>SALWAR MATERIALS</Nav.Link>
              <NavDropdown active title="TOPS&KURTI" id="navbarScrollingDropdown"
                kurthi={kurthi}
                onMouseEnter={viewKurthi}
                onMouseLeave={hideKurthi} >

                {kurthi ? <KurthiDropdown /> : hideKurthi}

              </NavDropdown>
              <Nav.Link active>LAHANGA&DHAVANI</Nav.Link>
              <NavDropdown active title="MENS WEAR" id="navbarScrollingDropdown"
                mensWare={mensWare}
                onMouseEnter={viewMensWare}
                onMouseLeave={hideMensWare} >

                {mensWare ? <MenswareDropdown /> : hideMensWare}

              </NavDropdown>
              <Nav.Link active>GIFT CARDS</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className='serachButton'>
                <Button variant="danger" className='fa fa-search' onClick={() => setShowButton(!showButton)}></Button>
                {showButton && (<Search />)}
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>

  )
}

export default Header





