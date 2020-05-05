import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Media from 'react-media';

class Services extends React.Component {
    render() {
        return (
            <div>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small &&
                                <Fragment>
                                    <Container className="section-container">
                                        <h2 className="section-h2 center">Services Provided</h2>

                                        <Row>
                                            <h4>Consulting</h4>
                                            <ul>
                                                <li>Stormwater Best Management Practices Compliance Inspections</li>
                                                <li>Construction Inspections</li>
                                                <li>Existing Site and Vegetation Assessment</li>
                                                <li>BMP and Value Consulting</li>
                                                <li>Permitting and Ordinance Review</li>
                                            </ul>
                                        </Row>
                                        <Row>
                                            <h4>Management</h4>
                                            <ul>
                                                <li>Stormwater BMP Compliance Construction and Maintenance</li>
                                                <li>Low Impact Landscape and Site Construction</li>
                                            </ul>
                                        </Row>
                                        <Row>
                                            <h4>Sustainable Design</h4>
                                            <ul>
                                                <li>Low Impact Landscape and Site Design</li>
                                                <li>Urban Design</li>
                                                <li>Green Infrastructure Design and Planning</li>
                                                <li>Community Focused Design</li>
                                            </ul>
                                        </Row>


                                    </Container>
                                </Fragment>
                            }
                            {matches.medium &&
                                <Fragment>
                                    <Container className="section-container">
                                        <h2 className="section-h2 center">Services Provided</h2>
                                        <Row >
                                            <Col>
                                                <h4>Consulting</h4>
                                                <ul>
                                                    <li>Stormwater Best Management Practices Compliance Inspections</li>
                                                    <li>Construction Inspections</li>
                                                    <li>Existing Site and Vegetation Assessment</li>
                                                    <li>BMP and Value Consulting</li>
                                                    <li>Permitting and Ordinance Review</li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <h4>Management</h4>
                                                <ul>
                                                    <li>Stormwater BMP Compliance Construction and Maintenance</li>
                                                    <li>Low Impact Landscape and Site Construction</li>
                                                </ul>
                                            </Col>
                                            <Col>
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

                            }
                        </Fragment>
                    )}
                </Media>
            </div>
        );
    }
}




export default Services;
