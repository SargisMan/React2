import styles from '../NotFound/notFound.module.css';
import Panda404 from '../../../../src/assets/pics/Panda404.jpg'

const NotFound =()=>{
    return (
        <div className={styles.notFound}>
            <h1>
               <img src={Panda404} alt="404"/>
            </h1>
        </div>
    )
}

export default NotFound;