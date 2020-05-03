import React, { Fragment } from 'react';
import { Image, Container } from "react-bootstrap";
import { Consumer, } from "../providers/Provider";



function Landing() {
    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container className="center">
                    <Image src={value.landingLogo}  fluid />
                    <Image src={value.landingProjectImage}  fluid />
                    </Container>
                </Fragment>
            )}
        </Consumer>

    );
}

export default Landing;
