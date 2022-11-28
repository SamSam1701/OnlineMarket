import styles from "./Subnav.module.scss";
import { Col, Row, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHand, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom';

import {useState} from 'react';

function Subnav() {

  const [isActive, setIsActive] = useState(true);
  const faHandleClickLogin = ()=>{
    setIsActive(current => !current);
  }

    return (
      <div className={styles.maintop}>

        <div className={styles.containerFluid}>
          <Row>
            <Col lg={16} md={12} sm={24} xs={24}>
              <div className={styles.rightInfoBox}>
              <FontAwesomeIcon icon={faPhone} />
               <p>+84 3537 411 56</p>
               <FontAwesomeIcon icon={faEnvelope} />
                <p>FreshFood@gmail.com</p>
              </div>
            </Col>

            <Col lg={8} md={12} sm={24} xs={24}>
                <div className={styles.loginBox}>
                    <div className={isActive ? 'active' : 'disable'}>
                    <button style={{padding:'10px 16px', borderRadius:'4px', cursor:'pointer'}} onClick={faHandleClickLogin}>
                        Đăng Nhập
                     </button>
                    </div>

                    <div className={isActive ? 'disable' : 'active'}>
                    <FontAwesomeIcon icon={faUser} />
                    <p style={{padding:'0 10px'}}>User A</p>

                    <button style={{padding:'10px 16px', borderRadius:'4px'}}>
                        Đăng Xuất
                        </button>
                    </div>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Subnav;



