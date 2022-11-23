import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.scss";
import {Input, Button, Menu, Drawer} from 'antd';
import {SearchOutlined, MenuOutlined} from '@ant-design/icons';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    return ( 
        <div className={styles.mainHeader}>

                <div 
                style={{height: '60px',paddingLeft:'12px', paddingTop:'12px' }}
                className={styles.MenuToggle}
                >
                    <MenuOutlined style={{color:"black",fontSize:'30px'}} onClick={()=>{
                        setOpenMenu(true);
                    }}/>
                </div>

            <div className={styles.container}>
                
                <div className={styles.navbarHeader}>
                <Link to='/'><img className="logo" src={require('../../assets/images/logo.png')} /></Link>
                </div>


                <div className={styles.MenuItems}>
                    
                    <div className={styles.headerMenu}>
                        <NavMenu/>
                    </div>

                    <Drawer
                    placement="left"
                    open={openMenu}
                    onClose={()=>{
                        setOpenMenu(false)
                    }}
                    closable={false}>
                        <NavMenu isInline></NavMenu>
                    </Drawer>
                    <div className={styles.search}>
                        <Input className={styles.searchInput} placeholder="Nhập sản phẩm..."></Input>
                        <Button className={styles.searchIcon} icon={<SearchOutlined />}></Button>
                    </div>
                </div>
                        
            </div>
    </div>
     );

    function NavMenu({isInline = false})
    {
        return (
                
                <Menu mode={isInline?"inline":"horizontal"} 
                style={{color:'black', textTransform:'uppercase', fontSize:'1.6rem', fontWeight:'700', border:'none'}} items={[
                    {
                        label:'TRANG CHỦ',
                        key:'home',
                    },

                    {
                        label:'GIỚI THIỆU',
                        key:'About Us',
                    },
                    {
                        label:'CỬA HÀNG',
                        key:'SHOP',
                    },
                    {
                        label:'LIÊN HỆ',
                        key:'Contact Us',
                    },

                ]}></Menu>
        )
    }
}

export default Header;