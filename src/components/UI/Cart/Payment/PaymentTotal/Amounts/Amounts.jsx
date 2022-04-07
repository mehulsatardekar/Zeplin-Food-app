import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../../../../contexts/Cart/CartContext";

const Amounts = () => {
  const {
    cartState: { cartItems },
  } = useContext(CartContext);

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
      <div class="flex flex-between flex flex-align-item-center pt-2">
        <span class="font-md-light">SubTotal</span>
        <span>
          <span>&#x20b9;</span>
          <span>{total}</span>
        </span>
      </div>

      <div class="flex flex-between flex flex-align-item-center mt-1">
        <span class="font-md-light">Taxes & charges</span>
        <span>
          <span>&#x20b9;</span>
          <span>{taxCharge}</span>
        </span>
      </div>

      <div class="flex flex-between flex flex-align-item-center mt-1">
        <span class="font-md-light">Grand Total</span>
        <span>
          <span>&#x20b9;</span>
          <span>{grandTotal}</span>
        </span>
      </div>
    </>
  );
};

export default Amounts;
