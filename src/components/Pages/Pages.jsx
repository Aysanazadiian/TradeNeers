import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Groceries from "./Groceries";
import RawMaterials from "./RawMaterials";
import IndustrialPlants from "./IndustrialPlants";
import Imprint from "./Imprint";
import Contact from "./Contact";
import ConstructionMachinary from "./ConstructionMachinary";
import MedicalPlants from "./MedicalPlants";
import Header from "./../Header/Header";
import Home from "./Home";
import Footer from "./../Footer/Footer";
import KlarnaPaymentInformation from './KlarnaPaymentInformation';
import DataProtection from './DataProtection';

function Pages() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Groceries" element={<Groceries />} />
        <Route path="/RawMaterials" element={<RawMaterials />} />
        <Route
          path="/ConstructionMachinary"
          element={<ConstructionMachinary />}
        />
        <Route path="/IndustrialPlants" element={<IndustrialPlants />} />
        <Route path="/MedicalPlants" element={<MedicalPlants />} />
        <Route path="/" element={<Home />} />
        <Route path="/Imprint" element={<Imprint />} />
        <Route path="/DataProtection" element={<DataProtection />} />
        <Route path="/KlarnaPaymentInformation" element={<KlarnaPaymentInformation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Pages;
