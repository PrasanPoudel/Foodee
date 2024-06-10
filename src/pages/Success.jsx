import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="rgb(234 88 12 / 1)"/>
      ) : (
        <div className="flex text-center flex-col">
          <h2 className="text-4xl font-semibold mb-4 text-center">
            Order Successful📦🥳
          </h2>
          <p>❤️:)Thank you for choosing <span className="text-orange-600 font-bold">Foodee</span>.<br />
           Enjoy your meal.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
