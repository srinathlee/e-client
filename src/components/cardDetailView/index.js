import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import { useEffect ,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
import * as helper from '../../helper/helper.js'
import {appStore} from '../../store/store'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProductItemDetails =()=> {
  const {removeWishItem}=appStore((state)=>state)
  const {addCartItem,cart,itemIncrement,wishList,addWishItem}=appStore((state)=>state)
    const {id}=useParams() 

    const [state,setState] = useState({
      isLiked:false,
    quantity:0,
    productData: {},
    apiStatus: apiStatusConstants.initial
    })
     
    useEffect(()=>{GetProductData()},[])


    const GetProductData = async () => {
    
      setState({...state,apiStatus:apiStatusConstants.inProgress})
      const response=await helper.getProduct(id)
      if (response.status===200) {
      const fetchedData = await response.data
      setState({...state,
        productData: fetchedData.data[0],
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status >299) {
      setState({...state,
        apiStatus: apiStatusConstants.failure,
      })
    }
  }


 

 const  renderLoadingView = () => (
    <div className="products-details-loader-container">
      <ThreeDots color="black" height="50" width="50" />
    </div>
  )

 const renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <Link to="/products"><button type="button" className="button">
        Continue Shopping
      </button></Link>
    </div>
  )

  const onDecrementQuantity = () => {
    const {quantity} = state
    if (quantity >= 1) {
      setState(prevState => ({...state,quantity: prevState.quantity - 1}))
    }
  }

  const onIncrementQuantity = () => {
    setState(prevState => ({...state,quantity: prevState.quantity + 1}))
    console.log(state.quantity)
    
  }

  // _________________________________cart__________________________________________

  
  const addToCart=(event)=>{
    const {quantity}=state
    if(quantity==0){
      alert("select quantity")
    }
    else{
    const {id,imageUrl,title,brand,price}=state.productData
    const itemExist=cart.find((ele)=>ele.id===id)
    if(itemExist){
      console.log("incremented")
      itemIncrement(id)
    }
    else{
     const cartItem={
     id,imageUrl,title,brand,quantity,price,imageUrl
    }
    addCartItem(cartItem)
  }
}
  }


  // _________________________________wishlist__________________________________________


  const removeWish=()=>{

    removeWishItem(id)
    setState({...state,
      isLiked: false,
    })
  }



  const addToWishlist=()=>{

      setState({...state,
        isLiked: true,
      })
    
    const {id,imageUrl,title,brand,price}=state.productData
    const wishItem={
      id,imageUrl,title,brand,price,imageUrl
     }
     const itemExist=wishList.find((ele)=>ele.id===id)
     if(!itemExist)
     addWishItem(wishItem)


  }
  console.log(wishList)



 const renderProductDetailsView = () =>  {
        const {productData,quantity,isLiked} =state
        const {
          brand,
          imageUrl,
          price,
          rating,
          title
        } = productData
        return (
          <div className="product-details-success-view">
            <div className="product-details-container">
              <img src={imageUrl} alt="product" className="product-image" />
              {
                isLiked? <AiFillHeart onClick={removeWish} className='product-wishlist-icon'/>:<AiOutlineHeart onClick={addToWishlist} className='product-wishlist-icon'/>
              }
              <div className="product">
                <h1 className="product-name">{title}</h1>
                <p className="price-details">Rs {price}/-</p>
                <div className="rating-and-reviews-count">
                  <div className="detail-product-rating-container">
                    <p className="rating">{rating}</p>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                      alt="star"
                      className="star"
                    />
                    
                  </div>
                  {/* <p className="reviews-count">{totalReviews} Reviews</p> */}
                </div>
                {/* <p className="product-description">{description}</p> */}
                {/* <div className="label-value-container">
                  <p className="label">Available:</p>
                  <p className="value">{availability}</p>
                </div> */}
                <div className="label-value-container">
                  <p className="label">Brand:</p>
                  <p className="value">{brand}</p>
                </div>
                <hr className="horizontal-line" />
                <div className="quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onDecrementQuantity}
                  >
                    <BsDashSquare className="quantity-controller-icon" />
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onIncrementQuantity}
                  >
                    <BsPlusSquare className="quantity-controller-icon" />
                  </button>
                </div>
                <button onClick={addToCart}
                  type="button"
                  className="button add-to-cart-btn"
                >
                  ADD TO CART
                </button>

                <button onClick={addToWishlist}
                  type="button"
                  className="button add-to-wishlist-btn"
                >
                  ADD TO WISHLIST
                </button>
              </div>
            
            
            </div>
            {/* <h1 className="similar-products-heading">Similar Products</h1>
            <ul className="similar-products-list">
              {similarProductsData.map(eachSimilarProduct => (
                <SimilarProductItem
                  productDetails={eachSimilarProduct}
                  key={eachSimilarProduct.id}
                />
              ))}
            </ul> */}
           <Link to="/products"> <button className='button all-products-btn'>All products</button></Link>
          </div>
        )
      }

   
  


 const renderProductDetails = () => {
    const {apiStatus} = state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductDetailsView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

    return (
      <>
        <div className="product-item-details-container">
          {renderProductDetails()}
        </div>
      </>
    )
  }



export default ProductItemDetails
