import React from 'react'
import Helmet from "react-helmet";

import Pagebound from './PageRoutes/Pagebound';
import Dashboard from './MainPage/Dashboard';
const App = () => {
  return (
    <>
      <Helmet>
  <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/js/sidebarmenu.js"></script>
  <script src="../assets/js/app.min.js"></script>
  <script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="../assets/libs/simplebar/dist/simplebar.js"></script>
  <script src="../assets/js/dashboard.js"></script>
      </Helmet>
    {/*  Body Wrapper */}
  <Pagebound/>
    </>
  )
}

export default App