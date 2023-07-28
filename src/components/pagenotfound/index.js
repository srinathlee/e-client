import {Link} from 'react-router-dom'
import pagenotfound from '../assets/pagenotfound.jpg'
import './index.css'

const Pagenotfound=()=>{
    
    return(
        <div className="pagenot-bg-container">
            <img className="pagenot-img" src={pagenotfound}/>
            <Link><button className="pagenot-button">Go to home</button></Link>
        </div>
    )
}
export default Pagenotfound