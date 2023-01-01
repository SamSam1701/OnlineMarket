import React from "react";
import CheckOutStyle from "./CheckOut.module.scss";
import ShopStyle from "../Shop/Shop.module.scss";

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/category/Category";
import { Link } from "react-router-dom";

import { Row, Col, Breadcrumb } from "antd";

const CheckOut = () => {
  return (
      <div className="Home">
        <Subnav />
        <Header />

        <div className={ShopStyle.allTitleBox}>
          <div className={ShopStyle.container}>
            <Row>
              <Col lg={24}>
                <h2>THANH TOÁN</h2>
                <div className={ShopStyle.breadcrumb}>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      {" "}
                      <Link to="/" style={{ color: "#fff", fontSize: "18px" }}>
                        Trang chủ
                      </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={{ fontSize: "18px" }}>
                      Thanh toán
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
          </div>
        </div>

          
        <div className={CheckOutStyle.CartBoxMain}>
            <div className={CheckOutStyle.Container}>
                <Row gutter={[16, 16]}>
                        <Col sm={12} lg={12} style={{marginBottom:'16px', padding:'0 15px'}}>
                            <div className={CheckOutStyle.CheckoutAddress}>
                                <div className={CheckOutStyle.TitleLeft}>
                                    <h3>Địa chỉ nhận hàng</h3>
                                </div>
                                <form className={CheckOutStyle.NeedsValidation}>
                
                                    <Row style={{margin:'0 -15px'}}>
                
                                            <Col md={12} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px'}}>
                                                <label for="firstName">Tên riêng *</label>
                                                <input type="text" className={CheckOutStyle.FormControl} id="firstName" value="" required/>
                                                <div className={CheckOutStyle.InvalidFeedback}> Valid first name is required. </div>
                                            </Col>
                                            <Col md={12} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px'}}>
                                                <label for="lastName">Tên họ *</label>
                                                <input type="text" className={CheckOutStyle.FormControl} id="lastName" value="" required/>
                                                <div className={CheckOutStyle.InvalidFeedback}> Valid last name is required. </div>
                                            </Col>
                
                                    </Row>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="username">Tên đăng nhập *</label>
                                        <div className={CheckOutStyle.InputGroup}>
                                            <input type="text" className={CheckOutStyle.FormControl} id="username" required/>
                                            <div className={CheckOutStyle.InvalidFeedback} style={{width:'100%'}}> Your username is required. </div>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="email">Địa chỉ Email *</label>
                                        <input type="email" className={CheckOutStyle.FormControl} id="email" placeholder=""/>
                                        <div className={CheckOutStyle.InvalidFeedback}> Please enter a valid email address for shipping updates. </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="address">Địa chỉ gốc *</label>
                                        <input type="text" className={CheckOutStyle.FormControl} id="address" required/>
                                        <div className={CheckOutStyle.InvalidFeedback}> Please enter your shipping address. </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="address2">Địa chỉ phụ *</label>
                                        <input type="text" className={CheckOutStyle.FormControl} id="address2" placeholder=""/>
                                    </div>
                
                                        <Row style={{margin:'0 -15px', display:'flex', flexWrap:'wrap'}}>
                                            <Col md={10} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 41.666667%', maxWidth:'41.666667%'}}>
                                            <label for="country">Quốc gia *</label>
                                            <select style={{minHeight:'40px', border:'1px solid #e8e8e8', width:'100%'}} id="country">
                                                <option style={{minHeight:'40px'}} value="Choose..." data-display="Select">Chọn...</option>
                                                <option style={{minHeight:'40px'}} value="United States">Việt Nam</option>
                                                    </select>
                                            <div className={CheckOutStyle.InvalidFeedback}> Please select a valid country. </div>
                                            </Col>
                
                                            <Col md={8} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 33.333333%;', maxWidth:'33.333333%;'}}>
                                            <label for="state">Tỉnh *</label>
                                            <select style={{minHeight:'40px', border:'1px solid #e8e8e8', width:'100%'}} id="state">
                                                <option style={{minHeight:'40px'}} data-display="Select">Chọn...</option>
                                                <option style={{minHeight:'40px'}} >Thành Phố Hồ Chí Minh</option>
                                                    </select>
                                            <div className={CheckOutStyle.InvalidFeedback}> Please provide a valid state. </div>
                                            </Col>
                                            <Col md={6} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 25%', maxWidth:'25%'}}>
                                            <label for="zip">Mã vùng *</label>
                                            <input type="text" className={CheckOutStyle.FormControl} id="zip" required/>
                                            <div className={CheckOutStyle.InvalidFeedback}> Zip code required. </div>
                                            </Col>
                                        </Row>
                                    <hr style={{marginTop:'16px',marginBottom: '24px', borderTop:'1px solid rgba(0,0,0,.1'}}/>

                                    <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomCheckbox}>
                                        <input type="checkbox" className={CheckOutStyle.CustomControlInput} id="same-address"/>
                                        <label className={CheckOutStyle.CustomControlLable} for="same-address">Địa chỉ giao hàng giống với địa chỉ thanh toán của tôi</label>
                                    </div>
                                    <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomCheckbox}>
                                        <input type="checkbox" className={CheckOutStyle.CustomControlInput} id="save-info"/>
                                        <label className={CheckOutStyle.CustomControlLable} for="save-info">Lưu cho lần mua tiếp theo</label>
                                    </div>
                                    <hr style={{marginTop:'16px',marginBottom: '24px', borderTop:'1px solid rgba(0,0,0,.1'}}/>
                                    <div> <span style={{color:'#666', fontSize:'16px'}}>Payment</span> </div>
                                    <div class="d-block" style={{marginTop:'16px', marginBottom:'16px'}}>
                                        <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="credit" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} checked required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="credit">Thẻ tín dụng</label>
                                        </div>
                                        <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="debit" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="debit">Thẻ ghi nợ</label>
                                        </div>
                                        <div  className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="paypal" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="paypal">Paypal</label>
                                        </div>
                                    </div>
                
                                        <Row style={{margin:'0 -15px', display:'flex', flexWrap:'wrap'}}>
                                            <Col md={12} style={{marginBottom:'16px', flex:'0 0 50%', maxWidth:'50%', position:'relative',minHeight:'1px', width:'100%', padding:'0 15px'}}>
                                            <label for="cc-name">Tên chủ tài khoản</label>
                                            <input type="text" className={CheckOutStyle.FormControl} id="cc-name" required/> <small style={{padding:'10px 0', color:'#6c757d'}}>Full name as displayed on card</small>
                                            <div className={CheckOutStyle.InvalidFeedback}> Name on card is required </div>
                                            </Col>
                                            <Col md={12} style={{marginBottom:'16px', flex:'0 0 50%', maxWidth:'50%', position:'relative',minHeight:'1px', width:'100%', padding:'0 15px'}}>
                                            <label for="cc-number">Số tài khoản</label>
                                            <input type="text" className={CheckOutStyle.FormControl} id="cc-number" required/>
                                            <div className={CheckOutStyle.InvalidFeedback}> Credit card number is required </div>
                                            </Col>
                                        </Row>
                                       <Row>
                                        <Col md={24} style={{marginBottom:'16px'}}>
                                            <div className={CheckOutStyle.PaymentIcon}>
                                                <ul>
                                                    <li><img className={CheckOutStyle.ImgFuild} src={require("../../assets/images/payment-icon/1.png")} alt=""/></li>
                                                    <li><img className={CheckOutStyle.ImgFuild} src={require("../../assets/images/payment-icon/2.png")} alt=""/></li>
                                                    <li><img className={CheckOutStyle.ImgFuild} src={require("../../assets/images/payment-icon/3.png")} alt=""/></li>
                                                    <li><img className={CheckOutStyle.ImgFuild} src={require("../../assets/images/payment-icon/5.png")} alt=""/></li>
                                                    <li><img className={CheckOutStyle.ImgFuild} src={require("../../assets/images/payment-icon/7.png")} alt=""/></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        </Row>
                                    <hr sytle={{marginBottom:'4px'}}/>
                                </form>
                            </div>
                        </Col>
                            <Col sm={12} lg={12} style={{marginBottom:'16px', padding:'0 15px'}}>


                                <Row>
                                    <Col md={24} lg={24} className={CheckOutStyle.ColRight}>
                                    <div class="shipping-method-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Hình thức vận chuyển</h3>
                                        </div>
                                        <div style={{marginBottom:'24px'}}>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption1" name="shipping-option" className={CheckOutStyle.CustomControlInput} checked="checked" type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption1">Giao hàng chuẩn</label> <span style={{float:'right', fontWeight:'bold'}}>Miễn phí</span> </div>
                                            <div style={{marginLeft:'24px', marginBottom:'8px', color:'#666'}}>(3-7 ngày làm việc)</div>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption2" name="shipping-option" className={CheckOutStyle.CustomControlInput} type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption2">Giao hàng nhanh</label> <span style={{float:'right', fontWeight:'bold'}}>10.000đ</span> </div>
                                            <div style={{marginLeft:'24px', marginBottom:'8px', color:'#666'}}>(2-4 ngày làm việc)</div>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption3" name="shipping-option" className={CheckOutStyle.CustomControlInput} type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption3">Ngày làm việc tiếp theo</label> <span style={{float:'right', fontWeight:'bold'}}>20.000đ</span> </div>
                                        </div>
                                    </div>
                                    </Col>
                
                                    <Col md={24} lg={24} className={CheckOutStyle.ColRight}>
                                    <div class="odr-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Giỏ hàng</h3>
                                        </div>
                                        <div style={{borderRadius:'4px', backgroundColor:'#f8f9fa', padding:'8px'}}>
                                            <div className={CheckOutStyle.Media+' '+CheckOutStyle.MB2+' '+CheckOutStyle.BorderBottom}>
                                                <div className={CheckOutStyle.MediaBody}> <a style={{fontSize:'18px', color:'#111', fontWeight:'700'}} href="detail.html">Cá tươi</a>
                                                    <div className={CheckOutStyle.Small+' '+CheckOutStyle.TextMuted}>Đơn giá: 60.000đ <span style={{margin:'8px 8px'}}>|</span> Số lượng: 1 <span style={{margin:'8px 8px'}}>|</span> Thành tiền: 60.000đ</div>
                                                </div>
                                            </div>
                                            <div className={CheckOutStyle.Media+' '+CheckOutStyle.MB2+' '+CheckOutStyle.BorderBottom}>
                                                <div className={CheckOutStyle.MediaBody}> <a style={{fontSize:'18px', color:'#111', fontWeight:'700'}} href="detail.html">Rau cải</a>
                                                    <div className={CheckOutStyle.Small+' '+CheckOutStyle.TextMuted}>Đơn giá: 50.000đ <span style={{margin:'8px 8px'}}>|</span> Số lượng: 1 <span style={{margin:'8px 8px'}}>|</span> Thành tiền: 70.000đ</div>
                                                </div>
                                            </div>
                                            <div  className={CheckOutStyle.Media+' '+CheckOutStyle.MB2}>
                                                <div className={CheckOutStyle.MediaBody}> <a style={{fontSize:'18px', color:'#111', fontWeight:'700'}} href="detail.html">Thịt ba chỉ</a>
                                                    <div className={CheckOutStyle.Small+' '+CheckOutStyle.TextMuted}>Đơn giá: 40.000đ <span style={{margin:'8px 8px'}}>|</span> Số lượng: 1 <span style={{margin:'8px 8px'}}>|</span> Thành tiền: 40.000đ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                
                                <Col md={24} lg={24} className={CheckOutStyle.ColRight}>
                                    <div class="order-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Đơn đặt hàng</h3>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <div style={{fontWeight:'700',fontSize:'18px'}}>Sản phẩm</div>
                                            <div  style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>Tổng</div>
                                        </div>
                                        <hr style={{margin:'4px 0'}} class="my-1"/>
                                        <div style={{display:'flex'}}>
                                            <h4 style={{fontSize:'16px', padding:'0px', lineHeight:'35px'}}>Tổng phụ</h4>
                                            <div style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>440.000đ </div>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <h4 style={{fontSize:'16px', padding:'0px', lineHeight:'35px'}}>Chiết khấu</h4>
                                            <div style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>40.000đ </div>
                                        </div>
                                        <hr style={{margin:'4px 0'}}/>
                                        <div style={{display:'flex'}}>
                                            <h4 style={{fontSize:'16px', padding:'0px', lineHeight:'35px'}}>Phiếu giảm giá</h4>
                                            <div style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>100.000đ </div>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <h4 style={{fontSize:'16px', padding:'0px', lineHeight:'35px'}}>Thuế</h4>
                                            <div style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>40.000đ</div>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <h4 style={{fontSize:'16px', padding:'0px', lineHeight:'35px'}}>Chi phí vận chuyển</h4>
                                            <div style={{fontWeight:'700', marginLeft:'auto', fontSize:'18px'}}>Miễn phí</div>
                                        </div>
                                        <hr/>
                                        <div style={{display:'flex'}} className={CheckOutStyle.GrTotal}>
                                            <h5>Tổng Tiền</h5>
                                            <div style={{marginLeft:'auto'}} className={CheckOutStyle.h5}>388.000đ</div>
                                        </div>
                                        <hr/>
                                    </div>
                           </Col>
                               
                                <div className={CheckOutStyle.Col12+' '+CheckOutStyle.dflex+' '+CheckOutStyle.ShoppingBox}> <a href="checkout.html" className={CheckOutStyle.MlAuto+' '+CheckOutStyle.btn+' '+CheckOutStyle.Hvrhover}>Thanh Toán</a> </div>
                                
                            </Row>
                        </Col>
                </Row>
            </div>
        </div>

        <Footer />
      </div>
  );
};

export default CheckOut;
