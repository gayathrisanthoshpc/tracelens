import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import UploadEvidence from "./components/UploadEvidence";

import CaseDetails from "./pages/CaseDetails";



function App() {


  return (

    <BrowserRouter>


      <Routes>


        <Route

          path="/"

          element={<UploadEvidence />}

        />



        <Route

          path="/case/:caseId"

          element={<CaseDetails />}

        />


      </Routes>


    </BrowserRouter>

  );

}



export default App;