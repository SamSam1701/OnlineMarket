import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";
import { Row, Col } from "antd";
import {
  faGooglePlusSquare,
  faLinkedinIn,
  faSquareFacebook,
  faSquarePinterest,
  faSquareTwitter,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.footerMain}>
          <div className={styles.container}>
            <Row gutter={[24, 16]}>
              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerTopBox}>
                  <h3>Business Time</h3>
                  <ul className={styles.listTime}>
                    <li>Monday - Friday: 08.00am to 05.00pm</li>
                    <li>Saturday: 10.00am to 08.00pm</li>
                    <li>
                      Sunday: <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerTopBox}>
                  <h3>Newsletter</h3>
                  <form className={styles.newsletterBox}>
                    <div className={styles.formGroup}>
                      <input
                        class=""
                        type="email"
                        name="Email"
                        placeholder="Email Address*"
                      />
                      <FontAwesomeIcon
                        className={styles.iconEmail}
                        icon={faEnvelope}
                      />
                    </div>

                    <button className={styles.btnSubmit} type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerTopBox}>
                  <h3>Social Media</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className={styles.socialMediaIcon}>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faGooglePlusSquare} />
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faSquarePinterest} />
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.iconItem} to="#">
                        <FontAwesomeIcon icon={faSquareWhatsapp} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

            <hr className={styles.line} />

            <Row gutter={[24, 16]}>
              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerWidget}>
                  <h4>About Freshshop</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </Col>
              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerLink}>
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        Customer Service
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        Our Sitemap
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.linkInfor} to="/">
                        Delivery Information
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={8} md={24} sm={24}>
                <div className={styles.footerLinkContact}>
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          className={styles.contactIcon}
                          icon={faLocationDot}
                        />{" "}
                        Address: Michael I. Days 3756 <br />
                        Preston Street Wichita,
                        <br /> KS 67213{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          className={styles.contactIcon}
                          icon={faPhone}
                        />{" "}
                        Phone: <a href="tel:+1-888705770">+84 3345 1354 76</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          className={styles.contactIcon}
                          icon={faEnvelope}
                        />{" "}
                        Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p className={styles.footerCompany}>
          All Rights Reserved. &copy; 2018 ThewayShop Design By : html design
        </p>
      </div>
    </div>
  );
}

export default Footer;
