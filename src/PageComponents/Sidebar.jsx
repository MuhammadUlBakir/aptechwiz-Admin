import React, { useState } from 'react';
import Addcategory from "remixicon-react/AddBoxLineIcon";
import Createproduct from "remixicon-react/ProductHuntLineIcon";
import Productview from "remixicon-react/Search2LineIcon";
import Productlist from "remixicon-react/ListSettingsLineIcon";
import Stockavail from "remixicon-react/StockLineIcon";
import Salesicon from "remixicon-react/MoneyDollarBoxLineIcon";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`left-sidebar ${collapsed ? 'd-none d-md-block' : ''}`}>
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img src="../assets/images/logos/dark-logo.svg" width={180} alt="" />
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" onClick={toggleSidebar}>
            <i className={`ti ${collapsed ? 'ti-menu' : 'ti-x'} fs-8`} />
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            {/* Home */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard" />
                </span>
                <span className="hide-menu" style={{ cursor: "pointer" }} onClick={() => navigate("/")}> Admin Dashboard</span>
              </a>
            </li>

            {/* Categories */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Categories</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" aria-expanded="false">
                <span>
                  <Addcategory />
                </span>
                <span className="hide-menu" style={{ cursor: "pointer" }} onClick={() => navigate("/addcategory")}>Add Category</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" style={{ cursor: "pointer" }} onClick={() => navigate("/categorylist")} aria-expanded="false">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Category List</span>
              </a>
            </li>

            {/* Products */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Products</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" onClick={() => navigate("/createproduct")} aria-expanded="false">
                <span>
                  <Createproduct />
                </span>
                <span className="hide-menu" style={{ cursor: "pointer" }}>Create Product</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" style={{ cursor: "pointer" }} onClick={() => navigate("/productview")} aria-expanded="false">
                <span>
                  <Productview />
                </span>
                <span className="hide-menu">Product view</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" style={{ cursor: "pointer" }} onClick={() => navigate("/productlist")} aria-expanded="false">
                <span>
                  <Productlist />
                </span>
                <span className="hide-menu">Product List</span>
              </a>
            </li>

            {/* Stocks */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Stocks</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" style={{ cursor: "pointer" }} onClick={() => navigate("/availability")} aria-expanded="false">
                <span>
                  <Stockavail />
                </span>
                <span className="hide-menu">Stock Availability</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" style={{ cursor: "pointer" }} onClick={() => navigate("/sellingstock")} aria-expanded="false">
                <span>
                  <Salesicon />
                </span>
                <span className="hide-menu">Sale Stock</span>
              </a>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
                <a href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</a>
              </div>
              <div className="unlimited-access-img">
                <img src="../assets/images/backgrounds/rocket.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
