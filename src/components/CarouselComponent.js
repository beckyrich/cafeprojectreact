import React, { useState } from 'react';
import {  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: "./assets/images/home/barista.jpg",
        altText: "Barista",
        caption: "Barista",
        captext: "Brewing up something good!"

    },
    {
        src: "./assets/images/home/inside.jpg",
        altText: "Inside Seating",
        caption: "Inside Seating",
        captext: "Enjoy our spacious inside seating!"
    },
    {
        src: "./assets/images/home/outsided.jpg",
        altText: "Outside Seating",
        caption: "Outside Seating",
        captext: "Get some fresh air on our patio!"
    },
    {
        src: "./assets/images/home/icedlatte.jpg",
        altText: "Iced Latte",
        caption: "Refresh with an iced drink!"
    }
];

export const HomeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="d-block w-100"/>
          <CarouselCaption captionText={item.captext} captionHeader={item.caption} className="textTeal" />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  };

  

