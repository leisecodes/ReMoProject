import React, { useRef } from "react";
import "./styles.css";
import goalImg from "../../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";

export default function ScrollBar() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
      {
        id: 1,
        src: require('../../../images/BookCovers/Lifeling.jpg'),
        link:'/books/info'
      },
      {
        id: 2,
        src: require('../../../images/BookCovers/Thirst.jpg'),
        link:'/books/info'
      },
      {
        id: 3,
        src: require('../../../images/BookCovers/Life and Crimes of Hoodie Rosen.jpg'),
        link:'/books/info'
      },
      {
        id: 4,
        src: require('../../../images/BookCovers/Voices of the People.jpg'),
        link:'/books/info'
      },
      {
        id: 5,
        src: require('../../../images/BookCovers/Wild Ride.jpg'),
        link:'/books/info'
      },
      {
        id: 6,
        src: require('../../../images/BookCovers/Troublemaker.jpg'),
        link:'/books/info'
      }
    ];


  return (
    <div className="ScrollBar">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
      </button>
      <div className="images-container" ref={sliderRef}>
        {images.map((image) => {
                return (
                    <Link to = {image?.link}>
                        <img
                            className="image"
                            alt="sliderImage"
                            key={image?.id}
                            src={image?.src}
                           />
                    </Link>
                );
        })}
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
      </button>
    </div>
  );
}