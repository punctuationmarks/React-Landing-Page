import React, { Fragment, useState } from "react";
import { Button, Image, Container } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import { Consumer, } from "../../providers/Provider";

function PortfolioProject_3() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container className="portfolio-projects">
                        <h2>{value.portfolio_3_title}</h2>
                        <Button variant="light" onClick={() => setModalShow(true)}>
                            <Image src={value.portfolio_3_image_main} fluid className="p-2 " />
                        </Button>
                    </Container>
                    <ModalComponent
                        show={modalShow}
                        title={value.portfolio_3_title}
                        subtitle_1={value.portfolio_3_subtitle_1}
                        body_1={value.portfolio_3_body_1}
                        image_a={value.portfolio_3_image_a}
                        image_b={value.portfolio_3_image_b}
                        image_c={value.portfolio_3_image_c}
                        onHide={() => setModalShow(false)}
                    />
                </Fragment>
            )}
        </Consumer>
    );
}



export default PortfolioProject_3;