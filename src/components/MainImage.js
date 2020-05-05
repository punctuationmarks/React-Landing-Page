import React, { Fragment } from 'react';
import { Image, Container } from "react-bootstrap";
import { Consumer, } from "../providers/Provider";



function MainImage() {
    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container id="main-image">
                    <Image src={value.landingProjectImage}  fluid />
                    </Container>
                </Fragment>
            )}
        </Consumer>

    );
}

export default MainImage;
