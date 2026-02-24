import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import sticker1 from "../assets/images/sticker1.png";
import sticker2 from "../assets/images/sticker3.png";
import sticker3 from "../assets/images/sticker2.png";
import frame79 from "../assets/images/Frame79.png";
import TacherNo1 from "../assets/images/TacherNo1.png";
import TacherNo2 from "../assets/images/TacherNo2.png";
import TacherNo3 from "../assets/images/TacherNo3.png";
import TacherNo4 from "../assets/images/TacherNo4.png";
import bigImg from "../assets/images/big-img.png"
import Device from "../assets/images/devices.svg"
import Work from "../assets/images/workspace_premium.svg"
import school from "../assets/images/school.svg"
import chartPaie from "../assets/images/pie-chart.svg"
import boy1IMG from "../assets/images/Mask group (1).png"
import boy2IMG from "../assets/images/Mask group (2).png"
import boy3IMG from "../assets/images/Mask group (3).png"
import boy4IMG from "../assets/images/Mask group.png"
export default function Layout() {
  return (
    <>
      <Container className=" mt-5">
        <div className="row align-items-center justify-content-center">
          <div className=" col-lg-6">
            <Card.Title className=" text-lg-start text-center">
              About
            </Card.Title>
            <Card.Text className=" text-lg-start text-center">
              Management Development Institute of Singapore in Tashkent was
              established in 2007 by Uzbekistan Banking Association (UBA) and
              the Management Development Institute of Singapore (MDIS). Its
              permanent partners providing educational programmes - the Bangor
              University (UK) and Sunderland University (UK) are known as
              leading British universities placed in the Top 1000 World
              University Rankings. In addition, in the 2020 MDIS Tashkent signed
              a partnership agreement with a new UK partner - Teesside
              University.
            </Card.Text>
          </div>

          <div className="col-lg-6">
            <Card.Img variant="top" src={sticker1} />
          </div>
        </div>
      </Container>

      <Container className=" mt-5">
        <div className="row align-items-center justify-content-center flex-row-reverse">
          <div className=" col-lg-6">
            <Card.Title className=" text-lg-start text-center">
              Future Plans
            </Card.Title>
            <Card.Text className=" text-lg-start text-center">
              MDIS Tashkent is a young and ambitious institution that craves for
              academic environment by investing in a better quality equipment
              and introducing the latest technologies. The Financial Center, the
              Business Incubator, the Fashion and Design Laboratory, as al
              School of Jewelry Design and Management (JMDIS). In addition, MDIS
              Tashkent considers the possibility new areas of education as
              social sciences, engineering and healthcare services.
            </Card.Text>
          </div>

          <div className="col-lg-6">
            <Card.Img variant="top" src={sticker3} />
          </div>
        </div>
      </Container>

      <Container className=" mt-5">
        <div className="row align-items-center justify-content-center">
          <div className=" col-lg-6">
            <Card.Title className=" text-lg-start text-center">
              About
            </Card.Title>
            <Card.Text className=" text-lg-start text-center">
              Management Development Institute of Singapore in Tashkent was
              established in 2007 by Uzbekistan Banking Association (UBA) and
              the Management Development Institute of Singapore (MDIS). Its
              permanent partners providing educational programmes - the Bangor
              University (UK) and Sunderland University (UK) are known as
              leading British universities placed in the Top 1000 World
              University Rankings. In addition, in the 2020 MDIS Tashkent signed
              a partnership agreement with a new UK partner - Teesside
              University.
            </Card.Text>
          </div>

          <div className="col-lg-6">
            <Card.Img variant="top" src={sticker2} />
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <Row className="g-4 justify-content-center align-items-center align-content-md-center gap-5 gap-div">
          <Col xs={12} md={6} lg={4} className="big-boss-col p-0">
            <div className="bg-img">
              <div className="inner-div">
                <div className="second-inner">
                  <p>BACHELOR’S PROGRAMS </p>
                  <p>→</p>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4} className="big-boss-col p-0">
            <div className="bg-img">
              <div className="inner-div">
                <div className="second-inner">
                  <p>BACHELOR’S PROGRAMS </p>
                  <p>→</p>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4} className="big-boss-col p-0">
            <div className="bg-img">
              <div className="inner-div">
                <div className="second-inner">
                  <p>BACHELOR’S PROGRAMS </p>
                  <p>→</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="main-contener-of-teacers">


            <div id="Heading-of-cards"> 

