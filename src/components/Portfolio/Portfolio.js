import React, { Fragment } from 'react';
import Media from 'react-media';
import PortfolioProject1 from "./PortfolioProject1";
import PortfolioProject2 from "./PortfolioProject2";
import PortfolioProject3 from "./PortfolioProject3";
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
                                            <PortfolioProject1 />
                                        </Row>
                                        <Row>
                                            <PortfolioProject2 />
                                        </Row>
                                        <Row>
                                            <PortfolioProject3 />

                                        </Row>
                                    </Container>
                                </Fragment>
                            }
                            {matches.medium &&
                                <Fragment>
                                    <Container id="portfolio-section">
                                        <Row >
                                            <Col xs={6} md={4}>
                                                <PortfolioProject1 />
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <PortfolioProject2 />
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <PortfolioProject3 />
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
                                                <PortfolioProject1 />
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <PortfolioProject2 />
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <PortfolioProject3 />
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
