import HomeStyle from "../home/Home.module.scss";
import ShopStyle from "./Shop.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import Producttype from "../../components/Producttype/Producttype";
import { Link } from "react-router-dom";

import { Row, Col, Select, Breadcrumb } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";


export const itemContext = createContext();

function Shop() {



  const productItems = [
    {
      id: 12,
      title: "Rau cải",
      number: 1,
      unit: 15000,
      oldPrice: 19000,
      newPrice: 15000,
      img: require("../../assets/images/categories_img_01.jpg"),
    },
    {
      id: 3,
      title: "Cà chua",
      number: 1,
      unit: 3000,
      oldPrice: 6000,
      newPrice: 3000,
      img: require("../../assets/images/categories_img_02.jpg"),
    },
    {
      id: 13,
      title: "Hành lá",
      number: 1,
      unit: 15000,
      oldPrice: 19000,
      newPrice: 15000,
      img: require("../../assets/images/categories_img_03.jpg"),
    },
    {
      id: 14,
      title: "Tỏi ớt",
      number: 1,
      unit: 4000,
      oldPrice: 10000,
      newPrice: 4000,
      img: require("../../assets/images/categories_img_01.jpg"),
    },
    {
      id: 15,
      title: "Rau muống",
      number: 1,
      unit: 8000,
      oldPrice: 12000,
      newPrice: 8000,
      img: require("../../assets/images/categories_img_02.jpg"),
    },
    {
      id: 16,
      title: "Rau thơm",
      number: 1,
      unit: 15000,
      oldPrice: 19000,
      newPrice: 15000,
      img: require("../../assets/images/categories_img_03.jpg"),
    },
  ];


  const handleAddItem = () => {
    // console.log({
    //   id: 11, title: 'Cá ngừ', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg',})
  }

  const [newItems, setNewItems] = useState([]);
  const handleAddToCarta = (item) => {
    console.log(item)
    const items = JSON.parse(localStorage.getItem("items")) || null
    if (items) {
      const foundIndex = items.findIndex((i) => i.id === item.id)
      if (foundIndex === -1) {
        items.push(item)
      } else {
        items[foundIndex].number += 1
      }
      localStorage.setItem("items", JSON.stringify(items))
      setNewItems(items)
    }
  }

  return (
    <itemContext.Provider value={handleAddItem()}>
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

        <Row gutter={[24, 16]}>
          {/* cart */}
          <Col style={{ backgroundColor: "#e5d6aa" }} lg={6} xs={24} md={24} sm={24}>
            <Category newItems={newItems} />
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
                    {productItems.map((item) => (
                      <Col key={item.id} lg={8} md={8} sm={12} xs={12}>
                        <div className={HomeStyle.shopCatBox}>
                          <img src={item.img} alt="" />

                          <div className={ShopStyle.btnGroup}>

                            <div className={ShopStyle.iconView}>
                              <Link onClick={handleAddItem(item.id)} style={{ width: '40px', right: 'auto', left: '0' }} to="/productdetail"></Link>
                              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            </div>

                            <div className={ShopStyle.iconAddCart}>
                              <FontAwesomeIcon onClick={() => { handleAddToCarta(item) }} icon={faCartPlus} />
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
                              {item.title}
                            </Link>
                          </strong>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} sx={24} xs={24}>
            <Producttype />
          </Col>
        </Row>

        <Footer />
      </div>
    </itemContext.Provider>
  );

}

export default Shop;
