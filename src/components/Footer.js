import React, { Fragment } from "react";
import { Container } from 'react-bootstrap';
import { Mail, Facebook } from "react-feather";

const Footer = () => (
    <Fragment>
        <Container>
            <div className="col-md-4">
                <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                        <a href="/contact">
                            <Mail />
                            {/* <i className="far fa-envelope"></i> */}
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/ecoverde" target="_blank" rel="noopener noreferrer" >
                            {/* <i className="fab fa-facebook-f"></i> */}
                            <Facebook />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <span className="text-muted">EcoVerde Inc. 2019 </span>
                    </li>
                </ul>
            </div>
        </Container>
    </Fragment>
)

export default Footer;