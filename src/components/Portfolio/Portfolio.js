import React, { Fragment } from 'react';
import PortfolioProject_1 from "./PortfolioProject_1";
import PortfolioProject_2 from "./PortfolioProject_2";
import PortfolioProject_3 from "./PortfolioProject_3";
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    return (
        <Fragment>
            <Container>
                <Row >
                    <Col xs={6} md={4}>
                        <PortfolioProject_1 />
                    </Col>
                    <Col xs={6} md={4}>
                        <PortfolioProject_2 />
                    </Col>
                    <Col xs={6} md={4}>
                        <PortfolioProject_3 />
                    </Col>

                </Row>
            </Container>
        </Fragment>
    );
}

export default Portfolio;
