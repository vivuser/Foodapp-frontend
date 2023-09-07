import React, { useState } from "react";
import Slider from "react-slick";
import { IMG_CDN_URL } from "../components/Constants";

const SimpleSlider = ({ latestOffer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {/* {!latestOffer ? (
          <div className="font-serif text-2xl mt-10 pb-5">
            No Active Offers
          </div>
        ) : ( */}{
          latestOffer.map((offer, index) => (
            <div key={offer.id}>
              <img
                src={IMG_CDN_URL + offer.imageId}
                alt={`Offer ${index}`}
                className="w-56 h-56"
              />
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default SimpleSlider;