<h1 > Academic leadership</h1>
 <hr id="Cards_hr" />
 </div>





        <Row className=" justify-content-center align-items-center p-2 main-row ">
          <Col>
            <img className="imgae-of-tcr" src={TacherNo1} alt="" />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>Mrs. Yuliya Paramonova</Card.Title>
              <Card.Text>Department: Business and Management</Card.Text>
              <Card.Text>Email:yuparamonova@mdis.uz</Card.Text>
              <Button type="button" className="secondary-btn">
                Contact 📞
              </Button>
            </Card.Body>
          </Col>
        </Row>

        <Row className=" justify-content-center align-items-center p-2 main-row ">
          <Col>
            <img className="imgae-of-tcr" src={TacherNo2} alt="" />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>Dr.Timur K. Muminov</Card.Title>
              <Card.Text>Department: Business and Management</Card.Text>
              <Card.Text>Email:tmuminov@mdis.uz</Card.Text>
              <Button type="button" className="secondary-btn">
                Contact 📞
              </Button>
            </Card.Body>
          </Col>
        </Row>

        <Row className=" justify-content-center align-items-center p-2 main-row ">
          <Col>
            <img className="imgae-of-tcr" src={TacherNo3} alt="" />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>Dr. Shukhrat Shadmonov</Card.Title>
              <Card.Text>Department: Business and Management</Card.Text>
              <Card.Text>Email:shshadmanov@mdis.uz</Card.Text>
              <Button type="button" className="secondary-btn">
                Contact 📞
              </Button>
            </Card.Body>
          </Col>
        </Row>

        <Row className=" justify-content-center align-items-center p-2 main-row ">
          <Col>
            <img className="imgae-of-tcr" src={TacherNo4} alt="" />
          </Col>

          <Col>
            <Card.Body>
              <Card.Title>Dr. Deniza Alieva</Card.Title>
              <Card.Text>Department: Business and Management</Card.Text>
              <Card.Text>Email:dalieva@mdis.uz</Card.Text>
              <Button type="button" className="secondary-btn">
                Contact 📞
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>

<Container className=" position-relative">

    
                  <img
            className="d-block w-100"
            src={bigImg}

          />
      
<Row className=" position-absolute   d-flex justify-content-between" style={{left: "18%", top:"30%"}}>

<Col lg={3} className="width-col">

<div className="inner-tetx-p">
                <img
            className="icons-width"
            src={school}/>
<p>5200+ <br/>  Students</p>
            </div>

</Col>
<Col lg={3} className="width-col">

<div className="inner-tetx-p">
                <img
           className="icons-width"
            src={Device}/>

<p>Graduate <br/> Employability</p>

            </div>
         

</Col>
<Col lg={3} className="width-col">

<div className="inner-tetx-p">
                <img
   className="icons-width"
            src={Work}/>
<p>Master’s <br/> Programmes</p>
            </div>

</Col>
<Col lg={3} className="width-col">
<div className="inner-tetx-p">
                <img
   className="icons-width"
            src={chartPaie}/>
            <p>Updergraduate <br/> Programmes </p>

</div>
</Col>

</Row>


</Container>




<Container className=" mt-5">

              <div id="Heading-of-cards"> 

<h1 > Wall of Fame</h1>
 <hr id="Cards_hr" />
 </div>


<Row className=" justify-content-center align-content-center justify-content-md-center gap-4 mt-4">
<Col lg={3} md={4} className="width-wall-of-fame">
<div >

<img src={boy1IMG} alt="" />
<p className=" ms-5 fw-bold">Makhamdnozimov</p>
</div>
</Col>

<Col lg={3} md={4} className="width-wall-of-fame">
<div>
<img src={boy2IMG} alt="" />
<p className=" ms-5 fw-bold">Petrova Rada</p>
</div>
</Col>


<Col lg={3} md={4} className="width-wall-of-fame">
<div>
<img src={boy3IMG} alt="" />
<p className=" ms-5 fw-bold ps-3">Ibragimova</p>
</div>
</Col>


<Col lg={3} md={4} className="width-wall-of-fame">
<div>
<img src={boy4IMG} alt="" />
<p className=" ms-5 fw-bold ps-4">Zokhidov 
</p>
</div>
</Col>



</Row>

</Container>



    </>
  );
}
