import {AiFillStar} from 'react-icons/ai'
import './index.css'


const ProductCard=(props)=>{
   const {rating,imageUrl,price,brand,title}=props.each

    return(
        <div className='product-card'>
                 <img className='product-card-img' src={imageUrl}/>
            <div className='product-card-description'>
                    <h1 className='product-card-name'>{title}</h1>
                    <p className='product-company'>{brand}</p>
                  <div className='product-price-rating'>
                       <p className='product-price'>{price}</p>
                    <div className="product-rating-container">
                        <p className='product-rating'>{rating}</p>
                       <AiFillStar className='product-star'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard