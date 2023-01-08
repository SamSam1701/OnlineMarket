import ShopStyle from "../Shop/Shop.module.scss";

import { useState } from "react";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Breadcrumb,
  Table,
  Button,
  Input,
  Modal,
  Form,
  Upload,
  message,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import img1 from "../../assets/images/rau-cai.jpg";
import img2 from "../../assets/images/rau-muong.png";
import img3 from "../../assets/images/rau-ram.jpg";
import img4 from "../../assets/images/rau-ma.jpg";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


function Admin() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      url: img1,
      nameproduct: "Rau cải",
      price: "19000",
      Cate: "Rau củ",
    },
    {
      id: 2,
      url: img2,
      nameproduct: "Rau muống",
      price: "9000",
      Cate: "Rau củ",
    },
    {
      id: 3,
      url: img3,
      nameproduct: "Rau răm",
      price: "9000",
      Cate: "Rau củ",
    },
    {
      id: 4,
      url: img4,
      nameproduct: "Rau má",
      price: "5000",
      Cate: "Rau củ",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Hình ảnh",
      dataIndex: "url",
      render: (url) => (
        <img
          style={{ width: "40px", height: "40px" }}
          src={url}
          alt=""
        />
      ),
    },
    {
      key: "3",
      title: "Tên sản phẩm",
      dataIndex: "nameproduct",
    },
    {
      key: "4",
      title: "Giá tiền",
      dataIndex: "price",
      render: (price) => <>{price} VNĐ</>,
    },
    {
      key: "5",
      title: "Danh mục",
      dataIndex: "Cate",
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditProduct(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteProduct(record);
              }}
              style={{ color: "red", marginLeft: "12px" }}
            />
          </>
        );
      },
    },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const onDeleteProduct = (record) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa sản phẩm này?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((product) => product.id !== record.id);
        });
      },
    });
  };
  const onEditProduct = (record) => {
    setIsEditing(true);
    setEditingProduct({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };
  const handleEditImgChange = (info) => {
    if (info.file.status === "uploading") {
      setLoadingImg(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setEditingProduct((pre) => {
          return { ...pre, url: imageUrl };
        });
        setLoadingImg(false);
      });
    }
  };


  const [isAdding, setIsAdding] = useState(false);
  const [addingProduct, setAddingProduct] = useState(null);
  const onAddProduct = () => {
    const nextID = Math.max(...dataSource.map((product) => product.id)) + 1;
    const newProduct = {
      id: nextID,
      url: "",
      nameproduct: "",
      price: "",
      Cate: "",
    };
    setIsAdding(true);
    setAddingProduct(newProduct);
  };
  const resetAdding = () => {
    setIsAdding(false);
    setAddingProduct(null);
  };
  const [loadingImg, setLoadingImg] = useState(false);
  const handleImgChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setLoadingImg(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoadingImg(false);
        setAddingProduct((pre) => {
          return { ...pre, url: imageUrl };
        })
    });
    if (info.file.status === "error") {
      setLoadingImg(false);
      message.error("Upload failed");
    }
    }
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
                  <Breadcrumb.Item>
                    {" "}
                    <Link to="/" style={{ color: "#fff", fontSize: "18px" }}>
                      Trang chủ
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item style={{ fontSize: "18px" }}>
                    Quản trị
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* content */}

      <div className="" style={{ margin: "20px 10px" }}>
        <Button type="primary" onClick={()=>{
          onAddProduct()
        }}
        icon={<PlusOutlined />}
        style={{marginBottom: "20px"}}
        >
          Thêm mặt hàng mới
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title={`Chỉnh sửa sản phẩm ${editingProduct?.id}`}
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((product) => {
                if (product.id === editingProduct.id) {
                  return editingProduct;
                } else {
                  return product;
                }
              });
            });
            resetEditing();
          }}
        >
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            size={"default"}
          >
            <Form.Item label="Hình ảnh" >
              <div className="avatar" style={{display: "flex" , flexDirection: "column"}}>
              <img
                    className="avatar-uploader"
                    src={editingProduct?.url}
                    alt="avatar"
                    style={{ width: "100px", marginBottom: "10px", border: "1px solid #d9d9d9", borderRadius: "4px"}}
              />
              <Upload
                name="avatar"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleEditImgChange}
              >
              <Button icon={<UploadOutlined />}>Chọn ảnh khác</Button>
              </Upload>
              </div>
            </Form.Item>
            <Form.Item label="Tên sản phẩm">
              <Input
                value={editingProduct?.nameproduct}
                onChange={(e) => {
                  setEditingProduct((pre) => {
                    return { ...pre, nameproduct: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Giá sản phẩm">
              <Input
                value={editingProduct?.price}
                onChange={(e) => {
                  setEditingProduct((pre) => {
                    return { ...pre, price: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Danh mục">
              <Select
                value={editingProduct?.Cate}
                onChange={(value) => {
                  setEditingProduct((pre) => {
                    return { ...pre, Cate: value };
                  });
                }}
                options={[
                { value: "Rau củ", label: "Rau củ" },
                { value: "Trái cây", label: "Trái cây" },
                { value: "Hải sản", label: "Hải sản" },
                { value: "Thịt", label: "Thịt" },
                { value: "Ngũ cốc", label: "Ngũ cốc" },
                { value: "Khác", label: "Khác" },
              ]}
              />
            </Form.Item>
          </Form>
              
        </Modal>
        <Modal
          title="Thêm sản phẩm"
          visible={isAdding}
          okText="Save"
          onCancel={() => {
            resetAdding();
          }}
          onOk={() => {
            if (!addingProduct?.url) {
              message.error("Vui lòng nhập hình ảnh");
              return;
            }
            if (!addingProduct?.nameproduct) {
              message.error("Vui lòng nhập tên sản phẩm");
              return;
            }
            if (!addingProduct?.price) {
              message.error("Vui lòng nhập giá sản phẩm");
              return;
            }
            if (!addingProduct?.Cate) {
              message.error("Vui lòng nhập danh mục sản phẩm");
              return;
            }
            setDataSource((pre) => {
              return [...pre, addingProduct];
            });
            resetAdding();
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            size={"default"}
          >
            <Form.Item label="Id">
              <Input value={addingProduct?.id} disabled></Input>
            </Form.Item>
            <Form.Item label="Hình ảnh">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleImgChange}
                 >
                {addingProduct?.url ? (
                  <img
                    src={addingProduct?.url}
                    alt="avatar"
                    style={{ width: "100%" }}
                  />
                ) : (
                    <div>
                      {loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                )} 
              </Upload>
            </Form.Item>
            <Form.Item label="Tên:" 
            >
              <Input
                value={addingProduct?.nameproduct}
                onChange={(e) => {
                  setAddingProduct((pre) => {
                    return { ...pre, nameproduct: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Giá tiền">
              <Input
                value={addingProduct?.price}
                onChange={(e) => {
                  setAddingProduct((pre) => {
                    return { ...pre, price: e.target.value };
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Danh mục">
              <Select slowSearch
              placeholder="Chọn danh mục"
              value={addingProduct?.Cate===""?null:addingProduct?.Cate }
              onChange={(value) => {
                setAddingProduct((pre) => {
                  return { ...pre, Cate: value };
                });
              }}
              options={[
                { value: "Rau củ", label: "Rau củ" },
                { value: "Trái cây", label: "Trái cây" },
                { value: "Hải sản", label: "Hải sản" },
                { value: "Thịt", label: "Thịt" },
                { value: "Ngũ cốc", label: "Ngũ cốc" },
                { value: "Khác", label: "Khác" },
              ]}
              >
              </Select>

            </Form.Item>
          </Form>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
