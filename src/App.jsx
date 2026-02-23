import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Pages/Home"
import Contanct from "../src/Pages/Contant"

import "./App.css"
import "./index.css"
import ApplyForm from "./Pages/applyForm";
import Foundation from "./Pages/Foundation";
import UniversityOverView  from "./Pages/University-OverView"
import ServiceUnavailable from "../src/Components/Compo_error"


function App() {


  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contanct/>}/>

  <Route path="/apply" element={<ApplyForm/>}/>
 <Route path="/Foundation" element={<Foundation/>}/>
 <Route path="/universities" element={<UniversityOverView/>}/>
 <Route path="/unavailable" element={<ServiceUnavailable/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App
