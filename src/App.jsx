import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";

import Footer from "./layouts/footer/footer.jsx";
import Header from "./layouts/header/header.jsx";
import Slidebar from "./layouts/sidebar/slidebar.jsx";

import HomeApp from './pages/Dashboard/homeApp.jsx';
import "./App.css";
import Informacion from "./pages/Dashboard/count/informacion.jsx";
import CreateProject from "./pages/Dashboard/count/createProject.jsx";
import Project from "./pages/Dashboard/count/project.jsx";

function App() {
  return (
    <div className="App w-full h-full font-comic">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />

        <Route
          path="/:id"
          element={
            <div className="page-with-sidebar background h-dvh">
              <Slidebar />
              <div className="content ">
                <HomeApp />
              </div>
            </div>
          }
        />

        <Route
          path="/:id"
          element={
            <div className="page-with-sidebar background h-dvh">
              <Slidebar />
              <div className="content">
                <HomeApp />
              </div>
            </div>
          }
        />


        <Route
          path="/:id/informacion"
          element={
            <div className="page-with-sidebar background h-full">
              <Slidebar className="" />
              <div className="content px-10">
                <Informacion />
              </div>
            </div>
          }
        />


        <Route
          path="/:id/createProject"
          element={
            <div className="page-with-sidebar background h-dvh">
              <Slidebar className="" />
              <div className="content px-10">
                <CreateProject />
              </div>
            </div>
          }
        />
        
        <Route
          path="/:id/project/:id"
          element={
            <div className="page-with-sidebar background h-full">
              <Slidebar className="" />
              <div className="content px-10">
                <Project />
              </div>
            </div>
          }
        />


      </Routes>



      
    </div>
  );
}

export default App;
