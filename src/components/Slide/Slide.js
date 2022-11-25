import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "antd";
import styles from "./Slide.module.scss";


import { Carousel, Button } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
    <div className={styles.slide}>

      <Carousel
        autoplay
        dots={true}
        dotPosition="bottom"
        pauseOnDotsHover={true}
        pauseOnHover={true}
        effect="scrollx"
        ref={ref}
      >
        <div className={styles.slideItems}>
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
      <div className={styles.overlayBackground}>
      </div>

      <div className={styles.container}>
        <div>
          <div>
            <h1>
              <strong>
                Welcome To <br /> Freshshop
              </strong>
            </h1>
            <p>
              See how your users experience your website in realtime or view{" "}
              <br /> trends to see any changes in performance over time.
            </p>

            <div className={styles.Shopbtn}>
                <Link style={{color:'white'}} to="/Shop">
                  Shop New
                           </Link>
            </div>

          </div>
        </div>
      </div>
      

      <div className={styles.ControlSlide}>
        <Button
          className={styles.left}
          onClick={() => {
            ref.current.prev();
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </Button>

        <Button
          className={styles.right}
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
