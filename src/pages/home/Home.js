import styles from './Home.module.scss';

import Subnav from "../../components/Subnav/Subnav";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";
import Footer from "../../components/Footer/Footer";

function Home() {
    return ( 
        <div className="Home">
            <Subnav/>
            <Header/>
            <div className={styles.bodyContainer}> 
                <Slide/>
            </div>
            <Footer/>
        </div>
     );
}

export default Home;