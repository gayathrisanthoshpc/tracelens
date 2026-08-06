import {
BrowserRouter,
Routes,
Route,
Navigate
} from "react-router-dom";


import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import UploadEvidence from "./pages/UploadEvidence";
import CaseDetails from "./pages/CaseDetails";



function App(){


return (

<BrowserRouter>


<Layout>


<Routes>


<Route

path="/"

element={<Navigate to="/dashboard"/>}

/>



<Route

path="/dashboard"

element={<Dashboard/>}

/>



<Route

path="/upload"

element={<UploadEvidence/>}

/>



<Route

path="/case/:caseId"

element={<CaseDetails/>}

/>



</Routes>


</Layout>


</BrowserRouter>

);


}


export default App;