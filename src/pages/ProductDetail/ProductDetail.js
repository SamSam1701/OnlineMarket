import HomeStyle from "../home/Home.module.scss";
import ProductDetailStyle from "./ProductDetail.module.scss";
import ShopStyle from "../Shop/Shop.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCartPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "antd"
import { useRef } from "react";

import { InputNumber, Breadcrumb, Input, Row, Col, Button } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import React from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function ProductDetail() {
  const ref = useRef();
  const [display_market, setDisplay] = useState(true)
  const [display_button, setdisplayButton] = useState(false)
  const productItems = [
    {
      id: 1,
      name: "Rau muống",
      oldPrice: 19000,
      newPrice: 15000,
      profilePicture: require("../../assets/images/categories_img_01.jpg"),
    },
    {
      id: 2,
      name: "Cà chua",
      oldPrice: 6000,
      newPrice: 3000,
      profilePicture: require("../../assets/images/categories_img_02.jpg"),
    },
    {
      id: 3,
      name: "Hành lá",
      oldPrice: 19000,
      newPrice: 15000,
      profilePicture: require("../../assets/images/categories_img_03.jpg"),
    },
  ];

  const comments = [
    {
      id: 1,
      desc: "Sản phẩm tuyệt vời, lần sau sẽ tiếp tục ủng hộ",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Shop quá tệ",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    }
  ]

  const [cmt, setCmt] = useState('')

  const curUser = {
    id: 0,
    desc: { cmt },
    name: "Jane Doe",
    userId: 2,
    profilePicture:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
  const render = () => {
    if (window.innerWidth < 992) {
      setDisplay(false);
      setdisplayButton(true);
    }
    else {
      setdisplayButton(false);
      setDisplay(true);
    }
  }
  const handleClick = () => {
    setDisplay(!display_market);
    console.log(display_market);
  };
  const [newItems, setNewItems] = useState([]);
  const handleClickAdd = () => {
    const items = JSON.parse(localStorage.getItem("items")) || null
    if (items) {
      const foundIndex = items.findIndex((i) => i.id === 11)
      if (foundIndex === -1) {
        items.push({ id: 11, title: 'Rau xanh', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' })
      } else {
        items[foundIndex].number += 1
      }
      localStorage.setItem("items", JSON.stringify(items))
      setNewItems(items)
    }
  }

  useEffect(() => {
    render();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", render)
  })
  const slider = useRef();
  return (
    <div className="product-detail">
      <Subnav />
      <Header />

      <div className={ShopStyle.allTitleBox}>
        <div className={ShopStyle.container}>
          <Row>
            <Col lg={24}>
              <h2>CHI TIẾT SẢN PHẨM</h2>
              <div className={ShopStyle.breadcrumb}>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    {" "}
                    <Link to="/" style={{ color: "#fff" }}>
                      Trang chủ
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {" "}
                    <Link
                      to="/shop"
                      style={{ color: "#fff" }}
                    >
                      Cửa hàng
                    </Link>{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item style={{}}>
                    Chi tiết sản phẩm
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {/* cart */}
        <Col style={{ display: display_button ? 'flex' : 'none', marginTop: 10 }} lg={24} md={24} sx={24} xs={24}>
          <Button
            className={ProductDetailStyle.btnHover}
            site='large'
            onClick={handleClick}
            style={{ margin: 'auto', backgroundColor: '#738276', width: 400 }}
            shape='round'>
            Giỏ Hàng <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 10 }} />
          </Button>
        </Col>
        <Col style={{ display: display_market ? 'list-item' : 'none', backgroundColor: "#e5d6aa" }} lg={6} md={24} sx={24} xs={24}>
          <Category newItems={newItems} />
        </Col>

        {/* content */}
        <Col lg={18} md={24} sx={24}>
          <div className={ProductDetailStyle.shopDetailBoxMain}>
            <div className={ProductDetailStyle.container}>
              <Row gutter={[40, 32]}>
                <Col xl={10} lg={10} md={12} sx={8} xs={24}>
                  <div className={ProductDetailStyle.carouselSlide}>
                    {/* <div className={ProductDetailStyle.carouselInner}>
                      <div
                        className={ProductDetailStyle.carouselItem + " " + ProductDetailStyle.active}
                      >
                        <img
                          src={require("../../assets/images/big-img-01.jpg")}
                          alt="first slide"
                        />
                      </div>

                      <div className={ProductDetailStyle.carouselItem}>
                        <img
                          src={require("../../assets/images/big-img-02.jpg")}
                          alt="Second slide"
                        />
                      </div>

                      <div className={ProductDetailStyle.carouselItem}>
                        <img
                          src={require("../../assets/images/big-img-03.jpg")}
                          alt="Third slide"
                        />
                      </div>
                    </div> */}
                    <Carousel
                      autoplay
                      dots={true}
                      dotPosition="bottom"
                      pauseOnDotsHover={true}
                      pauseOnHover={true}
                      effect="scrollx"
                      ref={ref => {
                        slider.current = ref;
                      }}
                    >
                      <div>
                        <img
                          className={ProductDetailStyle.carouselItem}
                          src={require("../../assets/images/big-img-01.jpg")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className={ProductDetailStyle.carouselItem}
                          src={require("../../assets/images/big-img-02.jpg")}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className={ProductDetailStyle.carouselItem}
                          src={require("../../assets/images/big-img-03.jpg")}
                          alt=""
                        />
                      </div>

                    </Carousel>

                    <span className={ProductDetailStyle.carouselControlPrev}>
                      <FontAwesomeIcon icon={faAngleLeft} onClick={e => {
                        slider.current.prev()
                      }} />
                      <span className="sr-only">Previous</span>
                    </span>

                    <span className={ProductDetailStyle.carouselControlNext}>
                      <FontAwesomeIcon icon={faAngleRight} onClick={e => {
                        slider.current.next()
                      }} />
                      <span className="sr-only">Next</span>
                    </span>

                    <ol className={ProductDetailStyle.carouselIndicators}>
                      <li
                        data-target="#carousel-example-1"
                        data-slide-to="0"
                        className={ProductDetailStyle.active}
                      >
                        <img
                          src={require("../../assets/images/smp-img-01.jpg")}
                          alt="pic1"
                        />
                      </li>

                      <li data-target="#carousel-example-1" data-slide-to="1">
                        <img
                          src={require("../../assets/images/smp-img-02.jpg")}
                          alt="pic2"
                        />
                      </li>

                      <li data-target="#carousel-example-1" data-slide-to="2">
                        <img
                          src={require("../../assets/images/smp-img-03.jpg")}
                          alt="pic3"
                        />
                      </li>
                    </ol>
                  </div>
                </Col>

                <Col xl={14} lg={14} md={12} sx={16} xs={24}>
                  <div className={ProductDetailStyle.productDetail}>
                    <h2>Rau Tươi Đà Lạt</h2>
                    <h5>
                      {" "}
                      <del>19.000đ</del> 15.000đ
                    </h5>
                    <p>
                      <span> Có hơn 20 sản phẩm / 8 Đã bán</span>
                    </p>
                    <h4>Mô Tả Ngắn:</h4>
                    <p>
                      Trái có kích thước lớn, màu sắc đỏ tươi, cuống tươi xanh<br />
                      Mùi vị rất thơm, có vị ngọt thanh tự nhiên<br />
                      Trái cây mọng, không bị dập nát<br />
                      Trọng lượng là 330gr/hộp<br />
                      Nhập khẩu trực tiếp từ Hàn Quốc<br />
                      100% nói không với chất bảo quản và trái cây Trung Quốc
                    </p>

                    <ul>
                      <li>
                        <div className={ProductDetailStyle.quantityBox}>
                          <strong>Số Lượng</strong>
                          <InputNumber min={1} max={1000} defaultValue={1} />
                        </div>
                      </li>
                    </ul>

                    <div className={ProductDetailStyle.btnGroup}>
                      <button className={ProductDetailStyle.btnHover + " " + ProductDetailStyle.color2}>
                        <Link to="/checkout">
                          <span style={{ color: 'white' }}> Mua ngay </span>
                        </Link>
                      </button>
                      <button onClick={handleClickAdd} className={ProductDetailStyle.btnHover + " " + ProductDetailStyle.color2}>
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>




              <Row style={{ marginTop: "5rem", marginBottom: "5rem" }}>
                <Col lg={24} md={24} sx={24} xs={24}>
                  <div className={ProductDetailStyle.card} style={{ margin: "1.5rem 0" }}>

                    <div className={ProductDetailStyle.cardHeader}>
                      <h2>Đánh Giá</h2>
                    </div>


                    <div className={ProductDetailStyle.cardBody}>


                      {comments.map((comment) => (
                        <div>
                          <div className={ProductDetailStyle.media} style={{ marginBottom: "1rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              <img alt="" src={comment.profilePicture} />
                            </div>
                            <div className={ProductDetailStyle.mediaBody}>
                              <p>{comment.desc}</p>
                              <small>Posted by Anonymous on 3/1/18</small>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))}

                      <Input
                        prefix={<CommentOutlined />}
                        size="large"
                        placeholder="Bạn suy nghĩ gì..."
                        onChange={(e) => setCmt(e.target.value)}
                      ></Input>

                      <button
                        style={{ borderRadius: "4px", alignItems: "center" }}
                        className={ProductDetailStyle.btnHover + " " + ProductDetailStyle.color2}
                      >
                        Bình Luận
                      </button>


                    </div>
                  </div>
                </Col>
              </Row>

              <Row style={{ margin: "5rem 0" }}>
                <Col lg={24}>
                  <div className={ProductDetailStyle.title}>
                    <h1>Các Sản Phẩm Khác</h1>
                    <p>
                      Các sản phẩm tương tự trong cửa hàng
                    </p>
                  </div>

                  {/* product */}
                  <div
                    style={{ padding: "0px 0" }}
                    className={HomeStyle.categoriesShop}
                  >
                    <div className={HomeStyle.container}>
                      <Row gutter={[24, 16]}>
                        {productItems.map((item) => (
                          <Col key={item.id} lg={8} md={8} sm={24} xs={24}>
                            <div className={HomeStyle.shopCatBox}>
                              <img src={item.profilePicture} alt="" />

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
                                  {item.oldPrice}đ
                                </del>{" "}
                                {item.newPrice}đ
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
                                  {item.name}
                                </Link>
                              </strong>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>

                  {/* endcate */}
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default ProductDetail;
