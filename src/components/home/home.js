import Header from '../header/header.js'
import './home.css'
import {AiFillStar} from 'react-icons/ai'
import shirt from '../assets/similarcards/shirt.jpg'
import tshirt from '../assets/similarcards/tshirt.jpg'
import spets from '../assets/similarcards/spets.jpg'
import handcraft from '../assets/similarcards/handcraft.jpg'
import {Link} from 'react-router-dom'

const Home=()=>{


    return (
        <>
            <Header/>
            <div className='home-container'>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-desktop-img"/>
            <div className="home-content">
                <h1 className="home-heading">Any variation that fits your Imagination</h1>
                <p className="home-description">
                  Fashion is part of the daily air and it does not quite help that it
                  changes all the time. Clothes have always been a marker of the era and
                  we are in a revolution. Your fashion makes you been seen and heard
                  that way you are. So, celebrate the seasons new and exciting fashion
                  in your own way.</p>
                  <a href="#similarproducts">
                  <button  type="button" className="shop-now-button">
                 Get your recomends
                  </button>
                  </a>
            
             </div>
          
           
              </div>


          <div id="similarproducts" className='similar-product-bg-container'>
            <h1 className='recomendations-heading'>Top Recomendations for you</h1>
           <div className='similar-products-container'>
                <div className='similar-card'>
                 <img alt="card-image" className='similar-card-img' src={shirt}/>
                 <div className='similar-card-description'>
                  <h1 className='similar-card-name'>Shirt</h1>
                  <p className='similar-company'>Livies</p>
                  <div className='similar-price-rating'>
                    <p className='similar-price'>$22.45</p>
                    <div className="rating-container">
                      <p className='rating'>3</p>
                       <AiFillStar className='star'/>
                    </div>

                  </div>

                 </div>
                </div>

                <div className='similar-card'>
                 <img alt="card-img-1" className='similar-card-img' src={tshirt}/>
                 <div className='similar-card-description'>
                  <h1 className='similar-card-name'>T-Shirt</h1>
                  <p className='similar-company'>Livies</p>
                  <div className='similar-price-rating'>
                    <p className='similar-price'>$12.45</p>
                    <div className="rating-container">
                      <p className='rating'>4</p>
                       <AiFillStar className='star'/>
                    </div>

                  </div>

                 </div>
                </div>

                <div className='similar-card'>
                 <img alt="card-img-2"  className='similar-card-img' src={spets}/>
                 <div className='similar-card-description'>
                  <h1 className='similar-card-name'>Spets</h1>
                  <p className='similar-company'>Gucci</p>
                  <div className='similar-price-rating'>
                    <p className='similar-price'>$42.45</p>
                    <div className="rating-container">
                      <p className='rating'>5</p>
                       <AiFillStar className='star'/>
                    </div>

                  </div>

                 </div>
                </div>

                <div className='similar-card'>
                 <img  alt="card-img-3"  className='similar-card-img' src={handcraft}/>
                 <div className='similar-card-description'>
                  <h1 className='similar-card-name'>Handcraft</h1>
                  <p className='similar-company'>Asha</p>
                  <div className='similar-price-rating'>
                    <p className='similar-price'>$232.45</p>
                    <div className="rating-container">
                      <p className='rating'>4</p>
                       <AiFillStar className='star'/>
                    </div>

                  </div>

                 </div>
               </div>

             </div>
             <Link to="/products">
           <button  className="shop-now-button" >View all products</button>
           </Link>

           </div>
                
        </>
    )
}
export default Home