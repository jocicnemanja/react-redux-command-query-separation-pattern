import React, { useEffect, useState } from "react";
import "./header.css";

export interface HeaderProps {
  title: string;
  children: any;
  logoSVG: any;
}

export const Header: React.FC<HeaderProps> = ({ title, logoSVG, children }) => {
  const [sideNav, setSideNav] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setSideNav(document.getElementById("basic-mobile-side-bar"));
    return () => {
      setSideNav(null);
    };
  }, []);

  const openMobileMenu = () => {
    if (sideNav) {
      sideNav.style.width = "100%";
    }
  };
  const closeMobileMenu = () => {
    if (sideNav) {
      sideNav.style.width = "0";
    }
  };
  const closeIconSVG = () => (
    <svg
      onClick={closeMobileMenu}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
    </svg>
  );

  const menuIconSVG = () => (
    <svg
      onClick={openMobileMenu}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
        fill="#1040e2"
      />
      <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
    </svg>
  );

  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            {logoSVG}
            <h1>{title}</h1>
          </div>
          <div className="menu-icon">{menuIconSVG()}</div>
          <div className="header-children">{children}</div>
        </div>
      </header>
      <div id="basic-mobile-side-bar" className="side-nav">
        <header>
          <div className="wrapper">
            <div />
            {closeIconSVG()}
          </div>
        </header>
        <div className="side-nav-children">{children}</div>
      </div>
    </>
  );
};
