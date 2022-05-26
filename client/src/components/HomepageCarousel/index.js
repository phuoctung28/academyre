import React from "react";
import Slider from "react-slick";
import { HpItem } from "../HomepageItem";

export function HpCarousel(props) {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
    ]
  };

  const data = props.data;

  return (
    <div>

      {/* {list.map((listData, index) =>{
        return(
          <div className = "font-semibold text-xl mb-16">
          {listData}
          <div className = "mt-4 font-normal text-base">
          <Slider {...settings}>
          {data.map((courseData, index) => {
            return (
              <HpItem
              key={index}
              img={courseData.img}
              courseName={courseData.name}
                  desc={courseData.description}
                  author={courseData.author}
                  ratings={courseData.ratings}
                  category = {courseData.category}
                  cost = {courseData.cost}
                  ></HpItem>
                  );
                })}
                </Slider>
                </div>
                </div>
                )
              })} */}
          <Slider {...settings}>
            {data.map((courseData, index) => {
              return (
                <HpItem
                key={index}
                img={courseData.img}
                courseName={courseData.name}
                desc={courseData.description}
                author={courseData.author}
                ratings={courseData.ratings}
                category = {courseData.category}
                cost = {courseData.cost}
                ></HpItem>
                );
              })}
          </Slider>
  </div>
  );
}
