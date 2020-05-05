import React, { Fragment } from 'react';
import { Image, Container } from "react-bootstrap";
import { Consumer, } from "../providers/Provider";



function LandingLogo() {
    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container className="center">
                    <Image src={value.landingLogo}  fluid />
                    </Container>
                </Fragment>
            )}
        </Consumer>

    );
}

export default LandingLogo;
