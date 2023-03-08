import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

function succes() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(()=> {
    localStorage.clear();
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])

  return (
    <div className="succes-wrapper">
      <div className="succes">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">
          Check your email inbox for the receipt
        </p>
        <p className="description">
          If you have any questions, please email to <a className="email" href="mailto:haha@haha.com">here</a>
        </p>
        <Link>
          <button className="btn" width="300px">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default succes;
