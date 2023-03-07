import React from "react";
import Link from "next/link";
import { urlFor, urlfor } from "../lib/client";

function FooterBanner({ footerBanner }) {
  console.log(footerBanner)
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount} de descuento</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <img src={urlFor(footerBanner.image)} className="footer-banner-image" alt="" />
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default FooterBanner;
