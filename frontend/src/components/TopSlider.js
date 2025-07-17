import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    // accessibility improvements
    accessibility: true,
    pauseOnHover: true,
  };

  const slides = [
    {
      id: 1,
   imageUrl:
        "https://calculator-data.com/wp-content/uploads/2025/05/Request-3-GR-Blog-Featured-Image-1536x797.webp",
   },
    {
      id: 2,
     imageUrl:
        "https://calculator-data.com/wp-content/uploads/2025/05/Request-3-GR-Blog-Featured-Image-1536x797.webp",
    },
    {
      id: 3,
      imageUrl:
        "https://calculator-data.com/wp-content/uploads/2025/05/Request-3-GR-Blog-Featured-Image-1536x797.webp",
    },
  ];

  return (
    <div
      style={{ marginBottom: "24px" }}
      role="region"
      aria-label="Top SEO services promotional slider"
      aria-live="polite"
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{ position: "relative" }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                color: "#fff",
                backgroundColor: "rgba(0, 123, 255, 0.7)",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "60%",
                zIndex: 2,
              }}
            >
              <h2 style={{ margin: 0, fontSize: "2rem" }}>{slide.title}</h2>
              <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSlider;
