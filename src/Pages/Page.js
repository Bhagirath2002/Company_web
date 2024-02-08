import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";


function Page() {
  return (
    <BrowserRouter>
      <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         
              <Link to="/app">Redirect to App JS</Link>
            
        </div>
        <Navbar/>

        <Routes>
          <Route exact path="/app" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Page;
