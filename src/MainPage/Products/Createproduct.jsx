import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import Deleteicon from "remixicon-react/DeleteBin2LineIcon";
import Editicon from "remixicon-react/Edit2LineIcon";
import Addicon from "remixicon-react/AddLineIcon";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Createproduct = () => {
  //---------------
  const [data, Setdata] = useState({
    productname: "",
    productcategory: "",
    currentstock: "",
    totalstock: "",
    productdiscount: "",
    comment: "",
    longdescription: "",
    shortdescription: "",
    productprice: "",
   
  });
    const [mainimg, Setmainimg] = useState("");
  const [secondimage, Setsecondimage] = useState("");
  const [category, Setcategory] = useState([]);
    const Inputval = (e) => {
        const {name , value} = e.target
        Setdata((pre) => {
          return {...pre , [name] : value}
      })
  }
    //---------------------
  const Categorylist = async () => {
    try {
     
      const Categorydata = await axios.get("https://tiny-pink-loafers.cyclic.app/Readcategory");
      if (Categorydata) {
        Setcategory(Categorydata.data.Categorydata);
      }
    } catch (error) {
      console.log(error);
    }
  }
   //----------------------
  const SaveSecondImage = async (val) => {
    try {
      const Secondaryimg = await Imgtobase64(secondimage);
      const save = await axios.post("https://tiny-pink-loafers.cyclic.app/api/savesecond", { userid: val, Simg: Secondaryimg })
    } catch (error) {
      console.log(error);
    }
  }
  //     

    //---------------------
  const Addproduct = async (e) => {
    e.preventDefault();
    if (!mainimg) {
      alert("Please select both main and secondary images");
      return;
    }
    try {
      const Mainurl = await Imgtobase64(mainimg);
      const productcode = Math.floor(1000000000 + Math.random() * 9000000000);
      if (data && Mainurl && productcode) {
        const Create = await axios.post("https://tiny-pink-loafers.cyclic.app/api/createproduct", { Mainurl, data})
        if (Create.data.success === true && Create.data.status === 201) {
          alert("Product Created Successfully");
          SaveSecondImage(Create.data.userid);
          Setdata("");
        } else {
          alert("Plz Try Again")
        }
      }
           
    } catch (error) {
      console.log(error);
    }
  };
  //---------------
  useEffect(() => {
    Categorylist();
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
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-4">
                  Create New Product{" "}
                </h5>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        {/* <label htmlFor="categoryName" className="col-sm-2 col-form-label">Create Category</label> */}
                        <div className="col-sm-6">
                          <label>
                            <h6>Product Name :</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                                                      onChange={Inputval}
                                                      value={data.productname}
                                                      name="productname"
                          />
                        </div>
                        <div className="col-sm-6">
                          <label>
                            <h6>Select Category</h6>
                          </label>
                          <select class="form-select form-select-md" aria-label=".form-select-sm example" onChange={Inputval} name="productcategory">
                            {category.map((elm, ind) => {
                              return (
                                <>
                                  <option selected>{elm.categoryname}</option>
                                </>
                              )
                            })}
</select>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Quantity</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                                                      onChange={Inputval}
                                                      name="currentstock"
                          />
                        </div>
                        
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Discount</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                                                      onChange={Inputval}
                                                      name="productdiscount"
                          />
                                              </div>
                                              <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Price</h6>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                                                      onChange={Inputval}
                                                      name="productprice"
                          />
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Comment</h6>
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                                                      rows="1"
                                                      onChange={Inputval}
                                                      name="comment"
                          ></textarea>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Description Long</h6>
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                                                      rows="1"
                                                      onChange={Inputval}
                                                      name="longdescription"
                          ></textarea>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Description Long</h6>
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                                                      rows="1"
                                                      onChange={Inputval}
                                                      name="shortdescription"
                          ></textarea>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Main Image</h6>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                                                      id="categoryName"
                                                      onChange={(e) => Setmainimg(e.target.files[0])}
                          />
                        </div>
                        <div className="col-sm-6 mt-2">
                          <label>
                            <h6>Product Secondary Images</h6>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                                                      id="categoryName"
                                                      onChange={(e) => Setsecondimage(e.target.files[0])}
                                                      
                          />
                        </div>
                                              <div className="row">
                                              <div className="col-sm-6 mt-2">
                          <button className="btn btn-primary mt-2" onClick={Addproduct}>
                            Add Product
                          </button>
                        </div>
                       </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Imgtobase64 = (val) => {
    return new Promise((resolve, reject) => { 
        const fileReader = new FileReader();
        fileReader.readAsDataURL(val);
        fileReader.onload = () => {
            resolve(fileReader.result); // this is base 64 string
        };
        fileReader.onerror = (error) => { 
            reject(error);
        }
    })
}

export default Createproduct;
