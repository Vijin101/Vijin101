"use client";

import Link from "next/link";
import "./Header.css";
import { RiLoginCircleLine } from "react-icons/ri";
import LaptopMenu from "./LaptopMenu";
import { Button, Container, Row } from "react-bootstrap";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { useLayout } from "../../context/LayoutContext";
import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";

const Header = () => {
  const { scrolled, setScrolled } = useLayout();
  const router = useRouter();

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
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "MINISTRY", path: "/ministry" },
    { name: "FAMILY REGISTERATION", path: "/family-registration" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contactus" },
  ];
  return (
    <header className={`header-page ${scrolled ? "fixed-header" : ""}`}>
      <Container className=" h-100 py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <Link className="d-flex align-items-center logo-container" href="/">
              <img src="/assets/logo2.png" alt="Church Logo" className="church-logo" />
              <div className="church-info">
                <h1 className="church-name">Christian Evangelical Assembly</h1>
                <p className="church-description">Vision for Harvest</p>
              </div>
            </Link>
          </div>
          <div className="d-none d-xl-block">
            <LaptopMenu menus={menus} />
          </div>
          <div className="d-block d-xl-none">
            <MobileMenu menus={menus} />
          </div>
          <div className="d-none d-xl-block">
            <Button className="accent-btn" onClick={() => router.push("/auth/login")}>
              <RiLoginCircleLine className="me-1" />
              LOGIN
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
