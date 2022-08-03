const Address = () => {
  return (
    <div className=" card-py gap shadow-sm mb-1 flex flex-column  pb-3 mt-2">
      <div className="flex flex-between flex-wrap flex-align-item-center">
        <h1 className="font-mid-bold">Delivery Address</h1>
        <button className="btn-outline-primary btn btn-sm">Change</button>
      </div>
      <div className="flex flex-column gap-1">
        <span className="font-md-light">
          Deliver to: <span className="label-text">John Doe, 560078</span>
        </span>
        <span className="label-text">
          #1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony, Bangalore
        </span>
      </div>
    </div>
  );
};

export { Address };
