import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Source code: https://www.w3schools.com/howto/howto_css_fixed_footer.asp

export default function Footer() {
    return (
        <footer className="font-small py-2">
            <Container className="Footer-container text-center " fluid>
                <Row>
                    <Col className="md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Shipping Application</h5>
                        <p>For business</p>
                        <p>Food,Shipment,Logistic,...</p>
                    </Col>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <Col className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Dev-Not Production</h5>
                        <p>Loading.....</p>
                    </Col>
                    <Col className="md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">VGU</h5>
                        <p>Distributed System</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}