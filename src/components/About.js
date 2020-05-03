
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Fragment>
            <Container id="about-section">
                <h2>About</h2>
                <p>EcoVerde, Ecoconsulting and Management Inc., provides sustainable, creative, low impact design, consulting and management solutions to our clients through focusing on three fundamental goals and objectives:</p>
                <h3>
                    We are Client-centric</h3>
                <p>
                    We pride ourselves on our client-centric approach to our work. What that mean? Our success hinges on client satisfaction. We aren’t happy and haven’t done our job unless our clients are happy.
</p>



                <h3>We are Pro Environment</h3>


                <p>As both stewards of the land and the environment, we are committed to protecting and minimizing the impact in the world which we work and live. Furthermore, we are committed to both leading and educating our clients on environmental stewardship, when necessary, through our extensive environmental experience.
</p>

                <h3>We believe in Value</h3>
                <p>We strive to value to our clients by providing cost effective solutions and ideas based on our creativity, thoughtfulness, resourcefulness, and experience.</p>

            </Container>
        </Fragment>
    )
}

export default About;