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
import { createContext } from "react";


export const  itemContext = createContext();

function Shop() {

  

  const productItems = [
    {
      id: 1,
      name: "Rau cải",
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
    {
      id: 4,
      name: "Tỏi ớt",
      oldPrice: 10000,
      newPrice: 4000,
      profilePicture: require("../../assets/images/categories_img_01.jpg"),
    },
    {
      id: 5,
      name: "Rau muống",
      oldPrice: 12000,
      newPrice: 8000,
      profilePicture: require("../../assets/images/categories_img_02.jpg"),
    },
    {
      id: 6,
      name: "Rau thơm",
      oldPrice: 19000,
      newPrice: 15000,
      profilePicture: require("../../assets/images/categories_img_03.jpg"),
    },
  ];


  const handleAddItem = ()=>{
    // console.log({
    //   id: 11, title: 'Cá ngừ', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg',})
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
                  {productItems.map((item) => (
                    <Col key={item.id} lg={8} md={8} sm={24} xs={24}>
                      <div className={HomeStyle.shopCatBox}>
                        <img src={item.profilePicture} alt="" />

                        <div className={ShopStyle.btnGroup}>

                          <div className={ShopStyle.iconView}>
                            <Link onClick={handleAddItem(item.id)} style={{width:'40px', right:'auto', left:'0'}} to="/productdetail"></Link>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                          </div>

                          <div className={ShopStyle.iconAddCart}>
                          <Link style={{width:'40px',right:'0', left:'auto'}} to="/shop"></Link>
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
          </div>
        </Col>

        <Col lg={4} md={24} sm={24}>
          <Producttype />
        </Col>
      </Row>

      <Footer />
    </div>
    </itemContext.Provider>
  );

}

export default Shop;
