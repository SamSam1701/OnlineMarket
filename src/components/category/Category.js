import styles from './Category.module.scss';
import React, { useEffect, useState } from 'react';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Badge } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'

function Category() {
    const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
    const ContainerHeight = 400;
    const [data, setData] = useState([]);
    
    const appendData = () => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((body) => {
          setData(data.concat(body.results));
        });
    };

    useEffect(() => {
      appendData();
    }, []);

    const onScroll = (e) => {
      if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
        appendData();
      }
    }

    console.log(data);


    return ( 
      
        <div className={styles.cartContainer}>
              <Badge count={100}>
                  <FontAwesomeIcon style={{fontSize:'50px', color:'#3333FF'}} icon={faCartShopping} />
              </Badge>
        <div className={styles.category}>
            <List>
              <VirtualList data={data} height={ContainerHeight} itemHeight={47} itemKey="email" onScroll={onScroll}>
                {(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src='data:image/jpeg;base64,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' />}
                      title={<Link to="/productdetail">Súp lơ</Link>}
                      description='1000đ'
                    />
                    <div> 
                        <DeleteOutlined style={{color:'red', marginLeft:'12px'}}/>
                    </div>
                    
                  </List.Item>
                )}
              </VirtualList>
            </List>

          <div className={styles.footerCart}>
                  <span>Tổng tiền: <strong style={{color:'red'}}>150.000đ</strong></span>
                  <button style={{borderRadius:'4px', alignItems:'center'}} className={styles.btnHover+' '+styles.color2}>Thanh Toán</button>
          </div>
        </div>

        <div className={styles.cartDisable}>
          <h1>ĐĂNG NHẬP ĐỂ XEM GIỎ HÀNG</h1>
        </div>
    </div>
     );
}

export default Category;