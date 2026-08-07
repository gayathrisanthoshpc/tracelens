import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadEvidence from "./pages/UploadEvidence";
import CaseDetails from "./pages/CaseDetails";


function App(){

return (

<BrowserRouter>

<Routes>


{/* Login Page */}

<Route
path="/"
element={<Login/>}
/>



{/* Dashboard + Sidebar Layout */}

<Route

path="/dashboard"

element={

<Layout>

<Dashboard/>

</Layout>

}

/>



<Route

path="/upload"

element={

<Layout>

<UploadEvidence/>

</Layout>

}

/>



<Route

path="/case/:caseId"

element={

<Layout>

<CaseDetails/>

</Layout>

}

/>



</Routes>

</BrowserRouter>

);

}


export default App;