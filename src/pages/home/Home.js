import styles from './Home.module.scss';

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";


function Home() {
    return ( 
        <div className="Home">
            <Subnav/>
            <Header/>
            <div className={styles.bodyContainer}> 
                <Slide/>
            </div>
        </div>
     );
}

export default Home;