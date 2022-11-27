import styles from "../home/Home.module.scss";
import Shopstyles from "./Shop.module.scss";
import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import Producttype from "../../components/Producttype/Producttype";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";
import { Select,Breadcrumb } from 'antd';


function Shop() {

    return (
        <div className="Shop">
            <Subnav />
            <Header />

            {/* BreadScrumb */}
            <div className={Shopstyles.allTitleBox}>
                <div className={Shopstyles.container}>
                    <Row>
                        <Col lg={24}>
                            <h2>CỬA HÀNG</h2>
                            <div className={Shopstyles.breadcrumb}>

                                <Breadcrumb>
                                    <Breadcrumb.Item> <Link to="/" style={{color:'#fff', fontSize:'18px'}}>Trang chủ</Link></Breadcrumb.Item> 
                                    <Breadcrumb.Item  style={{fontSize:'18px'}}>Cửa hàng</Breadcrumb.Item>
                                </Breadcrumb>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
    
            <Row gutter={[16, 16]}>
                {/* cart */}
              <Col style={{backgroundColor:'#e5d6aa'}} lg={6}>
              <Category/>
              </Col>
    
              {/* content */}
                <Col lg={14}>
                   

<div className={styles.sort} style={{padding:'30px 0 10px 20px', borderBottom:'1px solid #ccc'}}>
        <strong style={{margin:'20px'}}>LỌC THEO</strong>
                <Select
      defaultValue="Bán chạy"
      style={{ width: 120 }}
      options={[
        {
          value: 'Best_Selling',
          label: 'Bán chạy',
        },
        {
          value: 'Popularity',
          label: 'Giảm giá',
        },
        {
          value: 'HighToLow',
          label: 'Cao -> Thấp',
        },
        {
          value: 'LowToHeigh',
          label: 'Thấp -> Cao',
        },
      ]}
    />

</div>

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

                <Col lg={4}>
                    <Producttype/>
                </Col>
    
                </Row>
    
            <Footer />
        </div>
      );
}

export default Shop;
