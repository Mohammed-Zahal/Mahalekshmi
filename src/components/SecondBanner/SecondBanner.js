import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './SecondBanner.css'

function SecondBanner() {
    return (

        <div className='SecondBanner'>
            <Row >
                <Col md={12} xs={12} style={{ backgroundImage: "url(image/downloads.jpeg)" }} className='banners' >
                    <div className='contents'>
                        <h1 className='title'>The  world's largest silks sarees showroom network</h1>
                    </div>

                </Col>
            </Row>

        </div>
    )
}

export default SecondBanner