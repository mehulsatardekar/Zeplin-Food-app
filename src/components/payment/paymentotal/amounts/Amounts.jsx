/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useCart } from "../../../../contexts";

const Amounts = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const [total, setTotal] = useState();
  const [taxCharge, setTaxCharge] = useState(0);
  const [grandTotal, setGrandTotal] = useState();

  const taxCalculate = () => {
    if (total < 100 || (total >= 100 && total <= 200)) {
      setTaxCharge(0);
    } else if (total >= 200 && total <= 1000) {
      setTaxCharge(60);
    } else if (total > 1000 && total < 1500) {
      setTaxCharge(120);
    } else if (total > 1500 && total < 2000) {
      setTaxCharge(190);
    } else if (total > 2000) {
      setTaxCharge(240);
    }
  };

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
    taxCalculate();
    setGrandTotal(total + taxCharge);
  }, [
    cartItems,
    total,
    setGrandTotal,
    setTaxCharge,
    taxCharge,
    grandTotal,
    setTotal,
  ]);
  return (
    <>
      <div className="flex flex-between flex flex-align-item-center pt-2">
        <span className="font-md-light">SubTotal</span>
        <span>
          <span>&#x20b9;</span>
          <span>{total && total.toFixed(2)}</span>
        </span>
      </div>

      <div className="flex flex-between flex flex-align-item-center mt-1">
        <span className="font-md-light">Taxes & charges</span>
        <span>
          <span>&#x20b9;</span>
          <span>{taxCharge}</span>
        </span>
      </div>

      <div className="flex flex-between flex flex-align-item-center mt-1">
        <span className="font-md-light">Grand Total</span>
        <span>
          <span>&#x20b9;</span>
          <span>{grandTotal && grandTotal.toFixed(2)}</span>
        </span>
      </div>
    </>
  );
};

export { Amounts };
