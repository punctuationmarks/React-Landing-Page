import React, { Fragment, useState } from "react";
import { Button, Image, Container } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import { Consumer, } from "../../providers/Provider";


function PortfolioProject_1() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container className="portfolio-projects">
                        <h2>{value.portfolio_1_title}</h2>
                        <Button variant="light" onClick={() => setModalShow(true)}>
                            <Image src={value.portfolio_1_image_main} fluid className="p-2 " />
                        </Button>
                    </Container>
                    <ModalComponent
                        show={modalShow}
                        title={value.portfolio_1_title}
                        subtitle_1={value.portfolio_1_subtitle_1}
                        body_1={value.portfolio_1_body_1}
                        subtitle_2={value.portfolio_1_subtitle_2}
                        body_2={value.portfolio_1_body_2}
                        image_a={value.portfolio_1_image_a}
                        image_b={value.portfolio_1_image_b}
                        image_c={value.portfolio_1_image_c}

                        image_d={value.portfolio_1_image_d}
                        image_e={value.portfolio_1_image_e}
                        image_f={value.portfolio_1_image_f}
                        image_g={value.portfolio_1_image_g}
                        onHide={() => setModalShow(false)}
                    />
                </Fragment>
            )}
        </Consumer>
    );
}



export default PortfolioProject_1;