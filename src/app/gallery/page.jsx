"use client";

import React from "react";
import Image from "next/image";
import "../Styles/Gallery/Gallerypage.css";
import SidePageContainer from "../../Components/SidePageContainer/SidePageContainer";
import PageWrapper from "./PageWrapper";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <SidePageContainer>
        <PageWrapper />
      </SidePageContainer>
    </div>
  );
};

export default GalleryPage;
