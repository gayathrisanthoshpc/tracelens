import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CaseDetails from "./pages/CaseDetails";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/"
          element={<Dashboard />}
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