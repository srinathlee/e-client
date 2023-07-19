import ProductCard from "../productCard"
import { useEffect, useState } from "react"
import * as helpers from '../../helper/helper.js'
import {ThreeDots} from 'react-loader-spinner'

import './index.css'


const NorProducts=()=>{
    
    const productsdata=[
        {
          "_id": "64aec05fc1404564542933e5",
          "title": "Embroidered Net Gown",
          "brand": "Manyavar",
          "price": 62990,
          "id": 16,
          "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
          "rating": 3.2
        },
        {
          "_id": "64aec05fc1404564542933ed",
          "title": "Chronograph black Watch",
          "brand": "Fossil",
          "price": 6395,
          "id": 32,
          "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png",
          "rating": 3.8
        },
        {
          "_id": "64aec05fc140456454293401",
          "title": "Turmeric Powder",
          "brand": "Patanjali",
          "price": 1234,
          "id": 45,
          "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png",
          "rating": 2.8
        }
    ]

    const dataState={"LOADING":"loading","SUCCESS":"success","FAILURE":"failure"}


    const ProductsList=(details)=>{
        const [getData,setData]=useState("")
        const [state,setState]=useState("")

        useEffect(()=>{
                GetProductData()
                 },[])


        const GetProductData=async()=>{
            setState(dataState.LOADING)
            const result=await helpers.Products()
            if(result.status===200){
                setState(dataState.SUCCESS)
                setData(result.data.data.productsdata)
                RenderedData()
            }
            else{
              setState(dataState.FAILURE)
              FailureState()
            }
            
           }
        const LoadingState=()=>{
            return(
              <div className="loader-spinner">  <ThreeDots 
              height="80" 
              width="80" 
              radius="9"
              color="#000000" 
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
               /></div>
            )
        }

        const FailureState=()=>{
           return( <>
                   <p>failure</p>
                   </>
                )
        }   


        const ShowData=()=>{
            switch(state) {
                case dataState.LOADING:
                    return LoadingState()
                    break
                case dataState.SUCCESS:
                    return RenderedData()
                     break;
                case dataState.FAILURE:
                    return FailureState()
                    break;
                 }
        }
        const RenderedData=()=>{

           return( 
              <>{
                getData.map((each)=>(<ProductCard each={each} key={each._id}/>))
                }</>)

             }


        return(
           <>
           {
            ShowData()
           }
           </>
        )
    
    }



    return(
        <div className="normal-product-bg-container">
            {ProductsList(productsdata)}
        </div>
    )
}
export default NorProducts