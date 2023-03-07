import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

export default function HeroBaner({ heroBaner }) {
  console.log(heroBaner)
  return (
    <div className="hero-banner-container">

      <div className="hero-banner-flex">
        <div className="flex-left">
          <p className="beats-solo">{heroBaner.smallText}</p>
          <h3>{heroBaner.midText}</h3>
          <h1>{heroBaner.largeText1}</h1>
          <Link href={`/product/${heroBaner.product}`}>
            <button type="button">{heroBaner.buttonText}</button>
          </Link>
        </div>

        <div className="flex-right">
          <img
            className="footer-banner-image"
            src={urlFor(heroBaner.image)}
            alt="dulce enchilado"
          />
          <div className="desc">
            <h5>Descripcion</h5>
            <p>{heroBaner.desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
