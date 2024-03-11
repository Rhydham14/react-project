import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fname = searchParams.get('fname');
  return (
    
    <>
      <div className="container-fluid" id="dash">
        <div className="row">
          <Sidebar />
          <div className="col-sm-10">
            <div id="bdtxt">
              <h1 className="d-flex justify-content-center text-center">
                Welcome to
              </h1>
              <h1 className="text-danger text-center">Tetime</h1>
              <p className=" text-center">
                Invest time and technology with you bloging skill
              </p>
              <p>{fname}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;