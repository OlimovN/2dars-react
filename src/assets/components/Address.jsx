import React from "react";

const Address = ({ address }) => {
  return (
    <div>
      <h3>Address:</h3>
      <p>
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default Address;
