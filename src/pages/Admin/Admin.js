import ShopStyle from "../Shop/Shop.module.scss";

import { useState } from "react";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import { Row, Col, Breadcrumb, Table,Button, Input,Modal } from "antd";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

function Admin() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id:1,
            url:'https://img.icons8.com/dusk/2x/chart.png',
            nameproduct:'Rau cải',
            price:'19.000đ',
            Cate:'Rau củ',
        },
        {
            id:2,
            url:'../../assets/images/gallery-img-02.jpg',
            nameproduct:'Rau muống',
            price:'9.000đ',
            Cate:'Rau củ',
        },
        {
            id:3,
            url:'../../assets/images/gallery-img-03.jpg',
            nameproduct:'Rau răm',
            price:'9.000đ',
            Cate:'Rau củ',
        },
        {
            id:4,
            url:'../../assets/images/gallery-img-04.jpg',
            nameproduct:'Rau má',
            price:'5000đ',
            Cate:'Rau củ',
        },

    ])
    const columns = [
        {
            key:'1',
            title:'ID',
            dataIndex:'id'
        },
        {
            key:'2',
            title: 'Hình ảnh',
            dataIndex: 'url',
            render: () => <img style={{width:'40px', height:'40px'}} src={`https://wrfarmers.com/wp-content/uploads/2021/09/ca%CC%89i-thi%CC%80a-.jpeg`} atl="pic"/>
         },
        {
            key:'3',
            title:'Tên sản phẩm',
            dataIndex:'nameproduct'
        },
        {
            key:'4',
            title:'Giá tiền',
            dataIndex:'price'
        },
        {
          key:'5',
          title:'Danh mục',
          dataIndex:'Cate'
      },
        {
            key:'6',
            title:'Actions',
            render:(record)=>{
                return (
                <> 
                <EditOutlined  onClick={() => {
                onEditStudent(record);
              }}/>
                <DeleteOutlined onClick={()=>{
                    onDeleteStudent(record)
                }}  style={{color:'red', marginLeft:'12px'}}/>
                </>
                );
            }
        }

    ]

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
          id: randomNumber,
          name: "Name " + randomNumber,
          email: randomNumber + "@gmail.com",
          address: "Address " + randomNumber,
        };
        setDataSource((pre) => {
          return [...pre, newStudent];
        });
      };

      const onDeleteStudent = (record) => {
        Modal.confirm({
          title: "Bạn có chắc muốn xóa sản phẩm này?",
          okText: "Yes",
          okType: "danger",
          onOk: () => {
            setDataSource((pre) => {
              return pre.filter((student) => student.id !== record.id);
            });
          },
        });
      };

      const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
      };

      const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
      };

    return (
        <div className="admin">
            <Subnav />
            <Header />
    
            <div className={ShopStyle.allTitleBox}>
                <div className={ShopStyle.container}>
                    <Row>
                        <Col lg={24}>
                            <h2>QUẢN TRỊ</h2>
                            <div className={ShopStyle.breadcrumb}>

                                <Breadcrumb>
                                    <Breadcrumb.Item> <Link to="/" style={{color:'#fff', fontSize:'18px'}}>Trang chủ</Link></Breadcrumb.Item> 
                                    <Breadcrumb.Item  style={{fontSize:'18px'}}>Quản trị</Breadcrumb.Item>
                                </Breadcrumb>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* content */}

            <div className="" style={{margin:'20px 10px'}}>

            <Button type='primary' onClick={onAddStudent}>Thêm mới sản phẩm</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.url}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, url: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.nameproduct}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, nameproduct: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.price}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, price: e.target.value };
              });
            }}
          />
            <Input
            value={editingStudent?.Cate}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, Cate: e.target.value };
              });
            }}
          />
        </Modal>
            </div>

            <Footer />
        </div>
      );
}

export default Admin;