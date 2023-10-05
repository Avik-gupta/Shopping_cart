import { useEffect, useState } from "react";
import WebAPI from "../Service/WebAPI";
import WebService from "../Service/WebService";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/productSlice";

function Home()
{
   const [product,setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    loadProduct();
  },[])

   var loadProduct = async ()=>{
      const response = await WebService.getAPICall(WebAPI.loadProducts);
     console.log("Response is : "+response);
     console.log("String Type : "+JSON.stringify(response));

     setProduct(response.data.products)
   }

   return<div className="container">
    <h1 style={{textAlign:'center', color:'red'}}>
         View All Products : 
     </h1>
     <div className="row">
       
         {product.map((data)=>{
            return<div className="col-md-3" style={{marginTop:30}}>
               <img src={data.thumbnail} height={80} width={80}
               className="img-circle" alt="Image Not Found..."/>
               <br/>
               <span>Name : {data.title}</span>
               <br/>
               <span>Brand : {data.brand}</span>
               <br/>
               <span>Category : {data.category}</span>
               <br/>
               <span>Rating : {data.rating}</span>
               <br/>
               <button className="btn btn-success" onClick={()=>dispatch(addProduct(data))}>
                  Add Cart
               </button>
            </div>
         })}
     </div>
   </div>  
}
export default Home;