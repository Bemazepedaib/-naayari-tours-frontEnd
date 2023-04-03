import Carousel from 'react-bootstrap/Carousel';
import Styles from '../../styles/elementStyles/CarouselNa.module.css'
import Image from 'next/image';

const img1 = "https://drive.google.com/uc?export=view&id=1gLFwQRLxqA6nVmjnAk3rNB0dUcVXKuHJ";
const img2 = "https://drive.google.com/uc?export=view&id=1YOTphLVm2fxmKHhg9EmXPCgEUGEqhxAK";
const img3 = "https://drive.google.com/uc?export=view&id=1w1uFRxiGowiGjYOu-OAu-foF9OmtMUdk";
function CarouselNa() {
  return (
    <Carousel fade className={Styles.carouselContainer}>
      <Carousel.Item className={Styles.carouselItem}>
        <Image  className={Styles.CarouselImage}
          width={2000}
          height={2000}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className={Styles.carouselCaption}>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={Styles.carouselItem}>
        <Image className={Styles.CarouselImage}
          width={2000}
          height={2000}
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption className={Styles.carouselCaption}>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={Styles.carouselItem}>
        <Image className={Styles.CarouselImage}
          width={2000}
          height={2000}
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption className={Styles.carouselCaption}>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselNa;