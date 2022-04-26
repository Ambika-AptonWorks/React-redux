export const AddProduct =(value)=> async dispatch =>{
    dispatch({
     type:"Add",
     payload:value
    })
}
export const RemoveProduct =(value)=> async dispatch =>{
    dispatch({
     type:"Remove",
     payload:{name:value}
    })
}