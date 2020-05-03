import React from "react";

import EcoVerdeLandingLogo from "../static/EcoVerdeLandingLogo.png"
// services/projects images
import Gateway_FletcherPlace from "../static/portfolio_images/Fletcher_Place_Gateway/Gateway_FletcherPlace.jpg"
import Gateway_Spring from "../static/portfolio_images/Fletcher_Place_Gateway/Gateway_Spring.jpg"
import Gateway_NW from "../static/portfolio_images/Fletcher_Place_Gateway/Gateway_NW.jpg"

// Set Up The Initial Context
const BusinessContext = React.createContext();






// Create the provider using a traditional React.Component class
class Provider extends React.Component {
    state = {
        businessName: "EcoVerde Inc",
        email: "tattoosbyboat@email.com",
        city: "Indianapolis",
        state: "IN",
        country: "United States",
        bio: "Lorem ispum",
        services: "Lorem ipsum dolor",

        landingLogo: EcoVerdeLandingLogo,
        landingProjectImage: Gateway_FletcherPlace,
        portfolio_1_title: "Sustainable Community Development",
        portfolio_1_subtitle: "Fletcher Place Gateway",
        portfolio_1_body: "The Fletcher Place Gateway was created to create a sense of identity and place for the Fletcher Place Neighborhood near downtown Indianapolis.",
        portfolio_1_image_main: Gateway_FletcherPlace,
        portfolio_1_image_a: Gateway_FletcherPlace,
        portfolio_1_image_b: Gateway_Spring,
        portfolio_1_image_c: Gateway_NW,

        portfolio_2_title: "Lorem ipsum dolor",
        portfolio_2_subtitle: "Lorem ipsum dolor",
        portfolio_2_body: "Lorem ipsum dolor",
        portfolio_2_image_main: Gateway_FletcherPlace,
        portfolio_2_image_a: Gateway_FletcherPlace,
        portfolio_2_image_b: Gateway_Spring,
        portfolio_2_image_c: Gateway_NW,


        portfolio_3_title: "Lorem ipsum dolor",
        portfolio_3_subtitle: "Lorem ipsum dolor",
        portfolio_3_body: "Lorem ipsum dolor",
        portfolio_3_image_main: Gateway_FletcherPlace,
        portfolio_3_image_a: Gateway_FletcherPlace,
        portfolio_3_image_b: Gateway_Spring,
        portfolio_3_image_c: Gateway_NW,


        updateBusiness: (business) => this.updateBusiness(business),
    };

    updateBusiness = (business) => {
        this.setState({ ...business, });
    }

    render() {
        return (
            <BusinessContext.Provider value={this.state}>
                {this.props.children}
            </BusinessContext.Provider>
        )
    }
}

// Create an exportable consumer that can be injected into components
export const Consumer = BusinessContext.Consumer;

export default Provider;