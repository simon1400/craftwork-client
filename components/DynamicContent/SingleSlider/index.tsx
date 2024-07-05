import Slider from "react-slick";

import { SingleCarouselWrap } from "./styles";
import { Container } from "@mui/material";
import { SampleNextArrow, SamplePrevArrow } from "components/SlidersArrow";
import ContentSlider from "./ContentSlider";
import { FC } from "react";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



const SingleCarousel: FC<ISingleCarousel> = ({slides}) => {
  if(!slides?.length) {
    return null
  }
  return (
    <Container>
      <SingleCarouselWrap className="slider-container">    
        <Slider {...settings}>
          {slides.map((item: ISingleCarouselItem, idx: number) => <ContentSlider key={idx} content={item} />)}
        </Slider>
      </SingleCarouselWrap>
    </Container>
  )
}



export default SingleCarousel