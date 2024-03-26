import React from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Slider() {
  const slideImage = [
    {
      url: "https://www.ngpvan.com/wp-content/uploads/2023/04/1200x628.bloghead.photo_.png",
      caption: "First Slide",
    },
    {
      url: "https://www.qs.com/wp-content/uploads/2020/01/volunteering.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://cdn.aarp.net/content/dam/aarp/volunteer/2022/1140x655-create-the-good-volunteer.jpg",
      caption: "First Slide",
    },
    {
      url: "https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/volunteers-picking-up-trash.jpg?sc_lang=en&la=en&h=370&w=660&hash=4C702A2CDE24FFCF508F986BEFF97F98",
      caption: "Third Slide",
    },
    {
      url: "https://taking.care/cdn/shop/articles/blog-hero-elderly-volunteering.jpg?v=1679567010",
      caption: "Fourth Slide",
    },
    {
      url: "https://do512family.com/wp-content/uploads/2022/07/zGf-nwoK-1440x780.png",
      caption: "Fifth slide",
    },
  ];

  const divStyle = {
    height: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#000",
  };

  return (
    <div
      className="slide-container"
      style={{ margin: "40px 0px 15px 0px", borderRadius: "10px" }}
    >
      <Fade>
        {slideImage.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
