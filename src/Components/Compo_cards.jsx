import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import university1 from "../assets/images/University1png.png"
import university2 from "../assets/images/University2png.png"
import university3 from "../assets/images/University3png.png"
import university4 from "../assets/images/University4png.png"
import { useNavigate } from "react-router-dom";



export default function Cards() {
  const universities = useNavigate();
  return (

        <Container className=" mt-4">
            <div id="Heading-of-cards"> 

 <h1>Partner Universities </h1>
 <hr id="Cards_hr" />
 </div>


<div id="cards" className=" row align-items-center justify-content-center gap-5 mt-5"  >
    <Card className=" col-lg-3 col-md-6 col-12 CardHome" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={university1} />
      <Card.Body>
        <Card.Title>Teeside University, UK</Card.Title>
        <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident earu
        </Card.Text>
      <Button variant="primary" id="Readmore-btn" onClick={()=> universities("/universities")} >Read More →</Button>
      </Card.Body>
    </Card>





        <Card className=" col-lg-3 col-md-6 col-12 CardHome" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={university2} />
      <Card.Body>
        <Card.Title>Management 
Singapore</Card.Title>
        <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident earu
        </Card.Text>
    <Button variant="primary" id="Readmore-btn" onClick={()=> universities("/universities")} >Read More →</Button>
      </Card.Body>
    </Card>




        <Card className=" col-lg-3 col-md-6 col-12 CardHome" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={university3} />
      <Card.Body>
        <Card.Title>Bangor University, UK</Card.Title>
        <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident earu
        </Card.Text>
      <Button variant="primary" id="Readmore-btn" onClick={()=> universities("/universities")} >Read More →</Button>
      </Card.Body>
    </Card>





        <Card className=" col-lg-3 col-md-6 col-12 CardHome" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={university4} />
      <Card.Body>
        <Card.Title>University Sunder, UK</Card.Title>
        <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident earu
        </Card.Text>
        <Button variant="primary" id="Readmore-btn" onClick={()=> universities("/universities")} >Read More →</Button>
      </Card.Body>
    </Card>

</div>
    
    </Container>
  );
}

