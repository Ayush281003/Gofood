import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption ' style={{zIndex:"10"}}>
    <form className="d-flex">
        <input className="form-control me-2 bg-dark " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white bd-scuccess" type="submit">Search</button>
      </form>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60?pastry" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?spring" className="d-block w-100" alt="..."/>
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
  )
}
