import Carousel from "react-bootstrap/Carousel";
import hero1 from "./../assets/Carousel 1.png";
import hero2 from "./../assets/Carousel 2.png";
import hero3 from "./../assets/Carousel 3.png";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
