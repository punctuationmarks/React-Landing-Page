import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    return (
        <Fragment>
            <Container className="section-container">
                <h2 className="section-h2 center">Services Provided</h2>
                <Row >
                    <Col xs={6} md={4}>
                        <h4>Consulting</h4>
                        <ul>
                            <li>Stormwater Best Management Practices Compliance Inspections</li>
                            <li>Construction Inspections</li>
                            <li>Existing Site &amp; Vegetation Assessment</li>
                            <li>BMP &amp; Value Consulting</li>
                            <li>Permitting &amp; Ordinance Review</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>Management</h4>
                        <ul>
                            <li>Stormwater BMP Compliance Construction and Maintenance</li>
                            <li>Low Impact Landscape and Site Construction</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>Sustainable Design</h4>
                        <ul>
                            <li>Low Impact Landscape and Site Design</li>
                            <li>Urban Design</li>
                            <li>Green Infrastructure Design and Planning</li>
                            <li>Community Focused Design</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </Fragment>



    );
}

export default Portfolio;
