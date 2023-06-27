import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:""})
  let navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
        const response= await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})

        })
        const json=await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter ValidCredentials")
        }
        if(json.success){
          localStorage.setItem("authtoken",json.authtoken)
          console.log(localStorage.getItem("authtoken"))
          navigate('/')
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
    <label htmlfor="exampleInputEmail1 ">Email address</label>
    <input type="email" style={{color:'white'}} className="form-control bg-dark"  placeholder="Enter email" name='email' value={credentials.email} onChange={onchange} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group text-white">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" style={{color:'white'}} className="form-control bg-dark"  placeholder="Password" name='password' value={credentials.password} onChange={onchange}/>
  </div>
 

  <button type="submit " className="btn btn-success m-3">Submit</button>
  <Link to='/createuser' className='m-3 btn btn-danger' >I'm a new user</Link>
</form>
</div>
    </>
  )
}  
  
