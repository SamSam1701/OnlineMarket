import styles from "./Subnav.module.scss";
import { Col, Row, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Subnav() {
    return (
      <div className={styles.maintop}>

        <div className={styles.containerFluid}>
          <Row>
            <Col lg={18} md={12} sm={24} xs={24}>
              <div className={styles.rightInfoBox}>
              <FontAwesomeIcon icon={faPhone} />
               <p>+84 3537 411 56</p>
               <FontAwesomeIcon icon={faEnvelope} />
                <p>FreshFood@gmail.com</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24}>
                <div className={styles.loginBox}>
                    <Button>Đăng nhập</Button>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Subnav;



