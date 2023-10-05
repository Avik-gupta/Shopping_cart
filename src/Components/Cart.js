import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeProduct } from "../Redux/productSlice";


function Cart()
{
   const data = useSelector(state=>state.productCart.value)
   const dispatch = useDispatch();

   return<div className="container">
    <h1 style={{textAlign:'center',color:'red'}}>
      Show Cart Product: 
    </h1>   
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-striped">
         <thead>
           <tr> 
            <th>Sno</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Operation</th>
           </tr>
         </thead>
         <tbody>
           {data.map((pdata,index)=>{
            console.log(pdata);
            return<tr>
               <td>{index+1}</td>
               <td>{pdata.data.title}</td>
               <td>
                  <img src={pdata.data.thumbnail} height={80} width={80} 
                  alt="Image Not found" className="img-circle"/>
               </td>
               <td>{pdata.data.price}</td>
               <td>{pdata.data.brand}</td>
               <td>{pdata.data.category}</td>
               <td>
                <button className="btn btn-danger"
                onClick={()=>dispatch(decrementQty(pdata.data.id))}>-</button>
                &nbsp;&nbsp;
                {pdata.qty}
                &nbsp;&nbsp;
                <button className="btn btn-success"
                onClick={()=>dispatch(incrementQty(pdata.data.id))}>+</button>
               </td>
               <td>{pdata.data.price * pdata.qty}</td>

               <td>
                  <button className="btn btn-danger" 
                  onClick={()=>dispatch(removeProduct(pdata.data.id))}>
                     Remove Product
                  </button>
               </td>
            </tr>
            })
           }
         </tbody>
      </table>

    </div>

    
   </div>  
}
export default Cart;