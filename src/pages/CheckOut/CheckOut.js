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
                                    <h3>Billing address</h3>
                                </div>
                                <form className={CheckOutStyle.NeedsValidation}>
                
                                    <Row style={{margin:'0 -15px'}}>
                
                                            <Col md={12} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px'}}>
                                                <label for="firstName">First name *</label>
                                                <input type="text" className={CheckOutStyle.FormControl} id="firstName" value="" required/>
                                                <div className={CheckOutStyle.InvalidFeedback}> Valid first name is required. </div>
                                            </Col>
                                            <Col md={12} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px'}}>
                                                <label for="lastName">Last name *</label>
                                                <input type="text" className={CheckOutStyle.FormControl} id="lastName" value="" required/>
                                                <div className={CheckOutStyle.InvalidFeedback}> Valid last name is required. </div>
                                            </Col>
                
                                    </Row>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="username">Username *</label>
                                        <div className={CheckOutStyle.InputGroup}>
                                            <input type="text" className={CheckOutStyle.FormControl} id="username" required/>
                                            <div className={CheckOutStyle.InvalidFeedback} style={{width:'100%'}}> Your username is required. </div>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="email">Email Address *</label>
                                        <input type="email" className={CheckOutStyle.FormControl} id="email" placeholder=""/>
                                        <div className={CheckOutStyle.InvalidFeedback}> Please enter a valid email address for shipping updates. </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="address">Address *</label>
                                        <input type="text" className={CheckOutStyle.FormControl} id="address" required/>
                                        <div className={CheckOutStyle.InvalidFeedback}> Please enter your shipping address. </div>
                                    </div>
                                    <div style={{marginBottom: '16px'}}>
                                        <label for="address2">Address 2 *</label>
                                        <input type="text" className={CheckOutStyle.FormControl} id="address2" placeholder=""/>
                                    </div>
                
                                        <Row style={{margin:'0 -15px', display:'flex', flexWrap:'wrap'}}>
                                            <Col md={10} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 41.666667%', maxWidth:'41.666667%'}}>
                                            <label for="country">Country *</label>
                                            <select style={{minHeight:'40px', border:'1px solid #e8e8e8', width:'100%'}} id="country">
                                                <option style={{minHeight:'40px'}} value="Choose..." data-display="Select">Choose...</option>
                                                <option style={{minHeight:'40px'}} value="United States">United States</option>
                                                    </select>
                                            <div className={CheckOutStyle.InvalidFeedback}> Please select a valid country. </div>
                                            </Col>
                
                                            <Col md={8} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 33.333333%;', maxWidth:'33.333333%;'}}>
                                            <label for="state">State *</label>
                                            <select style={{minHeight:'40px', border:'1px solid #e8e8e8', width:'100%'}} id="state">
                                                <option style={{minHeight:'40px'}} data-display="Select">Choose...</option>
                                                <option style={{minHeight:'40px'}} >California</option>
                                                    </select>
                                            <div className={CheckOutStyle.InvalidFeedback}> Please provide a valid state. </div>
                                            </Col>
                                            <Col md={6} style={{marginBottom:'16px', position:'relative', width:'100%', minHeight:'1px', padding:'0 15px', flex:'0 0 25%', maxWidth:'25%'}}>
                                            <label for="zip">Zip *</label>
                                            <input type="text" className={CheckOutStyle.FormControl} id="zip" required/>
                                            <div className={CheckOutStyle.InvalidFeedback}> Zip code required. </div>
                                            </Col>
                                        </Row>
                                    <hr style={{marginTop:'16px',marginBottom: '24px', borderTop:'1px solid rgba(0,0,0,.1'}}/>

                                    <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomCheckbox}>
                                        <input type="checkbox" className={CheckOutStyle.CustomControlInput} id="same-address"/>
                                        <label className={CheckOutStyle.CustomControlLable} for="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomCheckbox}>
                                        <input type="checkbox" className={CheckOutStyle.CustomControlInput} id="save-info"/>
                                        <label className={CheckOutStyle.CustomControlLable} for="save-info">Save this information for next time</label>
                                    </div>
                                    <hr style={{marginTop:'16px',marginBottom: '24px', borderTop:'1px solid rgba(0,0,0,.1'}}/>
                                    <div> <span style={{color:'#666', fontSize:'16px'}}>Payment</span> </div>
                                    <div class="d-block" style={{marginTop:'16px', marginBottom:'16px'}}>
                                        <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="credit" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} checked required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="credit">Credit card</label>
                                        </div>
                                        <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="debit" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="debit">Debit card</label>
                                        </div>
                                        <div  className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                            <input id="paypal" name="paymentMethod" type="radio" className={CheckOutStyle.CustomControlInput} required/>
                                            <label className={CheckOutStyle.CustomControlLable} for="paypal">Paypal</label>
                                        </div>
                                    </div>
                
                                        <Row style={{margin:'0 -15px', display:'flex', flexWrap:'wrap'}}>
                                            <Col md={12} style={{marginBottom:'16px', flex:'0 0 50%', maxWidth:'50%', position:'relative',minHeight:'1px', width:'100%', padding:'0 15px'}}>
                                            <label for="cc-name">Name on card</label>
                                            <input type="text" className={CheckOutStyle.FormControl} id="cc-name" required/> <small style={{padding:'10px 0', color:'#6c757d'}}>Full name as displayed on card</small>
                                            <div className={CheckOutStyle.InvalidFeedback}> Name on card is required </div>
                                            </Col>
                                            <Col md={12} style={{marginBottom:'16px', flex:'0 0 50%', maxWidth:'50%', position:'relative',minHeight:'1px', width:'100%', padding:'0 15px'}}>
                                            <label for="cc-number">Credit card number</label>
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
                                    <Col md={24} lg={24}>
                                    <div class="shipping-method-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Shipping Method</h3>
                                        </div>
                                        <div style={{marginBottom:'24px'}}>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption1" name="shipping-option" className={CheckOutStyle.CustomControlInput} checked="checked" type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption1">Standard Delivery</label> <span style={{float:'right', fontWeight:'bold'}}>FREE</span> </div>
                                            <div style={{marginLeft:'24px', marginBottom:'8px', color:'#666'}}>(3-7 business days)</div>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption2" name="shipping-option" className={CheckOutStyle.CustomControlInput} type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption2">Express Delivery</label> <span style={{float:'right', fontWeight:'bold'}}>$10.00</span> </div>
                                            <div style={{marginLeft:'24px', marginBottom:'8px', color:'#666'}}>(2-4 business days)</div>
                                            <div className={CheckOutStyle.CustomControl+' '+CheckOutStyle.CustomRadio}>
                                                <input id="shippingOption3" name="shipping-option" className={CheckOutStyle.CustomControlInput} type="radio"/>
                                                <label className={CheckOutStyle.CustomControlLable} for="shippingOption3">Next Business day</label> <span style={{float:'right', fontWeight:'bold'}}>$20.00</span> </div>
                                        </div>
                                    </div>
                                    </Col>
                
                                    <Col md={24} lg={24}>
                                    <div class="odr-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Shopping cart</h3>
                                        </div>
                                        <div class="rounded p-2 bg-light">
                                            <div class="media mb-2 border-bottom">
                                                <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div class="small text-muted">Price: $80.00 <span style={{margin:'8px 0'}} class="mx-2">|</span> Qty: 1 <span class="mx-2">|</span> Subtotal: $80.00</div>
                                                </div>
                                            </div>
                                            <div class="media mb-2 border-bottom">
                                                <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div class="small text-muted">Price: $60.00 <span style={{margin:'8px 0'}} class="mx-2">|</span> Qty: 1 <span class="mx-2">|</span> Subtotal: $60.00</div>
                                                </div>
                                            </div>
                                            <div class="media mb-2">
                                                <div class="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
                                                    <div class="small text-muted">Price: $40.00 <span style={{margin:'8px 0'}} class="mx-2">|</span> Qty: 1 <span class="mx-2">|</span> Subtotal: $40.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={24} lg={24}>
                                    <div class="order-box">
                                        <div className={CheckOutStyle.TitleLeft}>
                                            <h3>Your order</h3>
                                        </div>
                                        <div style={{display:'flex'}} class="d-flex">
                                            <div class="font-weight-bold">Product</div>
                                            <div class="ml-auto font-weight-bold">Total</div>
                                        </div>
                                        <hr style={{margin:'0 4px'}} class="my-1"/>
                                        <div class="d-flex">
                                            <h4>Sub Total</h4>
                                            <div class="ml-auto font-weight-bold"> $ 440 </div>
                                        </div>
                                        <div style={{display:'flex'}} class="d-flex">
                                            <h4>Discount</h4>
                                            <div class="ml-auto font-weight-bold"> $ 40 </div>
                                        </div>
                                        <hr class="my-1"/>
                                        <div style={{display:'flex'}} class="d-flex">
                                            <h4>Coupon Discount</h4>
                                            <div class="ml-auto font-weight-bold"> $ 10 </div>
                                        </div>
                                        <div style={{display:'flex'}} class="d-flex">
                                            <h4>Tax</h4>
                                            <div class="ml-auto font-weight-bold"> $ 2 </div>
                                        </div>
                                        <div style={{display:'flex'}} class="d-flex">
                                            <h4>Shipping Cost</h4>
                                            <div class="ml-auto font-weight-bold"> Free </div>
                                        </div>
                                        <hr/>
                                        <div style={{display:'flex'}} class="d-flex gr-total">
                                            <h5>Grand Total</h5>
                                            <div style={{marginLeft:'auto'}} class="ml-auto h5"> $ 388 </div>
                                        </div>
                                        <hr/>
                                    </div>
                           </Col>
                                <div class="col-12 d-flex shopping-box"> <a href="checkout.html" class="ml-auto btn hvr-hover">Place Order</a> </div>
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
