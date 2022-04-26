import React from 'react'
import{useState} from 'react'
import { connect } from 'react-redux'
import {AddProduct} from './actions'
import {RemoveProduct} from './actions'

const Card = ({Products,AddProduct,RemoveProduct}) => {
    const[item,setItem]=useState("")
    const submitHandler= async e =>{
        e.preventDefault();
        if(item!==""){
            await AddProduct({name:item});
            setItem("")
        }
        setItem("")
    }
  return (
    <center>
        <div className='card' style={{"width":'20rem'}}>
            <div className='card-body'>
                <form onSubmit={submitHandler}>
                    <input type="text" className='text-center'placeholder='Add Product' value={item}
                    onChange={e=>setItem(e.target.value)} />
                    <button className='btn btn-success mt-3'>AddProduct</button>
                </form>
                {Products.map(product =>{
                       return(
                           <div className='item'>{product.name}
                           <span onClick={()=> RemoveProduct(product.name)} className='badge'>X</span>
                           </div>
                       )
                })}
            </div>
        </div>
    </center>
  )
}
const mapStateToProps=(state)=>({
    products : state
})
export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card);