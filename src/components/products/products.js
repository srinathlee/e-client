import Header from '../header/header.js'
import NorProducts from '../normalproducts/index.js'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './products.css'

const Products =()=>{


    return (
        <>
        <Header/>

        <div className='products-bg-container'>
        {
        NorProducts()
        }
        </div>
        
        
        </>
    )
}

export default Products