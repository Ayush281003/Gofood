import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
        const response= await fetch("http://localhost:5000/api/createuser",{
            
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})

        })
        const json=await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter ValidCredentials")
        }
    }
        const onchange=(e)=>{
            setcredentials({...credentials,[e.target.name]:e.target.value})
        }
       


  return (
    <>
    <div className='container'>
    <form onSubmit={handlesubmit}>
    <div className="form-group text-white">
    <label htmlfor="exampleInputEmail1 ">Name</label>
    <input type="text" style={{color:'white'}} className="form-control bg-dark"  placeholder="Enter Name" name='name' value={credentials.name} onChange={onchange} />
  </div>
  <div className="form-group text-white">
    <label htmlfor="exampleInputEmail1 ">Email address</label>
    <input type="email" style={{color:'white'}} className="form-control bg-dark"  placeholder="Enter email" name='email' value={credentials.email} onChange={onchange} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group text-white">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" style={{color:'white'}} className="form-control bg-dark"  placeholder="Password" name='password' value={credentials.password} onChange={onchange}/>
  </div>
  <div className="form-group text-white">
    <label htmlfor="exampleInputPassword1">Address</label>
    <input type="text" style={{color:'white'}} className="form-control bg-dark"  name='geolocation' value={credentials.geolocation} onChange={onchange}/>
  </div>

  <button type="submit " className="btn btn-success m-3">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger' >Already a user</Link>
</form>
</div>
    </>
  )
}
