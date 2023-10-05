const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name:"mycarts",
    initialState:{
       value:[]
    },
    reducers:{
        addProduct:(state,action)=>{
           var data = action.payload;
           state.value = [...state.value,{data,qty:1}];
        },

        removeProduct:(state,action)=>{
            var id = action.payload;
            //console.log("Product Id is : "+id);
           state.value = state.value.filter(obj=>obj.data.id != id)
        },
        incrementQty:(state,action)=>{
           var id =action.payload;
           state.value = state.value.map(obj=>obj.data.id == id ? {...obj,qty:obj.qty+1}  : obj);

        },
        decrementQty:(state,action)=>{
            var id =action.payload;
            state.value = state.value.map(obj=>obj.data.id == id ? {...obj,qty:obj.qty-1}  : obj);
        },
        emptyCart:(state,action)=>{

        }
    }
})
export const {addProduct,removeProduct,incrementQty,decrementQty,emptyCart} = slice.actions;
export default slice.reducer;