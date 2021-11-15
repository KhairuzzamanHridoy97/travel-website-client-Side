import React from "react";
import "./Services";
import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);
  const[service,setService]= useState(false)

  useEffect(() => {
    fetch("https://protected-atoll-20953.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services,service]);

  const handleDeleteService = (id) => {
    fetch(`https://protected-atoll-20953.herokuapp.com/delteServices/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setService(!service);
        }
      });
    console.log(id);
  };


  console.log(services);



  return (
    <div>
      <div className="container">
        <h1>Manage Services </h1>
        <div className="row mx-auto">
          <div className="col-lg-9">
          <Container>

          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service Title</th>
              <th scope="col">Service description</th>
              <th scope="col">Image URL</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          {services?.map((pd, index) => (
            <tbody>
              <tr>
                <th scope="row">{index}</th>
                <td>{pd.name}</td>
                <td>{pd.description}</td>
                <td>{pd.image}</td>
                {/* <td>{pd.status}</td> */}
                <button className="btn bg-danger p-2"   
                 onClick={() => handleDeleteService(pd?._id)}>Delete</button>
              </tr>
            </tbody>
          ))}
        </table>
          </Container>
          </div>
        </div>
        
      </div>
      <div>
        <Link to='/adminDashBoard'>
        <button className='btn btn-primary'>AdminPanel</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
