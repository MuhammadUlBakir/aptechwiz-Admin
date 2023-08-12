import React from "react";
import Sidebar from "../../PageComponents/Sidebar";
import Header from "../../PageComponents/Header";
import Deleteicon from "remixicon-react/DeleteBin2LineIcon";
import Editicon from "remixicon-react/Edit2LineIcon";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Productlist = () => {
  //-----------------
  const [data, Setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [category, Setcategory] = useState([]);

    const [prod, Setprod] = useState("")
    const [data2, Setdata2] = useState({
        name: "",
        qty: "",
        category: "",
    })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //---------------
  const Getproducts = async () => {
    try {
      const Productdata = await axios.get("https://tiny-pink-loafers.cyclic.app/api/getproduct");
      Setdata(Productdata.data.Productdata);
    } catch (error) {
      console.log(error);
    }
    };
    const Inputval = (e) => {
        const {name , value} = e.target
        Setdata2((pre) => {
           return {...pre , [name] : value}
       })
   }
  //----------------
  const GetCategory = async () => {
    try {
      const categorydata = await axios.get("https://tiny-pink-loafers.cyclic.app/api/Readcategory");
      if (categorydata) {
        Setcategory(categorydata.data.Categorydata);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //---------------------
    const DeleteProduct = async (val) => {
     try {
         if (val) {
             const Deleteproduct = await axios.post("https://tiny-pink-loafers.cyclic.app/api/delproduct", { userid: val });
             if (Deleteproduct.data.success === true && Deleteproduct.data.status === 200) {
                Getproducts();
                 alert("Product Deleted");
             } else {
                 alert('Error');
             }
        }
     } catch (error) {
         console.log(error);
     }
 }
  //------------
  const Editproduct = async (val) => {
      Setdata2({
          name: val.productname,
          qty: val.currentstock,
      })
      Setprod(val.productcategory)
    handleShow();
  };
  //-------------
  useEffect(() => {
    Getproducts();
    GetCategory();
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
              <h5 className="card-title fw-semibold mt-3 ml-5 text-center">
                All Product List
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
                      <th scope="col">Price</th>
                      <th scope="col">Product-Code</th>
                      <th scope="col">Month</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((elm, ind) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{ind + 1}</th>
                            <td>{elm.productname}</td>
                            <td>{elm.date}</td>
                            <td>{elm.productcategory}</td>
                            <td>{elm.productprice}</td>
                            <td>{elm._id}</td>
                            <td>{elm.month}</td>
                            <td style={{ display: "flex" }}>
                              <button
                                className="btn btn-success"
                                onClick={() => Editproduct(elm)}
                              >
                                <Editicon />
                              </button>
                              <button className="btn btn-danger" onClick={() => DeleteProduct(elm._id)}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={data2.name}      
                              name="name"
                              onChange={Inputval}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ marginTop: "-10px" }}
            >
              <Form.Label>Product Category</Form.Label>
                          <Form.Select onChange={Inputval}>
                              <option>{prod}</option>
                {category.map((elm, ind) => {
                  return (
                    <>
                      <option>{elm.categoryname}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ marginTop: "-10px" }}
            >
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control type="text" value={data2.qty} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert(data2.name)} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Productlist;
