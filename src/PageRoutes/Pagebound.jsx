import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Dashboard from '../MainPage/Dashboard'
import Createcategory from '../MainPage/Category/Createcategory'
import Categorylist from '../MainPage/Category/Categorylist'
import Createproduct from '../MainPage/Products/Createproduct'
import Productview from '../MainPage/Products/Productview'
import Productlist from '../MainPage/Products/Productlist'
import Availability from '../MainPage/Stock/Availability'
import SellingStock from '../MainPage/Stock/Sellingstock'
const Pagebound = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/addcategory' element={<Createcategory />} />
                  <Route path='/categorylist' element={<Categorylist />} />
                  {/* -------------------- Products Routes ------------------ */}
                  <Route path='/createproduct' element={<Createproduct />} />
                  <Route path='/productview' element={<Productview />} />
                  <Route path='/productlist' element={<Productlist />} />
                  {/* --------------------- Stock Availability ----------------- */}
                  <Route path='/availability' element={<Availability />} />
                  <Route path='/sellingstock' element = {<SellingStock/>}/>
          </Routes>
          </BrowserRouter>
      </>
  )
}

export default Pagebound