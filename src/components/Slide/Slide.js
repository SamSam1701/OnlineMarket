import SlideStyle from "./Slide.module.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";


function Slide() {
  const ref = useRef();

  const contentStyle = {
    height: "100% vh",
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
 
  return (
    <div className={SlideStyle.slide}>

      <Carousel
        autoplay
        dots={true}
        dotPosition="bottom"
        pauseOnDotsHover={true}
        pauseOnHover={true}
        effect="scrollx"
        ref={ref}
      >
        <div className={SlideStyle.slideItems}>
          <img
            style={contentStyle}
            src={require("../../assets/images/banner-01.jpg")}
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/banner-02.jpg")}
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/banner-03.jpg")}
            alt=""
          />
        </div>

      </Carousel>
      <div className={SlideStyle.overlayBackground}>
      </div>

      <div className={SlideStyle.container}>
        <div>
          <h1>
            <strong>
              Welcome To <br /> Freshshop
            </strong>
          </h1>
          <div>
            <p>
             Trải nghiệm bữa ăn sạch{" "}
              tươi ngon giàu dinh dưỡng.
            </p>

            <div className={SlideStyle.Shopbtn}>
                <Link style={{color:'white', margin: 10}} to="/shop">
                  Mua Ngay
                           </Link>
            </div>

          </div>
        </div>
      </div>
      

      <div className={SlideStyle.ControlSlide}>
        <Button
          className={SlideStyle.left}
          onClick={() => {
            ref.current.prev();
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </Button>

        <Button
          style={{margin: 10}}
          className={SlideStyle.right}
          onClick={() => {
            ref.current.next();
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </Button>
      </div>
    </div>
  );
}

export default Slide;
