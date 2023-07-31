import React from "react";
import { styled } from "@mui/system";
import _ from "lodash";
import sx from "../styles/Swiper.module.scss";
import Carousel from "../utils/slider/Carousel";

//?Styled components
const Slider = styled("div")`
  width: 100%;
  height: 100%;
  overflow: visible;
  user-select: none;
  display: grid;
  place-items: center;
`;

const SlideContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  gap: 10px;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const PageNavBar = styled("div")`
  position: absolute;
  bottom: -10%;
  width: 30%;
  height: 5px;
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: 10px;
  overflow: hidden;
`;

const PageNavBarElement = React.memo(({ length, activeAt }) => {
  return (
    <>
      {_.times(length, (index) => (
        <div
          style={{
            width: `${100 / length}%`,
          }}
          className={`${sx.pageNavBarElement} ${
            activeAt === index + 1 ? sx.onActive : ""
          }`}
          key={index}
        ></div>
      ))}
    </>
  );
});

export default React.memo(function ImageSwiperSlide({ images }) {
  const slideRef = React.useRef(null);

  React.useEffect(() => {
    const carousel = new Carousel(slideRef.current);
    carousel.update();
  }, []);

  return (
    <>
      <Slider>
        <SlideContainer ref={slideRef}>
          {images.map((image, index) => (
            <img
              className={`${sx.gallaryItem} ${sx[`gallaryItem${index + 1}`]}`}
              src={image}
              alt=""
              key={index}
              onClick={() => {}}
            />
          ))}
          <PageNavBar>
            <PageNavBarElement length={images.length} activeAt={2} />
          </PageNavBar>
        </SlideContainer>
      </Slider>
    </>
  );
});
