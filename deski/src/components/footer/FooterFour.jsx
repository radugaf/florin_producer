import React from "react";
import { Link } from "react-router-dom";

const linksFooterContent = [
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
];

const legalFooterContent = [
  {
    itemName: "Terms of use",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Terms & conditions",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Privacy policy",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Cookie policy",
    routePath: "",
  },
];

const productsFooterContent = [
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
  {
    itemName: "Link",
    routePath: "/",
  },
];

const FooterFour = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a href="index-event.html">
            <img src="/" alt="" />
            <p>Logo here</p>
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:deskiinc@gmail.com">test@gmail.com</a>
          </li>
          <li>
            <a href="tel:+761 412 3224">123.456.789</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Legal</h5>
        <ul>
          {legalFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Chestii</h5>
        <ul className="pr-5">
          {productsFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterFour;
