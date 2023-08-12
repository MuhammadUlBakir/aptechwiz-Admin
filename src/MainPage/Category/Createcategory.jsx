import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import Deleteicon from "remixicon-react/DeleteBin2LineIcon";
import Editicon from "remixicon-react/Edit2LineIcon";
import Addicon from "remixicon-react/AddLineIcon";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Createcategory = () => {
  //---------------
  const [data, Setdata] = useState([]);
  const [Categoryname, SetCategoryname] = useState("");
  const [togglebtn, Settogglebtn] = useState(true);
  const { userid, Setuserid } = useState("");
  const [id, Setid] = useState("");
  //---------------
  const Getcategory = async () => {
    const Category = await axios.get("https://tiny-pink-loafers.cyclic.app/Readcategory");
    Setdata(Category.data.Categorydata);
  };
  const AddCategory = async () => {
    const Categorydata = await axios.post("https://tiny-pink-loafers.cyclic.app/api/Createcategory", {
      Categoryname: Categoryname,
    });
    if (
      Categorydata.data.success === true &&
      Categorydata.data.status === 201
    ) {
      alert("Category Added Successfully");

      Getcategory();
    } else {
      alert("Category Not Add");
    }
  };
  //----------------
  const Edittoggle = async (val, name) => {
    Settogglebtn(false);
    SetCategoryname(name);
    const Setid = localStorage.setItem("userid", val);
  };
  const Editbtn = async () => {
    const getuserid = localStorage.getItem("userid");
    try {
      const Editcategory = await axios.put("https://tiny-pink-loafers.cyclic.app/api/editcategory", {
        Editdata: Categoryname,
        userid: getuserid,
      });
      console.log(Editcategory);
      if (
        Editcategory.data.success === true &&
        Editcategory.data.status === 201
      ) {
        alert("Category Edit");
        Settogglebtn(true);
        Getcategory();
        SetCategoryname("");
      } else {
        alert("Plz Try Again");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //---------------
  const DeleteCategory = async (val) => {
    try {
      if (val) {
        const DeleteCategory = await axios.delete(`https://tiny-pink-loafers.cyclic.app/api/deletecategory/${val}`);
        if (
          DeleteCategory.data.status === 201 &&
          DeleteCategory.data.success === true
        ) {
          Getcategory();
          alert("Delete Successfully");
        } else {
          alert("Plz Try Again");
        }
      }
    } catch (error) {
      console.log(error);
    }
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
                <h5 className="card-title fw-semibold mb-4">Add Category</h5>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Create Category
                  </label>
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      style={{ width: "250px" }}
                      onChange={(e) => SetCategoryname(e.target.value)}
                      value={Categoryname}
                    />
                    {togglebtn === true ? (
                      <button
                        onClick={AddCategory}
                        className="btn btn-primary ml-2"
                        value={Categoryname}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary ml-2"
                        value={Categoryname}
                        onClick={Editbtn}
                      >
                        <Addicon/>
                      </button>
                    )}
                  </div>
                  <div id="emailHelp" class="form-text">
                    Creating Categories of plants.
                  </div>
                </div>
                <div className="table-responsive mt-4">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <tr>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Sno#</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Category</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Status</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Action</h6>
                        </th>
                      </tr>
                    </thead>
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
                              <td
                                className="border-bottom-0"
                                style={{ display: "flex" }}
                              >
                                <button
                                  onClick={() =>
                                    Edittoggle(elm._id, elm.categoryname)
                                  }
                                  className="btn btn-primary"
                                >
                                  <Editicon />
                                </button>
                                <button
                                  onClick={() => DeleteCategory(elm._id)}
                                  className="btn btn-danger"
                                >
                                  <Deleteicon />
                                </button>
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

export default Createcategory;
