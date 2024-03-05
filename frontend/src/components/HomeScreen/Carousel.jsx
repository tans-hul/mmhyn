import { useState } from 'react'
import Slider from 'react-slick'

import testimonials from '../../data/testimonials'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/css/Home Screen/Carousel.css'

function Carousel() {
  const [imgIndex, setImgIndex] = useState(0)

  const settings = {
    accessibility: true,
    arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    className: 'mx-9 h-[35rem]',
    dotsClass: 'slick-dots',
    beforeChange: (_, next) => setImgIndex(next),
  }

  return (
    <div className="App min-h-screen">
      <Slider {...settings} variableWidth variableHeight>
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`slide ${imgIndex === idx ? 'activeSlide shadow-xl' : 'shadow-lg'} mb-2 mt-12 h-fit bg-sm-primary`}
          >
            <div className="mt-8 flex flex-col items-center pb-3">
              <div className="activeSlideImage mb-3 h-44 w-40 rounded-xl p-1">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full"
                />
              </div>
              <div className="w-[25rem] items-center">
                <h1 className="text-center text-content-heading">
                  {testimonial.name}
                </h1>
                <div className="text-body text-secondary">
                  <h5 className="-mb-2">{testimonial.position}</h5>
                  <h6>{testimonial.company}</h6>
                </div>
                <div className="mt-7 px-10 text-center text-body text-secondary">
                  <p>{testimonial.testimony}</p>
                </div>
              </div>
            </div>
            <div className="h-2 bg-gradient"></div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
