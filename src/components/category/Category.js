import CateStyle from './Category.module.scss';

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { Avatar, List, message } from 'antd';
import { Badge } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'

import VirtualList from 'rc-virtual-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Category() {


  const productCart = [
    {
      id:1,
      img: 'data:image/jpeg;base64,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',
      name:'Súp lơ siêu sạch',
      price: 18000
    },
    {
      id:2,
      img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg',
      name:'Ba rọi rút sườn',
      price: 99000
    },
    {
      id:3,
      img: 'data:image/jpeg;base64,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',
      name:'Chanh không hạt',
      price: 5000
    },
    {
      id:4,
      img: 'https://product.hstatic.net/200000423303/product/bap-cai-tim-huu-co_203f203060064cf5a24b9f8e9c352214_large.jpg',
      name:'Bắp Cải Tím Hữu Cơ - 500g',
      price: 58000
    },
    {
      id:5,
      img: 'https://product.hstatic.net/200000423303/product/ngongot_efdb710405b44b06a1ea02e5db5cf3f9_large.jpg',
      name:'Bắp Ngọt - 500gr',
      price: 55000
    },
  ]

  const ContainerHeight = 400;

  const sumPriceCart = () =>{
    let sumPrice = 0;
    for (let index in productCart)
    {
      sumPrice+=productCart[index].price;
    }
    return sumPrice;
  }

  const handleDeleteProduct = () => {
    
  }


    const onScroll = (e) => {
      if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
        // append data from api
      }
    }

    return ( 
      
        <div className={CateStyle.cartContainer}>
              <Badge count={productCart.length}>
                  <FontAwesomeIcon style={{fontSize:'50px', color:'#3333FF'}} icon={faCartShopping} />
              </Badge>
        <div className={CateStyle.category}>
            <List>
              <VirtualList data={productCart} height={ContainerHeight} itemHeight={47} onScroll={onScroll}>
                {(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.img} />}
                      title={<Link to="/productdetail"><strong>{item.name}</strong></Link>}
                      description={<strong>{item.price.toLocaleString('it-IT', {style : 'currency', currency : 'vnd'})}</strong>}
                    />
                    <div> 
                        <button style={{background:'#ccc', cursor:'pointer'}} onClick={handleDeleteProduct}>
                          <DeleteOutlined style={{color:'red', marginLeft:'12px'}}/>
                        </button>
                    </div>
                  </List.Item>
                )}
              </VirtualList>
            </List>

          <div className={CateStyle.footerCart}>
                  <span>Tổng tiền: <strong style={{color:'red'}}> {sumPriceCart().toLocaleString('it-IT', {style : 'currency', currency : 'vnd'})} </strong></span>
                  <button style={{borderRadius:'4px', alignItems:'center'}} className={CateStyle.btnHover+' '+CateStyle.color2}>Thanh Toán</button>
          </div>
        </div>

        <div className={CateStyle.cartDisable}>
          <h1>ĐĂNG NHẬP ĐỂ XEM GIỎ HÀNG</h1>
        </div>
    </div>
     );
}

export default Category;