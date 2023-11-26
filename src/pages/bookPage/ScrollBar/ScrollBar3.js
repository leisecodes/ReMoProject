import React, { useRef } from "react";
import "./styles.css";
import goalImg from "../../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";
import {BookValues} from "../../BookValues"

export default function ScrollBar() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

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
        {BookValues.map((image) => {
            if (image?.read == 1)
                return (
                    <Link to = {image?.link + '/info'}>
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