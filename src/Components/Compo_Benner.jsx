import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/Frame 136.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Benner() {
  const navigate = useNavigate();
  const navigateFoundation = useNavigate();
    const Development = useNavigate();

  return (
    <section id="BennerMain-Section">
      <Carousel id="CrosselAcces">
        <Carousel.Item>
                  <img
            className="d-block w-100 benner-img"
            src="https://images.unsplash.com/photo-1623632306901-e509641e7191?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYnJpZGdlJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Third slide"
          />
      
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 benner-img"
            src="https://c1.wallpaperflare.com/preview/294/960/948/university-student-graduation-photo-hats.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
      <img className="d-block w-100 benner-img" src={img1} alt="First slide" />
        </Carousel.Item>
      </Carousel>

      <div id="benner-top-contant">
        <h1>Where lifelong learnings begins</h1>

        <div
          className="d-flex justify-content-around  align-content-center"
          id="Button-area-on-benner"
        >
          <button onClick={() => navigate("/apply")}>Apply Now</button>
          <button onClick={() => navigateFoundation("/foundation")}>
            Foundation Year
          </button>
          <button  onClick={() => navigate("/unavailable")} >Transfer/Direct Entry</button>
          <button onClick={() => navigate("/unavailable")}  >Masters Programmes</button>
        </div>
      </div>
    </section>
  );
}
