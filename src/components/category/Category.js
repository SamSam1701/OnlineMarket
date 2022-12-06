import CateStyle from './Category.module.scss';

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { Avatar, List, Card, InputNumber } from 'antd';
import { Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

import VirtualList from 'rc-virtual-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Category() {
  const ContainerHeight = 400;

  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([]);

  const [change, setChange] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getItems = () => {
    const items = [
      { id: 1, title: 'Súp lơ', number: 1, unit: 1000, img: 'https://product.hstatic.net/200000423303/product/ngongot_efdb710405b44b06a1ea02e5db5cf3f9_large.jpg', },
      { id: 2, title: 'Khoai Tây', number: 1, unit: 5000, img: 'https://product.hstatic.net/200000423303/product/bap-cai-tim-huu-co_203f203060064cf5a24b9f8e9c352214_large.jpg' },
      { id: 3, title: 'Cà Chua', number: 1, unit: 2000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 4, title: 'Thịt', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 5, title: 'Cá', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 6, title: 'Súp lơ', number: 1, unit: 1000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 7, title: 'Khoai Tây', number: 1, unit: 5000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 8, title: 'Cà Chua', number: 1, unit: 2000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 9, title: 'Thịt', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
      { id: 10, title: 'Cá', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
    ];

    setItems(items);
  }

  const sumPriceCart = () => {
    let sumPrice = 0;
    for (let index in items) {
      sumPrice += (items[index].unit * (items[index].number|| 1));
    }
    setTotal(sumPrice);
    setChange(0);
  };

  const handleDeleteProduct = () => {

  };

  useEffect(() => {
    getItems();
  }, []);

  
  const handleNumberChange = (value, index) => {
    const newData = items;
    newData[index].number = value;
    setChange(1);
  };

  useEffect(() => {
    sumPriceCart();
  }, [change]);


  const onScroll = (e) => {
  };

  return (
    <Card
      className={CateStyle.cartContainer}
      title={
        <Badge count={items.length}>
          <FontAwesomeIcon style={{ fontSize: '50px', color: '#DEECEC' }} icon={faCartShopping} />
        </Badge>}
      style={{
        margin: 10,
        position: 'sticky',
        top: 10,
        height: 670,
        backgroundColor: '#738276',
      }}>
      <div
        className={CateStyle.category}
        style={{
          backgroundColor: '#DEECEC',
        }}
      >
        <List >
          <VirtualList data={items} height={ContainerHeight} itemHeight={50} itemKey="email" onScroll={onScroll} xs={12} md={4}>
            {(item, index) => (
              <List.Item key={item.id}>
                <Avatar src={item.img}/>
                <div style={{ textAlign: 'right', }} >
                  <Link to="/productdetail">{item.title}</Link>
                </div>
                <div style={{ textAlign: 'left', }} >
                  {item.unit + 'đ'}
                </div>
                <InputNumber min={0} max={10} defaultValue={item.number} onChange={(event) => handleNumberChange(event, index)} />
                <div>
                  <button style={{ background: '#ccc', cursor: 'pointer' }} onClick={handleDeleteProduct}>
                    <DeleteOutlined style={{ color: 'red', marginLeft: '12px' }} />
                  </button>
                </div>
              </List.Item>
            )}
          </VirtualList>
        </List>

        <div className={CateStyle.footerCart}>
          <span>Tổng tiền: <strong style={{ color: 'red' }}> {total.toLocaleString('it-IT', { style: 'currency', currency: 'vnd' })}</strong></span>
          <button style={{ borderRadius: '4px', alignItems: 'center' }} className={CateStyle.btnHover + ' ' + CateStyle.color2}>Thanh Toán</button>
        </div>
      </div>

      <div className={CateStyle.cartDisable}>
        <h1>ĐĂNG NHẬP ĐỂ XEM GIỎ HÀNG</h1>
      </div>
    </Card>
  );
}

export default Category;