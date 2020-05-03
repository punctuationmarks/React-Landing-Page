import React, { Fragment, useState } from "react";
import { Button, Image, Container } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import { Consumer, } from "../../providers/Provider";

function PortfolioProject_2() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Consumer>
            {value => (
                <Fragment>
                    <Container>
                        <h2>{value.portfolio_2_title}</h2>
                        <Button variant="light" onClick={() => setModalShow(true)}>
                            <Image src={value.portfolio_2_image_main} fluid className="p-2 " />
                        </Button>
                    </Container>
                    <ModalComponent
                        show={modalShow}
                        title={value.portfolio_2_title}
                        subtitle={value.portfolio_2_subtitle}
                        body={value.portfolio_2_body}
                        image_a={value.portfolio_2_image_a}
                        image_b={value.portfolio_2_image_b}
                        image_c={value.portfolio_2_image_c}
                        onHide={() => setModalShow(false)}
                    />
                </Fragment>
            )}
        </Consumer>
    );
}



export default PortfolioProject_2;