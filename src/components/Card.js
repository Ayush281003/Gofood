import React,{useEffect, useRef, useState} from 'react'
import { useDispatchcart,useCart } from './ContextReduxer';
export default function Card(props) {
  let dispatch=useDispatchcart()
  let data=useCart()
  const priceref=useRef()
  let options=props.options;
  let PriceOptions=Object.keys(options)

  const [qty, setqty] = useState(1)
  const [size, setsize] = useState("")
  const handleAddtoCart=async()=>{
    await dispatch({type:"Add",id:props.fooditem.id,name:props.fooditem.name,price:finalprice,qty:qty,size:size})
    console.log(data)
  }

  let finalprice=qty*parseInt(options[size])
  useEffect(()=>{
    setsize(priceref.current.value)
  })
  return (
    <div>
      <div className='row'>
         <div className='col-md-12'>
      <div class="card mt-3 bg-dark" style={{"width": "18rem;","maxHeight":"395px" }}>
  <img src={props.fooditem.img} class="card-img-top" alt="..." style={{height:"180px" ,objectFit:"fill"}}/>
  <div class="card-body">
    <h5 class="card-title text-white">{props.fooditem.name}</h5>
    <p class="card-text text-white">Some quick example text to build </p>
    <div className='container-fluid'>
       <select className='m-2 h-10 w-10 bg-success text-white' onChange={(e)=>setqty(e.target.value)}>
          {Array.from(Array(6),(e,i)=>{
            return(
              <option key={i+1} value={i+1} >{i+1}</option>
            )
          })}
       </select>

       <select className='m-2 h-10 w-10 bg-success text-white' ref={priceref} onChange={(e)=>setsize(e.target.value)}>
                    {PriceOptions.map((data)=>{
                      return (<option className='text-white' key={data} value={data}>{data}</option>)
                    })}
       </select>
       <div className='d-inline fs-6 text-white'> 
       RS. {finalprice}/-
       </div>
    </div>
    <hr className='text-white'>
    </hr>
    <div>
      <button className='btn btn-success justify-content-center  text-white' onClick={handleAddtoCart}> Add to Cart</button>
    </div>
  
  </div>
  
</div></div>
</div>
    </div>
  )
}
