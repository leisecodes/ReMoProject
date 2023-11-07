import React, { useRef } from "react";
import "./styles.css";
import goalImg from "../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";

export default function ScrollBar() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
      {
        id: 1,
        url: "https://lh6.googleusercontent.com/1LCwpF6ALgFrqc1iPCiQEcA_iQF-146JDwq4-Uhq_iYnTpVT2Pllax-WfTlO5ONA68SRipzkdT1-NqbmMiwebAo3GiCBWlCoO3-fSVd32L5c0ez_5wnP57a3G5uviWJUAg=w1280"
      },
      {
        id: 2,
        url: "https://lh4.googleusercontent.com/x-PjqtmSbJDt5AdAyE8rfEqNwUf1TnwLWAPmTI1kev7T7pYp2MZ-Oc6rK9SEXyI06QGciu4czAIMYcBncuJTrP3-ENpOLJiBTqYEshv7Fix2LhyfLp8sgUlPOcrMRvq4_g=w1280"
      },
      {
        id: 3,
        url: "https://lh5.googleusercontent.com/XJl0xjjjYiKZh0WFatymxih0YIQy6tNdT3bQGorGX864tf8pisc0f93LqyJpZ4kOs_DPrewfnOKq-AbQ4VaLWVeUBb4fGDZsKZSRrBnSKDwa5ex9fmjqz9It_Ne0VDftsQ=w1280"
      },
      {
        id: 4,
        url: "https://lh5.googleusercontent.com/CuZGzAlQjns-A8vM90s2-tcqblz7sqqJpb21OXIuMX4oU4KP8Jm1NIFu91CcqvjphmyNkY6OOaVxElUdCkseomnJGulTJOeAut_KZk8VelvPPDhQfQ0DIpUyp2SS69D-Lw=w1280"
      },
      {
        id: 5,
        url: "https://lh6.googleusercontent.com/g0E6M3w7mhtjP4d74LXd9uznSBZA0zZ5oPWLhc2FjKipM04RU7ExAjuUFtLupn7kQE3mYaHORzsDdqVfvkl7DbwgDx4aFeXNqC2cY3D2TQkbNHMd3IHHxjKuYw34PvOT-A=w1280"
      },
      {
        id: 6,
        url: "https://lh4.googleusercontent.com/p5H9n9CMLCfM6NxdbDcN9CEpf7I_SfxnlB4Zqd4qEUjb-yWNhzqgvuxXeVawykUTRmSgayZeyFmAevabh8CKJdH3-TDH7CiOxqjauUNE--PDmUs1NA4DyafHk0FxNJziTw=w1280"
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
            <Link to = '/books'>
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
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