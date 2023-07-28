import Header from '../header/header.js'
import NorProducts from '../normalproducts/index.js'
import './products.css'

const Products =()=>{


    return (
        <>
        <Header/>

        <div className='products-bg-container'>
        <NorProducts/>
        </div>
        
        
        </>
    )
}

export default Products