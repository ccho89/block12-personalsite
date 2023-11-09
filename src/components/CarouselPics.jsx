import React from "react";
import Carousel from "react-material-ui-carousel";
import '../App.css'


const CarouselPics = () => {
  const items = [
    {
      image: "../../public/images/gopchang.jpg",
      caption: "Dinner With The Girls",
    },
    {
      image: "../../public/images/gala.jpg",
      caption: "Gala Night",
    },
    {
      image: "../../public/images/home.jpg",
      caption: "Showing Off My Korean Roots",
    },
    {
      image: "../../public/images/korea.jpg",
      caption: "Exploring Seoul With Friends",
    },
    {
      image: "../../public/images/lantern.jpg",
      caption: "Temple Exploring",
    },
    {
      image: "../../public/images/contact.jpg",
      caption: "Hiking in Korea",
    },
   
  ];
  return (
    <Carousel>
      {items.map((item, index) => (
        <div key={index}>
          <img className="carousel-img" src={item.image} alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};
export default CarouselPics
