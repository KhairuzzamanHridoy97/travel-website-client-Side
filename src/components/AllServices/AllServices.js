import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllServices";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-3">
      <h1>All Services</h1>
      <div className="services">
        <div className="row container m-auto">
          {services?.map((pd) => (
            <div className="col-md-4 gx-4 gy-4 mx-auto">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>

                <h4>{pd?.name}</h4>
                <h5>Catagory: {pd?.model}</h5>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                <Link to={`/booking/${pd._id}`}>
                  <button className="btn btn-dark">Add To Cart</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
