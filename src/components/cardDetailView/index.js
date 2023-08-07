import Cookies from 'js-cookie'
import {ThreeDots} from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import { useEffect ,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
import * as helper from '../../helper/helper.js'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProductItemDetails =()=> {
    const {id}=useParams() 
    const [state,setState] = useState({
    productData: {},
    apiStatus: apiStatusConstants.initial
    })

    useEffect(()=>{GetProductData()},[])


    const GetProductData = async () => {
    
      setState({apiStatus:apiStatusConstants.inProgress})
      const response=await helper.getProduct(id)
      console.log(response)
    if (response.status==200) {
      const fetchedData = await response.data
      console.log(fetchedData)
      setState({
        productData: fetchedData.data[0],
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status >299) {
      setState({
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

//   onDecrementQuantity = () => {
//     const {quantity} = this.state
//     if (quantity > 1) {
//       this.setState(prevState => ({quantity: prevState.quantity - 1}))
//     }
//   }

//   onIncrementQuantity = () => {
//     setState(prevState => ({quantity: prevState.quantity + 1}))
//   }



 const renderProductDetailsView = () =>  {
        const {productData} =state
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
                {/* <div className="quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={this.onDecrementQuantity}
                  >
                    <BsDashSquare className="quantity-controller-icon" />
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={this.onIncrementQuantity}
                  >
                    <BsPlusSquare className="quantity-controller-icon" />
                  </button>
                </div> */}
                <button
                  type="button"
                  className="button add-to-cart-btn"
                  // onClick={onClickAddToCart}
                >
                  ADD TO CART
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
           <Link to="/products"> <div className='button all-products-btn'>All products</div></Link>
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
