import CateStyle from './Category.module.scss';

import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import { Avatar, List, Card, InputNumber, Button, Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

import VirtualList from 'rc-virtual-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import itemContext from '../../pages/Shop/Shop';


function Category({ newItems }) {
  const ContainerHeight = 400;

  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([]);

  const [change, setChange] = useState(0);

  const product = useContext(itemContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getItems = () => {
    if (newItems?.length > 0) {
      setItems(newItems)
      localStorage.setItem("items", JSON.stringify(newItems))
    } else {
      const storageItem = localStorage.getItem("items") !== 'undefined' ? JSON.parse(localStorage.getItem("items")) : null
      if (storageItem) {
        setItems(storageItem)
      } else {
        const items = [
          { id: 1, title: 'Súp lơ', number: 1, unit: 1000, img: 'https://product.hstatic.net/200000423303/product/ngongot_efdb710405b44b06a1ea02e5db5cf3f9_large.jpg', },
          { id: 2, title: 'Khoai Tây', number: 1, unit: 5000, img: 'https://product.hstatic.net/200000423303/product/bap-cai-tim-huu-co_203f203060064cf5a24b9f8e9c352214_large.jpg' },
          { id: 3, title: 'Cà Chua', number: 1, unit: 2000, img: 'data:image/jpeg;base64,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grOkcU6FNyb7T05f7eG7mWSlUXTTeuKiFIW1LiVeHD2sdDAvpQrEFDwyC+r4F9QBERAEREAREQBERAEREAREQHxfFkiA0vaofGsGp3DctRsxsRo5vgfy2U7CZQvGk1ZmdOpKnJSi7NcDyLFehdWmZpdtvLZ30P60VXvMIqtOtN7D4ED0+i/QmQclgaLTu0eihzwUX9rt6l9h/qKvBWnFS9H8eh+dmPrM+y6O6SF00rtx+y4/8SveqmHUXb0qZ8WBfKeHUW/DSYPBgWh9HPdL0Jb+pKTWdLPv/g8ENWqTAY7wjVdlngVxVIluRvMjXyH1he5i1p8GM/pCCzp/cb6LOPR6WsjVP6iuuzTt43+ChYBgTaA7DTJ+Jx+I+fAdwVntbN3JTQpN5BZgKZCkoKyKPEYydduUtWc1C1jddSItpEMSgCyRAfF9REAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/9k=' },
          { id: 4, title: 'Thịt', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
          { id: 5, title: 'Cá', number: 1, unit: 10000, img: 'https://top10tphcm.com/wp-content/uploads/2021/06/nhung-dia-chi-ban-thit-lon-sach-tphcm.jpg' },
        ];
        setItems(items);
        localStorage.setItem("items", JSON.stringify(items))
      }
    }
  }

  const sumPriceCart = () => {
    let sumPrice = 0;
    for (let index in items) {
      sumPrice += (items[index].unit * (items[index].number || 1));
    }
    setTotal(sumPrice);
    setChange(0);
  };

  const handleDeleteProduct = (id) => {
    const newCart = items.filter((item) => item.id !== id);
    setItems(newCart);
    setChange(1);
  }

  useEffect(() => {
    if (newItems?.length > 0) {
      setItems(newItems)
    }
  }, [newItems]);

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
  }, [change, items]);


  const onScroll = (e) => {
  };

  return (
    <Card
      className={CateStyle.cartContainer}
      title={
        <Badge count={items?.length} style={{marginTop: 10}}>
          <FontAwesomeIcon style={{ fontSize: '50px', color: '#DEECEC', marginTop: 10}} icon={faCartShopping} />
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
                <Avatar src={item.img} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'left', }} >
                    <Link to="/productdetail"><strong>{item.title}</strong></Link>
                  </div>
                  <div style={{ textAlign: 'left', }} >
                    {item.unit + 'đ'}
                  </div>
                </div>
                <InputNumber min={1} max={100} defaultValue={item.number} onChange={(event) => handleNumberChange(event, index)} />
                <div>
                  <button style={{ background: '#deecec', cursor: 'pointer' }} onClick={() => handleDeleteProduct(item.id)}>
                    <DeleteOutlined style={{ color: 'red', marginLeft: '12px' }} />
                  </button>
                </div>
              </List.Item>
            )}
          </VirtualList>
          <div className={CateStyle.footerCart}>
            <span>Tổng: <strong style={{ color: 'red' }}> {total.toLocaleString('it-IT', { style: 'currency', currency: 'vnd' })}</strong></span>
            <Button style={{ borderRadius: '4px' }} className={CateStyle.btnHover + ' ' + CateStyle.color2}> <Link to="/checkout">
              <p style={{ color: 'white' }}> Thanh Toán </p>
            </Link></Button>
          </div>
        </List>


      </div>

      <div className={CateStyle.cartDisable}>
        <h1>ĐĂNG NHẬP ĐỂ XEM GIỎ HÀNG</h1>
      </div>
    </Card>
  );
}

export default Category;