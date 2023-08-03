

export default function Header() {
  return (
    <div className="bg-dark" >
     <div className="container p-1">
  <div className="d-flex flex-row mb-3 justify-content-center me-5">
    <div className="p2">
      <h1 className="text-light pt-5 px-4 ">Moments</h1>
    </div>
    <div className="p2">
    <img src="https://i0.wp.com/good2bsocial.com/wp-content/uploads/2017/08/podcasting.jpg?fit=1000%2C667&ssl=1" alt="mic" className=" img-thumbnail mt-3 " width="120" height="120"/>
    </div>
    <div className="p2">
    <h1 className="text-light pt-5 px-4">DanceMore</h1>
    </div>
  </div>
  <nav className="navbar ">
  <div className="container-fluid ">
    <form className="d-flex mx-auto ">
      <input className="form-control  rounded-pill border border-5 fs-2 ms-5" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-secondary ms-2" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
  </div>
  )
}
