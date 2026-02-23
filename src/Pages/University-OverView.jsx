



import { useNavigate } from "react-router-dom";

export default function UniversityOverView() {
    const applyNow = useNavigate();
    const navigate = useNavigate();
  return (
<>

<div id="university-overview-page">
        
<div className="container-fluid py-5 bg-white">

  <div className="container">

     <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => navigate("/")}
                  >
                    Go Back
                  </button>

    <div className="row align-items-center">

      {/* LEFT SIDE CONTENT */}
      <div className="col-lg-5 mb-4 mb-lg-0">
        <h1 className="fw-bold display-5 mb-4">
          Global International University
        </h1>

        <p className="lead text-muted">
          Established in 1985, Global International University is recognized
          globally for academic excellence, research innovation, and strong
          industry partnerships.
        </p>

        <p className="text-muted">
          With over 15,000 students from 40+ countries, the university
          provides a dynamic and multicultural learning environment.
          Our programs are designed to equip students with practical
          knowledge, leadership skills, and global exposure.
        </p>

        <ul className="mt-4 text-muted">
          <li>120+ Undergraduate & Postgraduate Programs</li>
          <li>95% Graduate Employability Rate</li>
          <li>Modern Research & Innovation Labs</li>
          <li>Strong Global Industry Connections</li>
        </ul>

        <button className="btn btn-danger btn-lg px-4 mt-4 rounded-pill shadow" onClick={()=>applyNow("/apply")}>
          Apply Now
        </button>
      </div>


      {/* RIGHT SIDE CAROUSEL */}
      <div className="col-lg-7">

        <div
          id="universityCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          {/* BIG IMAGES */}
          <div className="carousel-inner rounded-4 shadow-lg overflow-hidden">

            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                className="d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>

          </div>

          {/* THUMBNAILS TOUCHING BOTTOM */}
          <div className="carousel-indicators position-static mt-3 justify-content-center">

            <button
              type="button"
              data-bs-target="#universityCarousel"
              data-bs-slide-to="0"
              className="active border-0 bg-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                className="rounded shadow"
                style={{ height: "90px", width: "150px", objectFit: "cover" }}
              />
            </button>

            <button
              type="button"
              data-bs-target="#universityCarousel"
              data-bs-slide-to="1"
              className="border-0 bg-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                className="rounded shadow"
                style={{ height: "90px", width: "150px", objectFit: "cover" }}
              />
            </button>

            <button
              type="button"
              data-bs-target="#universityCarousel"
              data-bs-slide-to="2"
              className="border-0 bg-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                className="rounded shadow"
                style={{ height: "90px", width: "150px", objectFit: "cover" }}
              />
            </button>

          </div>

        </div>
      </div>

    </div>
  </div>




  <div className="container mt-5 pt-5">

    <h2 className="text-center fw-bold mb-5">
      Our Successful Graduates
    </h2>

    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
          <img
            src="https://thumbs.dreamstime.com/b/doctor-working-laptop-medical-office-giving-thumbs-up-gesture-confident-male-desk-using-bright-gives-professional-woman-401546216.jpg"
            className="card-img-top"
     
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Ali Khan</h5>
            <p className="text-muted">Software Engineer at Google</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
          <img
            src="https://as1.ftcdn.net/jpg/05/44/05/68/1000_F_544056854_nEMhWcVpycc2UkWHT28FwsFYZszoEkeW.jpg"
            className="card-img-top"
       
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Ella Mewati</h5>
            <p className="text-muted">Business Analyst at Deloitte</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
          <img
            src="https://img.freepik.com/free-photo/male-entrepreneur-using-computer-while-working-office_637285-8680.jpg?semt=ais_user_personalization&w=740&q=80"
            className="card-img-top"
            
          />
          <div className="card-body text-center">
            <h5 className="fw-bold">Elburt </h5>
            <p className="text-muted">Data Scientist at Microsoft</p>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
</div>


</>
  );
}



