import ProductCard from "../productCard"
import { useEffect, useState } from "react"
import * as helpers from '../../helper/helper.js'
import noprimedata from '../assets/noprimedata.jpg'
import {ThreeDots} from 'react-loader-spinner'

import './index.css'

const dataState={"LOADING":"loading","SUCCESS":"success","FAILURE":"failure"}

const NorProducts=()=>{

    const [getData,setData]=useState("")
    const [state,setState]=useState("")


 
        useEffect(()=>{
                GetProductData()
                 },[])


        const GetProductData=async()=>{
            setState(dataState.LOADING)
            const result=await helpers.Products()
            if(result.status===200){
                console.log(result)
                setState(dataState.SUCCESS)
                setData(result.data.data)
                console.log(result.data.data)
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


        const RenderedData=()=>{

           return( 
              <div className="products-container">
                



                <div className="primeproducts-bg-container">
                {
                    getData.primedata==null?"":<h1 className="primeproducts-heading">Prime Products</h1>
                }
                    
                    <div className="prime-container">
                {
                    getData.primedata==null?
                    <img className="no-prime-data-img" src={noprimedata}/>
                    :
                     getData.primedata.map((each)=>(<ProductCard each={each} key={each._id}/>))
                }
                   
                   </div>
                </div>
         <hr className="prime-normal-line"/>


                <div className="normalproducts-bt-container">
                    <h1 className="normalproduct-heading">All Products</h1>
                      <div className="allproducts-container">
                        {
                         getData.productsdata?.map((each)=>(<ProductCard each={each} key={each._id}/>))
                        }
                      </div>
                </div>
                
              </div>)

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

    return(
        <div>
               { ShowData()}
        </div>
    )
}
export default NorProducts