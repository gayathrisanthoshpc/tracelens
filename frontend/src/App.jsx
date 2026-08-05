import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import UploadEvidence from "./pages/UploadEvidence";
import CaseDetails from "./pages/CaseDetails";


function App() {


  return (

    <BrowserRouter>


      <Routes>


        <Route path="/" element={<Layout/>}>


          <Route 
            index 
            element={<Dashboard/>} 
          />


          <Route
            path="upload"
            element={<UploadEvidence/>}
          />


          <Route
            path="case/:caseId"
            element={<CaseDetails/>}
          />


        </Route>


      </Routes>


    </BrowserRouter>

  );


}


export default App;