const PaymentModes = () => {
  return (
    <section class="menu-section mb-1 mt-1">
      <figure class="ui-card-default py-1 width-full payment-bg">
        <blockquote class="flex flex-column flex-wrap gap pb-2">
          <p class="font-bold ">Proceed To Payment.</p>
        </blockquote>

        <div class="flex flex-column gap">
          <button class="btn-primary btn btn-py-1 flex flex-justify-center flex-align-item-center width-full gap-1 ">
            <span class="icon-pad-left">Pay Online</span>
            <span class="material-icons icon-sm">payments</span>
          </button>
          <button class=" btn btn-py-1 flex flex-justify-center flex-align-item-center width-full gap-1 btn-payments">
            <span class="icon-pad-left">Pay Cash on delivery</span>
          </button>
        </div>
      </figure>
    </section>
  );
};

export default PaymentModes;
