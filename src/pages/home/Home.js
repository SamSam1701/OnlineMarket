import HomeStyle from "./Home.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";

function Home() {

    const category = [
        {
            id: 1,
            name: "Rau củ",
            profilePicture:
            require("../../assets/images/categories_img_01.jpg"),
          },
          {
            id: 2,
            name: "Trái cây",
            profilePicture:
            require("../../assets/images/categories_img_02.jpg"),
          },
          {
            id: 3,
            name: "Hải sản",
            profilePicture:
            require("../../assets/images/categories_img_03.jpg"),
          },
          {
            id: 4,
            name: "Thịt Heo",
            profilePicture:require("../../assets/images/categories_img_01.jpg"),
          },
          {
            id: 5,
            name: "Ngũ cốc",
            profilePicture: require("../../assets/images/categories_img_02.jpg"),
          },
          {
            id: 6,
            name: "Thực phẩm khác",
            profilePicture:
            require("../../assets/images/categories_img_03.jpg"),
          },
    ]

  return (
    <div className="Home">
        <Subnav />
        <Header />

        <Row gutter={[16, 16]}>
            {/* cart */}
          <Col style={{backgroundColor:'#e5d6aa'}} lg={6}>
            <Category/>
          </Col>

          {/* content */}
            <Col lg={18}>
            <div className={HomeStyle.bodyContainer}>

        <Slide />
        <div className={HomeStyle.categoriesShop}>
            <div className={HomeStyle.container}>
                <Row gutter={[24, 16]}>


                {category.map((type)=>(
             
                      <Col key={type.id} lg={8} md={8} sm ={24} xs={24} >
                        <div className={HomeStyle.shopCatBox}>
                            <img
                            src={type.profilePicture}
                            alt=""
                            />

                            <button className={HomeStyle.btnCategory}>
                            <Link  to="/shop">
                                {type.name}
                            </Link>
                            </button>
                        </div>
                    </Col>
                  ))}
                </Row>
            </div>
      </div>


    </div>
            </Col>

            </Row>

        <Footer />
    </div>
  );
}

export default Home;