import React from "react";

function Carousel()
{
    return (
        <div>
        <div id="carouselExampleControls" class="carousel slide" dataRide="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/EBD/June/2x_EBD_Hero_1_PC._CB633803451_.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/UnrecHeros/Under1499/Under1499_Tallhero_3000x1200._CB636198468_.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" dataSlide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" dataSlide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </div>
    )
}

export default Carousel;