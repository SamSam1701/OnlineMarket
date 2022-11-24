import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import { Input, Button, Menu, Drawer } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.mainHeader}>
      <div style={{ height: "60px", paddingLeft: "12px", paddingTop: "12px" }} className={styles.MenuToggle}>
        <MenuOutlined style={{ color: "black", fontSize: "30px" }} onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.navbarHeader}>
          <Link to="/">
            <img className="logo" src={require("../../assets/images/logo.png")}/>
          </Link>
        </div>

        <div className={styles.MenuItems}>
          <div className={styles.headerMenu}>
            <NavMenu />
          </div>

          <Drawer placement="left" open={openMenu} onClose={() => {
              setOpenMenu(false);
            }}
            closable={false}
          >
            <NavMenu isInline> </NavMenu>
          </Drawer>

          <div className={styles.search}>
            <Input className={styles.searchInput} placeholder="Nhập sản phẩm..."></Input>
            <Button className={styles.searchIcon} icon={<SearchOutlined />}></Button>
          </div>
        </div>
      </div>
    </div>
  );

  function NavMenu({ isInline = false }) {
    return (
      <Menu
        mode={isInline ? "inline" : "horizontal"}
        style={{
          backgroundColor: "#f8f9fa",
          color: "black",
          textTransform: "uppercase",
          fontSize: "1.6rem",
          fontWeight: "700",
          border: "none",
        }}
      >
        <Menu.Item key="home">
          <Link to="/">
            <span className=""> TRANG CHỦ </span>{" "}
          </Link>{" "}
        </Menu.Item>
        <Menu.Item key="about_us">
          <Link to="/">
            <span className=""> GIỚI THIỆU </span>{" "}
          </Link>{" "}
        </Menu.Item>
        <Menu.Item key="shop">
          <Link to="/shop">
            <span className=""> CỬA HÀNG </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/">
            <span className=""> TIN TỨC </span>{" "}
          </Link>{" "}
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/">
            <span className=""> LIÊN HỆ </span>{" "}
          </Link>{" "}
        </Menu.Item>{" "}
      </Menu>
    );
  }
}

export default Header;
