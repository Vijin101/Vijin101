"use client";

import Link from "next/link";
import "./Header.css";
import { RiLoginCircleLine } from "react-icons/ri";
import LaptopMenu from "./LaptopMenu";
import { Button, Container, Row } from "react-bootstrap";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { useLayout } from "../../context/LayoutContext";
// import { usePathname } from "next/navigation";

const Header = () => {
  const { scrolled, setScrolled } = useLayout();

  // const pathName = usePathname();

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        // User has scrolled 100px down
        setScrolled(true);
      } else {
        // User hasn't scrolled 100px down
        setScrolled(false);
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menus = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <header className={`header-page ${scrolled ? "fixed-header" : ""}`}>
      <Container className=" h-100 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-6 col-md-2">
            <Link className="d-flex align-items-center" href="/">
              <div className="col-4 col-md-3">
                <img src={"/assets/logo.png"} alt={""} className="img-fluid" />
              </div>
              <span className="ps-2">My App</span>
            </Link>
          </div>
          <div className="d-none d-md-block">
            <LaptopMenu menus={menus} />
          </div>
          <div className="d-block d-md-none">
            <MobileMenu menus={menus} />
          </div>
          <div className="d-none d-md-block">
            <Button className="accent-btn">
              <RiLoginCircleLine className="me-1" />
              Login
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
