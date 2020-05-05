import React, { Fragment } from 'react';
import Media from 'react-media';
import PortfolioProject_1 from "./PortfolioProject_1";
import PortfolioProject_2 from "./PortfolioProject_2";
import PortfolioProject_3 from "./PortfolioProject_3";
import { Container, Row, Col } from 'react-bootstrap';

class Portfolio extends React.Component {
    render() {

        return (
            <div>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small &&
                                <Fragment>
                                    <Container className="section-container">
                                        <Row >
                                            <PortfolioProject_1 />
                                        </Row>
                                        <Row>
                                            <PortfolioProject_2 />
                                        </Row>
                                        <Row>
                                            <PortfolioProject_3 />

                                        </Row>
                                    </Container>
                                </Fragment>
                            }
                            {matches.medium &&
                                <Fragment>
                                    <Container id="portfolio-section">
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
                            }
                            {matches.large &&
                                <Fragment>
                                    <Container id="portfolio-section">
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
                            }
                        </Fragment>
                    )}
                </Media>
            </div>
        );
    }
}

export default Portfolio;
