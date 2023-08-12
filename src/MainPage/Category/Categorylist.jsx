import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import Deleteicon from "remixicon-react/DeleteBin2LineIcon";
import Editicon from "remixicon-react/Edit2LineIcon";
import Addicon from "remixicon-react/AddLineIcon";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Categorylist = () => {
  //---------------
  const [data, Setdata] = useState([]);
  
  //---------------
  const Getcategory = async () => {
    const Category = await axios.get("https://tiny-pink-loafers.cyclic.app/Readcategory");
    Setdata(Category.data.Categorydata);
  };
  //----------------
  useEffect(() => {
    Getcategory();
  }, []);
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
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">Category list</h5>
                <div className="table-responsive mt-4">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4" >
                      <tr>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0" style={{fontSize : "17px"}}>Sno#</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0"style={{fontSize : "17px"}}>Category</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0"style={{fontSize : "17px"}}>Status</h6>
                        </th>
                       
                      </tr>
                                      </thead>
                                      <th></th>
                    <tbody>
                      {data.map((elm, ind) => {
                        return (
                          <>
                            <tr key={ind}>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">{ind + 1}</h6>
                              </td>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-1">
                                  {elm.categoryname}
                                </h6>
                              </td>

                              <td className="border-bottom-0">
                                <div className="d-flex align-items-center gap-2">
                                  <span className="btn btn-success">
                                    {elm.status}
                                  </span>
                                </div>
                              </td>
                           
                            </tr>
                          </>
                        );
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

export default Categorylist;
