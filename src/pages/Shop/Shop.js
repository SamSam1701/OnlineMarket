import styles from "../home/Home.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";

function Shop() {
    return (
        <div className="Shop">
            <Subnav />
            <Header />
    
            <Row gutter={[16, 16]}>
                {/* cart */}
              <Col style={{backgroundColor:'#e5d6aa'}} lg={6}>
              <Category/>
              </Col>
    
              {/* content */}
                <Col lg={14}>
                <div className={styles.bodyContainer}>
    
            <div className={styles.categoriesShop}>
                <div className={styles.container}>
                    <Row gutter={[24, 16]}>
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
                            <div className={styles.shopCatBox}>
                                <img
                                src={require("../../assets/images/categories_img_01.jpg")}
                                alt=""
                                />
                            <button className={styles.btnCategory}>
                            <Link  to="/productdetail">
                            Lorem ipsum dolor
                            </Link>
                            </button>
                            </div>
                        </Col>
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
                        <div className={styles.shopCatBox}>
                        <img
                            src={require("../../assets/images/categories_img_02.jpg")}
                            alt=""
                            />
                            <button className={styles.btnCategory}>
                            <Link  to="/productdetail">
                            Lorem ipsum dolor
                            </Link>
                            </button>
                        </div>
                        </Col>
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
                        <div className={styles.shopCatBox}>
                        <img
                            src={require("../../assets/images/categories_img_03.jpg")}
                            alt=""
                            />
    
                            <button className={styles.btnCategory}>
                            <Link  to="/productdetail">
                            Lorem ipsum dolor
                            </Link>
                            </button>
                        </div>
                        </Col>
    
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
                            <div className={styles.shopCatBox}>
                                <img
                                src={require("../../assets/images/categories_img_01.jpg")}
                                alt=""
                                />
                            <button className={styles.btnCategory}>
                            <Link  to="/productdetail">
                            Lorem ipsum dolor
                            </Link>
                            </button>
                            </div>
                        </Col>
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
                            <div className={styles.shopCatBox}>
                                <img
                                src={require("../../assets/images/categories_img_01.jpg")}
                                alt=""
                                />
                            <button className={styles.btnCategory}>
                            <Link  to="/productdetail">
                            Lorem ipsum dolor
                            </Link>
                            </button>
                            </div>
                        </Col>
    
                        <Col lg={8} md={8} sm ={24} xs={24} >
    
                            <div className={styles.shopCatBox}>
                                <img src={require("../../assets/images/categories_img_01.jpg")} alt="" />
                                <button className={styles.btnCategory}><Link  to="/productdetail">Lorem ipsum dolor</Link></button>
                            </div>
    
                        </Col>
    
                    </Row>
                </div>
          </div>
    
    
        </div>
                </Col>

                <Col style={{backgroundColor:'#eac388'}} lg={4}>
                    Đây là category
                </Col>
    
                </Row>
    
            <Footer />
        </div>
      );
}

export default Shop;
