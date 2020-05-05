import React from "react";

import EcoVerdeLandingLogo from "../static/EcoVerdeLandingLogo.png"
// services/projects images
import Gateway_FletcherPlace from "../static/portfolio_images/FletcherPlaceGateway/Gateway_FletcherPlace.jpg"
import Gateway_Spring from "../static/portfolio_images/FletcherPlaceGateway/Gateway_Spring.jpg"
import Gateway_NW from "../static/portfolio_images/FletcherPlaceGateway/Gateway_NW.jpg"

import IdleConceptArt from "../static/portfolio_images/TheIdle/concept_art.jpg"
import IdleFinishedFromSouth from "../static/portfolio_images/TheIdle/finished.jpg"
import IdleWorkers from "../static/portfolio_images/TheIdle/workers.jpg"
import IdleSeats from "../static/portfolio_images/TheIdle/seat_view.jpg"

import KingDoughPizzaPatio1 from "../static/portfolio_images/KingDoughPizza/finished_patio.jpg"
import KingDoughPizzaPatio2 from "../static/portfolio_images/KingDoughPizza/patio.jpg"
import KingDoughPizzaMural from "../static/portfolio_images/KingDoughPizza/street_view.jpg"

import ResidentialFence1 from "../static/portfolio_images/EnvironmentalManagement/residential_fence1.jpg"
import ResidentialFence2 from "../static/portfolio_images/EnvironmentalManagement/residential_fence2.jpg"

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
        portfolio_1_title: "Community Development",
        portfolio_1_subtitle_1: "Fletcher Place Gateway",
        portfolio_1_body_1: "The Fletcher Place Gateway was created to create a sense of identity and place for the Fletcher Place Neighborhood near downtown Indianapolis.",
        portfolio_1_subtitle_2: "Fletcher Place Gateway",
        portfolio_1_body_2: "The Fletcher Place Gateway was created to create a sense of identity and place for the Fletcher Place Neighborhood near downtown Indianapolis.",
        portfolio_1_image_main: Gateway_FletcherPlace,
        portfolio_1_image_a: Gateway_FletcherPlace,
        portfolio_1_image_b: Gateway_Spring,
        portfolio_1_image_c: Gateway_NW,

        portfolio_1_image_d: IdleConceptArt,
        portfolio_1_image_e: IdleFinishedFromSouth,
        portfolio_1_image_f: IdleWorkers,
        portfolio_1_image_g: IdleSeats,
        
        portfolio_2_title: "Commercial Development",
        portfolio_2_subtitle_1: "King Dough Pizza Indianapolis, IN",
        portfolio_2_body_1: "Sustainable site landscape design with native plantings and repurposed materials.",
        portfolio_2_image_main: KingDoughPizzaPatio1,
        portfolio_2_image_a: KingDoughPizzaPatio1,
        portfolio_2_image_b: KingDoughPizzaPatio2,
        portfolio_2_image_c: KingDoughPizzaMural,


        portfolio_3_title: "Environmental Management",
        portfolio_3_subtitle_1: "",
        portfolio_3_body_1: "Storm Water Pollution Prevention Plan compliance inspections and management. We proactively keep our clients SWPPP compliant.",
        portfolio_3_image_main: ResidentialFence1,
        portfolio_3_image_a: ResidentialFence1,
        portfolio_3_image_b: ResidentialFence2,
        portfolio_3_image_c: IdleWorkers,


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