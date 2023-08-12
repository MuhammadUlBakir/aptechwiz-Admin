import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const SellingStock = () => {
  //-----------------
  const [data, Setdata] = useState([]);
  //---------------
  const Getproducts = async () => {
    try {
      const Productdata = await axios.get("https://tiny-pink-loafers.cyclic.app/api/getproduct");
      Setdata(Productdata.data.Productdata);
    } catch (error) {
      console.log(error);
    }
  };
  //-------------
  useEffect(() => {
    Getproducts();
  }, []);
  //---------------
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <Sidebar />
          {/* End Sidebar scroll*/}
        </aside>
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <Header />
          {/*  Header End */}
          <div className="container-fluid">
            <div className="card">
              <h5 className="card-title fw-semibold mt-3 ml-5 text-center" style={{fontWeight : "bolder"}}>
              Selling Stock
              </h5>
              <div className="card-body">
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Sno#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Total Stock</th>
                                              <th scope="col">Remaining Stock</th>
                                            
                        <th scope="col">Stock Progress</th>
                      </tr>
                    </thead>
                                      <tbody>
                                          {data.map((elm, ind) => {
                                              return (
                                                  <>
                                                      <tr>
                                                          <td>{ind + 1}</td>
                                                          <td>{elm.productname}</td>
                                                          <td>{elm.date}</td>
                                                          <td>{elm.productcategory}</td>
                                                          <td>{elm.totalstock}</td>
                                                          <td>{elm.currentstock}</td>
                                                          <td><ProgressBar
                                          variant="success"
                                                              animated
                                                              style={{width : "150px"}}
                                          now={elm.currentstock / elm.totalstock * 100}
                                        /></td>
                                                  </tr>
                                                  </>
                                              )
                                          })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingStock;
