import styles from './Producttype.module.scss'

import { Link } from "react-router-dom";

function Producttype() {
    return (
        <div className={styles.container}>
        <div className={styles.header}>
        <h1>Danh mục</h1>
        </div>
        <div className={styles.content}>
            <ul>
                <li><Link to="/shop" style={{color:'#03332f', fontSize:'18px'}}>Rau củ</Link> </li>
                <li><Link to="/shop" style={{color:'#03332f', fontSize:'18px'}}>Trái Cây</Link></li>
                <li><Link to="/shop" style={{color:'#03332f', fontSize:'18px'}}>Hải Sản</Link></li>
                <li><Link to="/shop" style={{color:'#03332f', fontSize:'18px'}}>Thịt</Link></li>
            </ul>
        </div>

        </div>
     );
}

export default Producttype;