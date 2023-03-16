import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const images: string[] = [
  "https://picsum.photos/800/400",
  "https://picsum.photos/800/401",
  "https://picsum.photos/800/402",
];

const styles: { [key: string]: React.CSSProperties } = {
  carousel: {
    width: "50%",
    margin: "auto",
    height: "500px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel className="carousel-root" sx={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          style={styles.image}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
