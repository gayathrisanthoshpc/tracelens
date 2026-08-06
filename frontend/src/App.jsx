import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from "./components/Layout";

import CaseDetails from "./pages/CaseDetails";
import UploadEvidence from "./pages/UploadEvidence";


function App(){

return (

<BrowserRouter>

<Layout>

<Routes>


<Route
path="/"
element={
<Navigate to="/upload"/>
}
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

)

}


export default App;