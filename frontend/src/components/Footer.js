import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {

    function getYear() {
        return new Date().getFullYear();
    }
    return (
        <footer>
        <Container>
        <Row>
        <Col className="text-center py-3">
           Copyright {getYear()} &copy; Homey: Built by Gaurang Ruparelia
           </Col>
           </Row>
           </Container>
        </footer>
    )
}

export default Footer