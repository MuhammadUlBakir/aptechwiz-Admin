import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import ProductCardList from "../../PageComponents/ProductCardList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Productview = () => {
  //---------------
    const [data, Setdata] = useState([]);
  //---------------
    const Productalldata = async () => {
        try {
            const getdata = await axios.get("https://tiny-pink-loafers.cyclic.app/api/getproduct");
            Setdata(getdata.data.Productdata);
        } catch (error) {
            console.log(error);
        }
    };
    //--------------
    useEffect(() => {
        Productalldata();
    },[])
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
            <div className="row">
                              {data.map((elm, ind) => {
                                  return (
                                      <>
                                       <div className="col-sm-6 col-xl-3">
          <div className="card overflow-hidden rounded-2">
            <div className="position-relative">
              <a href="javascript:void(0)"><img src={elm?.mainimage} className="card-img-top rounded-0" alt="..." /></a>
              <a href="javascript:void(0)" className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i className="ti ti-basket fs-4" /></a>                    </div>
            <div className="card-body pt-3 p-4">
                                                      <h6 className="fw-semibold fs-4">{elm?.productname}</h6>
              <div className="d-flex align-items-center justify-content-between">
                                                          <h6 className="fw-semibold fs-4 mb-0">$50 <span className="ms-2 fw-normal text-muted fs-3"><del>{elm?.productprice}</del></span></h6>
                <ul className="list-unstyled d-flex align-items-center mb-0">
                  <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                  <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                  <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                  <li><a className="me-1" href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                  <li><a className href="javascript:void(0)"><i className="ti ti-star text-warning" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
                                      </>
                )
            })}
       
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productview;
