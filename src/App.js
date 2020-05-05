import React, { Fragment } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Media from 'react-media';
import Navbar from "./components/Navbar";
import LandingLogo from "./components/LandingLogo";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import MainImage from "./components/MainImage";

import './App.css';


class App extends React.Component {
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
              {matches.small && <Fragment>
                <Navbar />
                <LandingLogo />
                <MainImage />
                <Services />
                <Portfolio />
                <About />
                <Footer />
              </Fragment>}
              {matches.medium && <Fragment>
                <Navbar />
                <LandingLogo />
                <MainImage />
                <Services />
                <Portfolio />
                <About />
                <Footer />
              </Fragment>}
              {matches.large && <Fragment>
                <Navbar />

                <Row>

                  <Col>
                    <MainImage />
                  </Col>
                  <Col>
                    <LandingLogo />
                  </Col>
                </Row>

                <Portfolio />
                <Services />
                <About />
                <Footer />
              </Fragment>
              }
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

export default App;
