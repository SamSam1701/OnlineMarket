import HomeStyle from "../home/Home.module.scss";
import ShopStyle from "./Shop.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import Producttype from "../../components/Producttype/Producttype";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";
import { Select, Breadcrumb } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";

function Shop() {
  return (
    <div className="Shop">
      <Subnav />
      <Header />

      {/* BreadScrumb */}
      <div className={ShopStyle.allTitleBox}>
        <div className={ShopStyle.container}>
          <Row>
            <Col lg={24}>
              <h2>CỬA HÀNG</h2>
              <div className={ShopStyle.breadcrumb}>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    {" "}
                    <Link to="/" style={{ color: "#fff", fontSize: "18px" }}>
                      Trang chủ
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item style={{ fontSize: "18px" }}>
                    Cửa hàng
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {/* cart */}
        <Col style={{ backgroundColor: "#e5d6aa" }} lg={6}>
          <Category />
        </Col>

        {/* content */}
        <Col lg={14}>
          <div
            className={HomeStyle.sort}
            style={{
              padding: "30px 0 10px 20px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <strong style={{ margin: "20px" }}>LỌC THEO</strong>
            <Select
              defaultValue="Bán chạy"
              style={{ width: 120 }}
              options={[
                {
                  value: "Best_Selling",
                  label: "Bán chạy",
                },
                {
                  value: "Popularity",
                  label: "Giảm giá",
                },
                {
                  value: "HighToLow",
                  label: "Cao -> Thấp",
                },
                {
                  value: "LowToHeigh",
                  label: "Thấp -> Cao",
                },
              ]}
            />
          </div>

          <div className={HomeStyle.bodyContainer}>
            <div className={HomeStyle.categoriesShop}>
              <div className={HomeStyle.container}>
                <Row gutter={[24, 16]}>
                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_01.jpg")}
                        alt=""
                      />

                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                          <Link to="/productdetail"></Link>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_02.jpg")}
                        alt=""
                      />

                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                        
                          <FontAwesomeIcon icon={faEye}><Link to="/productdetail"></Link></FontAwesomeIcon>
                        </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_03.jpg")}
                        alt=""
                      />
                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                   
                          <FontAwesomeIcon icon={faEye}><Link to="/productdetail"></Link></FontAwesomeIcon>
                        </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_01.jpg")}
                        alt=""
                      />

                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                        
                          <FontAwesomeIcon icon={faEye}><Link to="/productdetail"></Link></FontAwesomeIcon>
                        </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_01.jpg")}
                        alt=""
                      />

                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                        
                          <FontAwesomeIcon icon={faEye}><Link to="/productdetail"></Link></FontAwesomeIcon>
                        </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>

                  <Col lg={8} md={8} sm={24} xs={24}>
                    <div className={HomeStyle.shopCatBox}>
                      <img
                        src={require("../../assets/images/categories_img_01.jpg")}
                        alt=""
                      />
                      <div className={ShopStyle.btnGroup}>
                        <div className={ShopStyle.iconView}>
                        
                          <FontAwesomeIcon icon={faEye}><Link to="/productdetail"></Link></FontAwesomeIcon>
                        </div>

                        <div className={ShopStyle.iconAddCart}>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                      </div>

                      <h5
                        style={{
                          margin: "10px 0",
                          color: "#b0b435",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        <del style={{ color: "black", fontSize: "12px" }}>
                          19.000đ
                        </del>{" "}
                        12.0000đ
                      </h5>
                      <strong style={{ lineHeight: "0" }}>
                        <Link
                          style={{
                            color: "#C13016",
                            textAlign: "left",
                            fontSize: "16px",
                          }}
                          to="/productdetail"
                        >
                          {" "}
                          <span style={{ color: "black" }}>
                            Tên sản phẩm:
                          </span>{" "}
                          Tỏi
                        </Link>
                      </strong>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <Producttype />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default Shop;
