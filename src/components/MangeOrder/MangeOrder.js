import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MangeOrder = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [order,setOrder]=useState(false)
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [status,orders]);

  // const status = "apporved";
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };

  const handleDeleteOrder = (id) => {
    fetch(`http://localhost:5000/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setOrder(!order);
        }
      });
    console.log(id);
  };



  return (
    <div className="container">
      <h1>All orders {orders.length}</h1>
      <Container>
          <div className="row">
            <div className="col">
            <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              <td>
                {/* <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                /> */}
                <select>

                <option onChange={handleStatus} defaultValue={pd.status}>{pd.status}</option>
                <option onChange={handleStatus} >Approve</option>
                </select>
              </td>
              <button className="btn bg-danger p-2"  onClick={() => handleDeleteOrder(pd?._id)}>Delete</button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-info p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
            </div>
          </div>
          <div>
            <Link to='/adminDashBoard'> <button className="btn btn-primary">AdminPanel</button> </Link>
          </div>
      </Container>

     
    </div>
  );
};

export default MangeOrder;
