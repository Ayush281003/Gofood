import React, { useEffect, useState } from 'react'

import Card from '../components/Card'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  const [search, setsearch] = useState("")
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'

      }
    });
    response = await response.json()
    setfooditem(response[0])
    setfoodcat(response[1])
    //   console.log(response[0],response[1])

  }
  useEffect(() => {
    loaddata()
  }, [])


  return (
    <div>
      <div> <Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption ' style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2 bg-dark text-white " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
                <button className="btn btn-outline-success text-white bd-scuccess" type="submit">Search</button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60?burger" className="d-block w-100" alt="..." style={{ height:"600px", width:"auto", objectFit: "fill" }} />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60?pastry" className="d-block w-100" alt="..." style={{height:"600px", width:"auto", objectFit: "contain !important" }} />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?spring" className="d-block w-100" alt="..." style={{height:"600px", width:"auto", objectFit: "contain !important" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodcat !== []
            ? foodcat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3 text-white'>{data.CategoryName}</div>
                  <hr className='text-white' />
                  {
                    fooditem !== []
                      ?
                      fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                        .map(filteritems => {
                          return (
                            <div key={filteritems._id} className='col-12 col-md-12 col-lg-3'>
                              <Card fooditem={filteritems}
                                options={filteritems.options[0]}
                                 />
                            </div>
                          )
                        }) : <div> No such data Found</div>
                  }
                </div>
              )
            }) : " "

        }

      </div>


      <div><Footer /></div>
    </div>


  )
}
