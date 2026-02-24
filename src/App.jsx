import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact"
import "./App.css";
import "./index.css";
import ApplyForm from "./Pages/applyForm";
import Foundation from "./Pages/Foundation";
import UniversityOverView from "./Pages/University-OverView";
import ServiceUnavailable from "../src/Components/Compo_error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact/>}/>
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/Foundation" element={<Foundation />} />
      <Route path="/universities" element={<UniversityOverView />} />
      <Route path="/unavailable" element={<ServiceUnavailable />} />
    </Routes>
  );
}

export default App;
