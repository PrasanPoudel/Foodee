import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Navbar from "../components/Navbar";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (<>
    <Navbar/>
    <div className="flex flex-col  justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="rgb(234 88 12 / 1)"/>
      ) : (
        <div className="flex text-center flex-col">
          <h2 className="text-4xl font-semibold mb-4 text-center">
            404 Error. Payment method isn't included.
          </h2>
        </div>
      )}
    </div>
      </>
  );
};

export default Success;
