import Slider from "react-slick";

import { CarouselWrap } from "./styles";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import { SampleNextArrow, SamplePrevArrow } from "components/SlidersArrow";
import { FC } from "react";

const APP_API = process.env.APP_API

const Carousel: FC<ICarousel> = ({items}) => {

  if(!items?.length) {
    return null
  }

  const settings = {
    dots: false,
    infinite: items.length !== 1,
    speed: 500,
    slidesToShow: items.length <= 4 ? items.length : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  

  return (
    <Container>
      <CarouselWrap className="slider-container">    
        <Slider {...settings}>
          {items.map((item: ICarouselItem, idx: number) => <div key={idx} className="slider-item-c">
            <div className={'image-wrap'}>
              <Image src={APP_API+item.image.data.attributes.url} fill alt="slider" />
            </div>
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="body2" component={'div'} dangerouslySetInnerHTML={{__html: item.content}}/>
          </div>)}
        </Slider>
      </CarouselWrap>
    </Container>
  )
}



export default Carousel