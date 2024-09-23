import React from "react";

const productList = [
  { id: 1, productName: "iphone10", Price: 30 },
  { id: 2, productName: "iphone11", Price: 40 },
  { id: 3, productName: "iphone12", Price: 50 },
  { id: 4, productName: "iphone13", Price: 60 },
];

const ALka = () => {
  return (
    <div className="text-white">
      {productList.map((item) => {
        return (
          <div className="p-2 m-2 shadow-lg">
            {item.productName}
            <p className="text-blue-900">{item.Price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ALka;
