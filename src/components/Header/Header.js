import HeaderStyle from "./Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Menu, Drawer } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={HeaderStyle.mainHeader}>
      <div style={{ height: "60px", paddingLeft: "12px", paddingTop: "12px" }} className={HeaderStyle.MenuToggle}>
        <MenuOutlined style={{ color: "black", fontSize: "30px" }} onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>

      <div className={HeaderStyle.container}>
        <div className={HeaderStyle.navbarHeader}>
          <Link to="/">
            <img atl="" className="" src={require("../../assets/images/logo.png")}/>
          </Link>
        </div>

        <div className={HeaderStyle.MenuItems}>
          <div className={HeaderStyle.headerMenu}>
            <NavMenu />
          </div>

          <Drawer placement="left" open={openMenu} onClose={() => {
              setOpenMenu(false);
            }}
            closable={false}
          >
            <NavMenu isInline> </NavMenu>
          </Drawer>

          <div className={HeaderStyle.search}>
            <Input className={HeaderStyle.searchInput} placeholder="Nhập sản phẩm..."></Input>
            <Button className={HeaderStyle.searchIcon} icon={<SearchOutlined />}></Button>
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
            <span className=""> BÀI VIẾT </span>{" "}
          </Link>{" "}
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
