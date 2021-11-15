import React, { useEffect, useState } from "react";
import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({}); 

  const email = sessionStorage.getItem("email");
  useEffect(() => {
    fetch(`https://protected-atoll-20953.herokuapp.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    data.status = "pending";

    fetch("https://protected-atoll-20953.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    <div>
      <h1 className='m-5 text-primary'>Book Your Service</h1>

      <div className="booking-container">
        <div className="row container m-auto my-3">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={service?.image} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> Price: {service?.price} $</h1>
            <h1 className="text-danger"> Catagory: {service?.model}</h1>
          </div>
          <div className="col-md-6">
            <h1>Booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={service?.image}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <select {...register("model")} className="p-2 m-2 w-100">
                <option value={service?.model}>{service?.model}</option>
                <option value="premium">Premium</option>
                <option value="classic">Classic</option>
                <option value="business">Business</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-primary w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
