import ProductStyle from './Producttype.module.scss'
import { Link } from "react-router-dom";

function Producttype() {
  return (
    <div
      style={{
        margin: 10,
        position: 'sticky',
        top: 10,
        height: 400,
      }}>
      <div className={ProductStyle.container} >
        <div className={ProductStyle.header}>
          <h1>Danh mục</h1>
        </div>
        <div className={ProductStyle.content}>
          <ul>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Rau củ</Link> </li>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Trái Cây</Link></li>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Hải Sản</Link></li>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Thực phẩm bảo quản</Link></li>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Ngũ cốc</Link></li>
            <li><Link to="/shop" style={{ color: '#03332f', fontSize: '18px' }}>Thịt Heo</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Producttype;